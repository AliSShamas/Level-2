import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import ProgramAreas from "@/components/Training/ProgramAreas";
import TrainingHero from "@/components/Training/TrainingHero";
import TrainingOffer from "@/components/Training/TrainingOffer";
import WhatToExpect from "@/components/Training/WhatToExpect";
import WhoIsThisFor from "@/components/Training/WhoIsThisFor";

import styles from "@/components/Training/Training.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TrainingPage.hero" });
  return { title: t("title"), description: t("description") };
}

export default function TrainingPage() {
  const locale = useLocale();

  return (
    <main className={styles.page}>
      <TrainingHero />
      <WhoIsThisFor />
      <WhatToExpect />
      {/* A language change starts a fresh search in the newly selected language. */}
      <ProgramAreas key={locale} />
      <TrainingOffer />
    </main>
  );
}
