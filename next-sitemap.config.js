/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cakecentral.co.uk', // Replace with your website's URL
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 7000, // Adjust the number of URLs per sitemap if necessary
};