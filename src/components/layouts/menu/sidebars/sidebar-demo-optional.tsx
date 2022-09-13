import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import DrawerWrapper from '@/components/ui/drawer/drawer-wrapper';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';

const sidebarLinks = [
    { href: Routes.contactUs, label: 'Contact' },
    { href: Routes.help, label: 'Help' },
    { href: Routes.post, icon: null, label: 'Post' },
    { href: Routes.profile, icon: null, label: 'Profile' },
  ];

export default function SidebarDemoOptional() {
  const router = useRouter();
  const [_, closeSidebar] = useAtom(drawerAtom);
  

  function handleClick(path: string) {
    router.push(path);
    closeSidebar({ display: false, view: '' });
  }

  return (
    <DrawerWrapper>
      <ul className="flex-grow">
        {sidebarLinks.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => handleClick(href)}
              className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </DrawerWrapper>
  );
}
