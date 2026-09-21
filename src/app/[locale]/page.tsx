import AboutPreview from '@/components/home/AboutPreview';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import MediaPreview from '@/components/home/MediaPreview';
import ThreePillars from '@/components/home/ThreePillars';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <AboutPreview/>
      <ThreePillars />
      <MediaPreview />
    </main>
  );
}