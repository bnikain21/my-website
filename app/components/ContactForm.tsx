"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e: any) => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString(); 
    e.preventDefault();
    setLoading(true);

    const params = {
        "title": `Message Received from ${form.name}`,
        "name": form.name,
        "message": form.message,
        "time": currentTime,
        "email":form.email
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send. Try again later."))
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full flex justify-center px-6 py-12">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-2xl space-y-5 bg-a1 backdrop-blur-md p-8 rounded-2xl shadow-lg border"
      >
        <h2 className="text-3xl font-bold text-center text-b1">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          value={form.name}
          className="w-full border rounded-lg p-3 text-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          value={form.email}
          className="w-full border rounded-lg p-3 text-lg"
          required
        />


        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          value={form.message}
          rows={5}
          className="w-full border rounded-lg p-3 text-lg"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-b1 text-white py-3 font-semibold text-lg hover:bg-b1/90 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
