"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Get in Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Contact PublishHub
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, suggestion, or feedback? We would love to
            hear from you.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Let's start a conversation
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Whether you are a reader, author, or someone interested in
              PublishHub, feel free to reach out to us.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-1 text-gray-600">
                    support@publishhub.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Location
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  💬
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Community
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Connect with authors and readers on PublishHub.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>

            <p className="mt-2 text-gray-500">
              Fill out the form and we'll get back to you.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-purple-50 p-6 text-center">

                <div className="text-3xl">
                  ✓
                </div>

                <h3 className="mt-3 font-semibold text-gray-900">
                  Message Sent!
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Thank you for contacting PublishHub.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-[#7C3AED] hover:text-[#6D28D9]"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#7C3AED] px-6 py-3 font-semibold text-white transition hover:bg-[#6D28D9]"
                >
                  Send Message
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-[#18181B]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">

          <h2 className="text-2xl font-bold md:text-3xl">
            Have an idea for PublishHub?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Your feedback helps us make the platform better for readers
            and authors.
          </p>

        </div>
      </section>

    </main>
  );
}