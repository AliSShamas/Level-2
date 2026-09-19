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

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="transition-opacity hover:opacity-60"
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}