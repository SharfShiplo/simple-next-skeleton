import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'Tetonprivate',
  author: "Sharfuddin",
  description: '',
  logo: {
    url: '/logo.png',
    alt: 'Tetonprivate',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  authorizedLinks: [
    { href: Routes.profile, label: 'Profile' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'Profile' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'Profile',
    },
    {
      href: Routes.help,
      label: 'Help',
    },
    {
      href: Routes.logout,
      label: 'Logout',
    },
  ],
  footer: {
    copyright: {
      name: 'Teton',
      href: '/',
    },
    address: 'X/2,Y/3, Tropical Tower 5th floor Z/0, A/1 Bir Uttam Ave',
    email: 'company@yourdomain.com',
    phone: '0000-1111-2222-333',
    social:[
      {
        icon: 'FacebookIcon',
        url: 'https://www.facebook.com/xxx'
      },
      {
        icon: 'InstagramIcon',
        url: 'https://www.instagram.com/xxx'
      },
      {
        icon: 'YouTubeIcon',
        url: 'http://youtube.com/xxx'
      },
    ],
    menus: [
      {
        title: 'Explore',
        links: [
          {
            name: 'About us',
            href: '/',
          },
          {
            name: 'Sitemap',
            href: '/',
          },
          {
            name: 'Bookmarks',
            href: '/',
          },
          {
            name: 'Signin',
            href: '/',
          },
        ],
      },
      {
        title: 'Customer service',
        links: [
          {
            name: 'Help',
            href: Routes.help,
          },
          {
            name: 'Contact',
            href: Routes.contactUs,
          },
        ],
      },
      {
        title: 'Information',
        links: [
          {
            name: 'Sitemap',
            href: '/',
          },
        ],
      },
    ],
  },
};
