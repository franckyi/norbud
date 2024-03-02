import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// To handle a GET request to /api
// export async function GET(request) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // return NextResponse.json({ email: request.body }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...
