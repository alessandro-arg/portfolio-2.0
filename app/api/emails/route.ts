import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../emails/WelcomeEmail";
import AdminLeadEmail from "../../emails/AdminLeadEmail";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

function validate({ name, email, message }: Body) {
  const errors: Record<string, string> = {};
  const trimmedName = (name ?? "").trim();
  const onlyLettersAndSpaces = /^[\p{L}\s]+$/u.test(trimmedName);
  const letterCount = (trimmedName.match(/\p{L}/gu) || []).length;

  if (!trimmedName) errors.name = "Name is required";
  else if (!onlyLettersAndSpaces)
    errors.name = "Only letters and spaces are allowed";
  else if (letterCount < 3) errors.name = "Name must have at least 3 letters";

  const trimmedEmail = (email ?? "").trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!trimmedEmail) errors.email = "Email is required";
  else if (!emailRegex.test(trimmedEmail))
    errors.email = "Please enter a valid email address";

  const trimmedMessage = (message ?? "").trim();
  if (!trimmedMessage) errors.message = "Message is required";
  else if (trimmedMessage.length < 10)
    errors.message = "Message must be at least 10 characters";

  return { ok: Object.keys(errors).length === 0, errors };
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not set on the server.");
  }
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not set on the server." },
      { status: 500 }
    );
  }

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { ok, errors } = validate(body);
  if (!ok) {
    return NextResponse.json(
      { error: "Validation failed", errors },
      { status: 422 }
    );
  }

  const { name = "", email = "", message = "" } = body;

  try {
    const resend = getResend();
    // 1) Send confirmation to the user
    await resend.emails.send({
      from: "Alessandro <hello@alessandro-argenziano.com>",
      to: email,
      subject: "Thanks for reaching out 👋",
      react: WelcomeEmail({ name }),
    });

    // 2) Send lead to you
    await resend.emails.send({
      from: "Contact form - <hello@alessandro-argenziano.com>",
      to: "contact@alessandro-argenziano.com",
      replyTo: email,
      subject: `New contact form message from ${name}`,
      react: AdminLeadEmail({ name, email, message }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    const msg = String(err) || "Failed to send email(s). Check server logs.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
