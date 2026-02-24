"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import content from "@/lib/content.json";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          {content.contactForm.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          placeholder={content.contactForm.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          {content.contactForm.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          placeholder={content.contactForm.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          {content.contactForm.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          placeholder={content.contactForm.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? content.contactForm.sendingButton : content.contactForm.submitButton}
      </button>
      {status === "sent" && (
        <p className="text-sm text-green-600">{content.contactForm.successMessage}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          {content.contactForm.errorMessage}
        </p>
      )}
    </form>
  );
}
