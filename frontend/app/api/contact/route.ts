require("dotenv").config();
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PASSWORD = process.env.password;

// To handle a GET request to /api
// export async function GET(request) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// To handle a POST request to /api
export async function POST(request, response) {
  // Do whatever you want
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: "formularz@nor-bud.com",
    to: "contact@francky.works",
    subject: `Wiadomość od ${request.body.name}`,
    text: request.body.message,
    html: `<div>${request.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  response.status(200);

  // return NextResponse.json({ email: request.body }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...
