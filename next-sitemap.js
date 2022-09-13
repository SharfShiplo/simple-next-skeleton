module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          // allow: '/',
          disallow: ['*/logout', '*/404', '*/profile'], // 
        },
      ],
    },
    exclude: [
      '*/404',
      '*/change-password',
      '*/logout',
      '*/profile',
    ],
  };
  
  // please read the documentation for details information about configration here
  // https://github.com/iamvishnusankar/next-sitemap