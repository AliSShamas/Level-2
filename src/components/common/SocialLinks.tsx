import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

const socialLinks = [
  {
    href: '#',
    label: 'LinkedIn',
    icon: FaLinkedinIn
  },
  {
    href: '#',
    label: 'Instagram',
    icon: FaInstagram
  },
  {
    href: '#',
    label: 'Facebook',
    icon: FaFacebookF
  },
  {
    href: '#',
    label: 'YouTube',
    icon: FaYoutube
  }
];

export default function SocialLinks({variant = 'default'}: {variant?: 'default' | 'header' | 'menu'}) {
  const isHeader = variant !== 'default';
  const isMenu = variant === 'menu';

  return (
    <div className={`flex items-center ${isMenu ? 'gap-3 text-emerald-100 lg:gap-5' : isHeader ? 'gap-3 text-green-700 sm:gap-4 lg:gap-5' : 'gap-3'}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`transition-[background-color,color,opacity,translate] duration-200 ease-out motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${isMenu ? 'inline-flex size-8 items-center justify-center rounded-lg hover:bg-white/10 hover:text-white focus-visible:outline-emerald-200' : isHeader ? 'inline-flex size-8 items-center justify-center rounded-lg hover:bg-green-50 hover:text-green-900 focus-visible:outline-green-700' : 'rounded-sm hover:opacity-70 focus-visible:outline-green-700'}`}
          >
            <Icon className={isHeader ? 'size-5 lg:size-6' : 'size-4'} />
          </a>
        );
      })}
    </div>
  );
}
