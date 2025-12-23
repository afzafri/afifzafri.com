import { IconType } from 'react-icons';

interface SocialIconProps {
  Icon: IconType;
  url: string;
}

export default function SocialIcon({ Icon, url }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <Icon />
    </a>
  );
}
