import CoachingHero from "@/components/Coaching/CoachingHero";
import CoachingProcess from "@/components/Coaching/CoachingProcess";
import WhatToExpect from "@/components/Coaching/WhatToExpect";
import WhoThisIsFor from "@/components/Coaching/WhoThisIsFor";

import styles from '@/components/Coaching/Coaching.module.css';
import Testimonials from "@/components/home/Testimonials";

export default function CoachingPage() {
  return (
    <main className={styles.page}>
      <CoachingHero />
      <WhoThisIsFor />
      <WhatToExpect />
      <CoachingProcess />
      <Testimonials/>
    </main>
  );
}
