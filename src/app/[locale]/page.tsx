import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">
        {t('title')}
      </h1>
    </main>
  );
}