import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';

const headerLinks = [
  { href: Routes.profile, icon: null, label: 'Profile' },
  { href: Routes.post, icon: null, label: 'Post' },
  { href: Routes.help, label: 'Help' },
  { href: Routes.contactUs, label: 'Contact' },
];

const StaticMenu = () => {
  return (
    <>
      { headerLinks.map(link =>(
        <li key={link.href}>
        <Link
          href={link.href}
          className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          aria-label={link.label}
        >
          {link.icon && <span className="mr-2">{link.icon}</span>}
          {link.label}
        </Link>
      </li>
      ))}
    </>
  );
};

export default StaticMenu;
