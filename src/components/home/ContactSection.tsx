import Image from "next/image";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import SocialLinks from "@/components/common/SocialLinks";

export default function ContactSection() {
  const t = useTranslations("HomePage.contact");

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-white px-6 py-20 md:py-28">
      {/* Decorative leaf */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 start-0 hidden lg:block"
      >
        <Image
          src="/images/Contact-Leaf.png"
          alt=""
          width={500}
          height={700}
          className="
            h-auto w-[380px]
            -translate-x-3 -translate-y-10
            opacity-60 xl:w-[470px]
            rtl:translate-x-3 rtl:-scale-x-100
          "
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left side */}
          <div className="lg:ps-12 xl:ps-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {t("description")}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Mail className="size-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {t("emailLabel")}
                  </p>

                  <a
                    href="mailto:hello@example.com"
                    className="mt-1 inline-block text-slate-600 transition hover:text-green-700"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Phone className="size-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {t("phoneLabel")}
                  </p>

                  <p className="mt-1 text-slate-600">
                    {t("phoneValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <MessageSquare className="size-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {t("socialLabel")}
                  </p>

                  <div className="mt-3">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-3xl bg-stone-100 p-7 sm:p-9">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-800"
                >
                  {t("name")}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  className="
                    mt-2 w-full rounded-xl border border-slate-300
                    bg-white px-4 py-3
                    text-start text-slate-900 outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2 focus:ring-green-700/20
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-800"
                >
                  {t("email")}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="
                    mt-2 w-full rounded-xl border border-slate-300
                    bg-white px-4 py-3
                    text-start text-slate-900 outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2 focus:ring-green-700/20
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-slate-800"
                >
                  {t("phone")}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  className="
                    mt-2 w-full rounded-xl border border-slate-300
                    bg-white px-4 py-3
                    text-start text-slate-900 outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2 focus:ring-green-700/20
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="text-sm font-semibold text-slate-800"
                >
                  {t("interest")}
                </label>

                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className="
                    mt-2 w-full rounded-xl border border-slate-300
                    bg-white px-4 py-3
                    text-start text-slate-900 outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2 focus:ring-green-700/20
                  "
                >
                  <option value="" disabled>
                    {t("interestPlaceholder")}
                  </option>

                  <option value="coaching">
                    {t("coaching")}
                  </option>

                  <option value="consulting">
                    {t("consulting")}
                  </option>

                  <option value="training">
                    {t("training")}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-800"
                >
                  {t("message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  className="
                    mt-2 w-full resize-none rounded-xl
                    border border-slate-300 bg-white
                    px-4 py-3 text-start text-slate-900
                    outline-none transition
                    focus:border-green-700
                    focus:ring-2 focus:ring-green-700/20
                  "
                />
              </div>

              <button
                type="button"
                className="
                  w-full rounded-xl bg-green-700
                  px-6 py-4 text-base font-semibold
                  text-white transition
                  hover:bg-green-800
                  active:opacity-80
                "
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
