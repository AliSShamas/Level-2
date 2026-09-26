import AboutPreview from '@/components/home/AboutPreview';
import ContactSection from '@/components/home/ContactSection';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import MediaPreview from '@/components/home/MediaPreview';
import Testimonials from '@/components/home/Testimonials';
import ThreePillars from '@/components/home/ThreePillars';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <AboutPreview/>
      <ThreePillars />
      <MediaPreview />
      <Testimonials/>
      <ContactSection />
    </main>
  );
}