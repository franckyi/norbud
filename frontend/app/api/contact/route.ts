import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
require("dotenv").config();

export async function POST(req: NextRequest, res: NextResponse) {
  const { subject, name, phone, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.RECIPIENT,
    subject: `Wiadomość od ${name} | ${email} | ${phone}`,
    html: `<h1>${subject}</h1><div>${message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    return NextResponse.json({ email: req.body }, { status: 200 });
  } catch (error) {
    console.error("W trakcie wysyłania email wystąpił błąd:", error);
    return NextResponse.json(
      { error: "Błąd wysyłania email" },
      { status: 500 }
    );
  }
}
