import * as React from "react";
import { Html } from "@react-email/html";

export default function AdminLeadEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <div style={{ fontFamily: "Inter, Arial, sans-serif", lineHeight: 1.6 }}>
        <h2 style={{ margin: "0 0 12px" }}>New contact form submission</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong>
        </p>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            background: "#f7f7f7",
            padding: "12px",
            borderRadius: 8,
          }}
        >
          {message}
        </pre>
      </div>
    </Html>
  );
}
