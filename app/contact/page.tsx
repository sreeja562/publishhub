"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-slate-900

        dark:bg-[#09090b]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          border-b
          border-gray-200

          bg-gradient-to-b
          from-purple-50
          via-white
          to-white

          dark:border-white/10
          dark:from-purple-950/20
          dark:via-[#09090b]
          dark:to-[#09090b]
        "
      >
        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40

            h-96
            w-96

            rounded-full

            bg-purple-500/10

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32

            h-80
            w-80

            rounded-full

            bg-purple-500/5

            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-5xl

            px-6
            py-20

            text-center

            sm:px-10
            sm:py-24
          "
        >
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-purple-100

              text-[#7C3AED]

              dark:bg-purple-500/10
            "
          >
            <MessageCircle size={25} />
          </div>

          <p
            className="
              mt-6

              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-[#7C3AED]
            "
          >
            Get in Touch
          </p>

          <h1
            className="
              mt-4

              text-4xl
              font-extrabold
              tracking-tight

              text-slate-900

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            Contact PublishHub
            <span className="text-[#7C3AED]">.</span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-base
              leading-7

              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-400
            "
          >
            Have a question, suggestion, or feedback?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          px-6
          py-20

          sm:px-10
          sm:py-24

          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-start
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div>
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]

                text-[#7C3AED]
              "
            >
              Contact Information
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-extrabold
                tracking-tight

                text-slate-900

                sm:text-4xl

                dark:text-white
              "
            >
              Let's start a conversation
            </h2>

            <p
              className="
                mt-5
                max-w-xl

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              Whether you are a reader, author, or
              someone interested in PublishHub, feel
              free to reach out to us.
            </p>

            {/* Contact cards */}

            <div className="mt-8 space-y-4">
              {/* Email */}

              <div
                className="
                  group
                  flex
                  gap-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  p-5

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-purple-200
                  hover:shadow-lg
                  hover:shadow-purple-500/5

                  dark:border-white/10
                  dark:bg-white/[0.04]

                  dark:hover:border-purple-500/30
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    bg-purple-100

                    text-[#7C3AED]

                    transition-transform
                    duration-300

                    group-hover:scale-105

                    dark:bg-purple-500/10
                  "
                >
                  <Mail size={21} />
                </div>

                <div>
                  <h3
                    className="
                      font-bold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    Email
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm

                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    support@publishhub.com
                  </p>
                </div>
              </div>

              {/* Location */}

              <div
                className="
                  group
                  flex
                  gap-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  p-5

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-purple-200
                  hover:shadow-lg
                  hover:shadow-purple-500/5

                  dark:border-white/10
                  dark:bg-white/[0.04]

                  dark:hover:border-purple-500/30
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    bg-purple-100

                    text-[#7C3AED]

                    transition-transform
                    duration-300

                    group-hover:scale-105

                    dark:bg-purple-500/10
                  "
                >
                  <MapPin size={21} />
                </div>

                <div>
                  <h3
                    className="
                      font-bold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    Location
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm

                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Hyderabad, India
                  </p>
                </div>
              </div>

              {/* Community */}

              <div
                className="
                  group
                  flex
                  gap-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  p-5

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-purple-200
                  hover:shadow-lg
                  hover:shadow-purple-500/5

                  dark:border-white/10
                  dark:bg-white/[0.04]

                  dark:hover:border-purple-500/30
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    bg-purple-100

                    text-[#7C3AED]

                    transition-transform
                    duration-300

                    group-hover:scale-105

                    dark:bg-purple-500/10
                  "
                >
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3
                    className="
                      font-bold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    Community
                  </h3>

                  <p
                    className="
                      mt-1

                      max-w-md

                      text-sm
                      leading-6

                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Connect with authors and readers
                    on PublishHub.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-gray-200

              bg-white

              p-7

              shadow-xl
              shadow-gray-200/40

              sm:p-9

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-black/20
            "
          >
            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24

                h-48
                w-48

                rounded-full

                bg-purple-500/10

                blur-3xl
              "
            />

            <div className="relative">
              <h2
                className="
                  text-2xl
                  font-extrabold

                  text-slate-900

                  dark:text-white
                "
              >
                Send us a message
              </h2>

              <p
                className="
                  mt-2
                  text-sm

                  text-slate-500

                  dark:text-slate-400
                "
              >
                Fill out the form and we'll get back
                to you.
              </p>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {submitted ? (
                <div
                  className="
                    mt-8

                    rounded-2xl

                    border
                    border-purple-200

                    bg-purple-50

                    p-8

                    text-center

                    dark:border-purple-500/20
                    dark:bg-purple-500/10
                  "
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full

                      bg-purple-100

                      text-[#7C3AED]

                      dark:bg-purple-500/20
                    "
                  >
                    <CheckCircle2 size={28} />
                  </div>

                  <h3
                    className="
                      mt-4

                      text-xl
                      font-bold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    Message Sent!
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6

                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    Thank you for contacting PublishHub.
                    We'll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-6

                      inline-flex
                      items-center
                      gap-2

                      text-sm
                      font-semibold

                      text-[#7C3AED]

                      transition

                      hover:text-[#6D28D9]
                    "
                  >
                    Send another message

                    <ArrowRight size={15} />
                  </button>
                </div>
              ) : (
                /* =================================================
                   FORM
                ================================================= */

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block

                        text-sm
                        font-semibold

                        text-slate-700

                        dark:text-slate-300
                      "
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="
                        w-full

                        rounded-xl

                        border
                        border-gray-200

                        bg-white

                        px-4
                        py-3.5

                        text-sm
                        text-slate-900

                        outline-none

                        transition-all

                        placeholder:text-gray-400

                        focus:border-[#7C3AED]
                        focus:ring-4
                        focus:ring-purple-500/10

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-white
                        dark:placeholder:text-gray-500
                      "
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block

                        text-sm
                        font-semibold

                        text-slate-700

                        dark:text-slate-300
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="
                        w-full

                        rounded-xl

                        border
                        border-gray-200

                        bg-white

                        px-4
                        py-3.5

                        text-sm
                        text-slate-900

                        outline-none

                        transition-all

                        placeholder:text-gray-400

                        focus:border-[#7C3AED]
                        focus:ring-4
                        focus:ring-purple-500/10

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-white
                        dark:placeholder:text-gray-500
                      "
                    />
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="
                        mb-2
                        block

                        text-sm
                        font-semibold

                        text-slate-700

                        dark:text-slate-300
                      "
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="
                        w-full

                        rounded-xl

                        border
                        border-gray-200

                        bg-white

                        px-4
                        py-3.5

                        text-sm
                        text-slate-900

                        outline-none

                        transition-all

                        placeholder:text-gray-400

                        focus:border-[#7C3AED]
                        focus:ring-4
                        focus:ring-purple-500/10

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-white
                        dark:placeholder:text-gray-500
                      "
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="
                        mb-2
                        block

                        text-sm
                        font-semibold

                        text-slate-700

                        dark:text-slate-300
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message..."
                      required
                      className="
                        w-full

                        resize-none

                        rounded-xl

                        border
                        border-gray-200

                        bg-white

                        px-4
                        py-3.5

                        text-sm
                        leading-6
                        text-slate-900

                        outline-none

                        transition-all

                        placeholder:text-gray-400

                        focus:border-[#7C3AED]
                        focus:ring-4
                        focus:ring-purple-500/10

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-white
                        dark:placeholder:text-gray-500
                      "
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      group

                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-[#7C3AED]

                      px-6
                      py-3.5

                      text-sm
                      font-semibold
                      text-white

                      shadow-lg
                      shadow-purple-500/20

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#6D28D9]
                      hover:shadow-xl
                      hover:shadow-purple-500/30
                    "
                  >
                    Send Message

                    <Send
                      size={17}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[#111114]
        "
      >
        {/* Purple glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0

            h-64
            w-96

            -translate-x-1/2

            rounded-full

            bg-purple-600/20

            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-4xl

            px-6
            py-20

            text-center

            sm:py-24
          "
        >
          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight

              text-white

              sm:text-4xl
            "
          >
            Have an idea for PublishHub?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl

              leading-7

              text-slate-400
            "
          >
            Your feedback helps us make the platform
            better for readers and authors.
          </p>

          <div
            className="
              mt-7

              flex
              items-center
              justify-center
              gap-2

              text-sm
              font-medium

              text-purple-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            We value your feedback
          </div>
        </div>
      </section>
    </main>
  );
}