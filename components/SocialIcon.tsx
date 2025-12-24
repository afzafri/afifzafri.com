import { IconType } from 'react-icons';

interface SocialIconProps {
  Icon: IconType;
  url: string;
  label: string;
}

export default function SocialIcon({ Icon, url, label }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label={label}
    >
      <Icon />
    </a>
  );
}
