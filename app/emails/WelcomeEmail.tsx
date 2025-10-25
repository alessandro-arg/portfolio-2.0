import * as React from "react";
import { Html } from "@react-email/html";

export default function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <div style={{ fontFamily: "Inter, Arial, sans-serif", lineHeight: 1.6 }}>
        <h2 style={{ margin: "0 0 12px" }}>Hi {name},</h2>
        <p>
          thanks for getting in touch! I’ve received your message and I’ll reach
          out to you as soon as possible.
        </p>
        <p>Have a great day,</p>
        <p>— Alessandro</p>
        <hr
          style={{ margin: "20px 0", border: 0, borderTop: "1px solid #eee" }}
        />
        <p style={{ fontSize: 12, color: "#888" }}>
          If you didn’t submit this form, you can ignore this email.
        </p>
        <p style={{ fontSize: 12, color: "#888" }}>
          This is an auto generated email, so please do not reply on this email.
        </p>
      </div>
    </Html>
  );
}
