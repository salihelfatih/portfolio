"use server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function validateString(str, minLength, maxLength) {
  return (
    str &&
    typeof str === "string" &&
    str.length >= minLength &&
    str.length <= maxLength
  );
}

function validateEmail(email) {
  return (
    email &&
    typeof email === "string" &&
    email.includes("@") &&
    email.includes(".")
  );
}

function validatePhone(phone) {
  return (
    phone && typeof phone === "string" && phone.replace(/\D/g, "").length >= 10
  );
}

export async function sendEmail(formData) {
  console.log("API Key set:", !!process.env.SENDGRID_API_KEY);
  console.log("Verified Sender:", process.env.SENDGRID_VERIFIED_SENDER);
  console.log("Recipient Email:", process.env.SENDGRID_RECIPIENT_EMAIL);

  const { firstName, lastName, email, phone, service, message } = formData;

  // Validations
  if (!validateString(firstName, 1, 50)) {
    return { error: "First name should be between 1 and 50 characters" };
  }
  if (!validateString(lastName, 1, 50)) {
    return { error: "Last name should be between 1 and 50 characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Invalid email address" };
  }
  if (!validatePhone(phone)) {
    return { error: "Invalid phone number" };
  }
  if (!validateString(service, 1, 100)) {
    return { error: "Service should be between 1 and 100 characters" };
  }
  if (!validateString(message, 1, 5000)) {
    return { error: "Message should be between 1 and 5000 characters" };
  }

  const htmlContent = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const verifiedEmail = process.env.SENDGRID_VERIFIED_SENDER;
  const recipientEmail = process.env.SENDGRID_RECIPIENT_EMAIL;

  if (!verifiedEmail) {
    return { error: "SENDGRID_VERIFIED_SENDER is not set" };
  }

  if (!recipientEmail) {
    return { error: "SENDGRID_RECIPIENT_EMAIL is not set" };
  }

  const msg = {
    to: recipientEmail,
    from: verifiedEmail,
    subject: "New Contact Form Submission",
    html: htmlContent,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.body : error
    );
    return {
      success: false,
      error: "Failed to send email",
      details: error.message,
    };
  }
}
