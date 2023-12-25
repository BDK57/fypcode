/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist'
,
    images: {
        domains: [
          "shadiyana-vendor-images.s3.ap-south-1.amazonaws.com",
          "assets.vogue.com",
          "m.media-amazon.com",
          "upload.wikimedia.org",
          "lh3.googleusercontent.com",
          "encrypted-tbn0.gstatic.com",
          "ww.web.pk",
          "rentkea.com",
          "hmhire.co.uk",
          "lh5.googleusercontent.com",
          "cdn.pixabay.com",
          "nikaah.pk",
          "theventplanet.com",
          "scontent.fkhi2-3.fna.fbcdn.net",
          "pbs.twimg.com",
          "res.cloudinary.com"
        ],
      },
}


module.exports = nextConfig
