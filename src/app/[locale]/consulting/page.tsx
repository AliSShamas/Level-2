import ConsultingHero from '@/components/Consulting/ConsultingHero';
import ConsultingOffer from '@/components/Consulting/ConsultingOffer';
import WhatToExpect from '@/components/Consulting/WhatToExpect';
import WhoThisIsFor from '@/components/Consulting/WhoThisIsFor';

import styles from '@/components/Consulting/Consulting.module.css';

export default function ConsultingPage() {
  return (
    <main className={styles.page}>
      <ConsultingHero />
      <WhoThisIsFor />
      <WhatToExpect />
      <ConsultingOffer />
    </main>
  );
}
