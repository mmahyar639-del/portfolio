/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. خروجی استاتیک برای هاست‌هایی مثل GitHub Pages
  output: 'export',
  
  // 2. غیرفعال کردن بهینه‌سازی تصویر (چون گیت‌هاب پیج سرور ندارد)
  images: {
    unoptimized: true,
  },

  // 3. تنظیم هدرهای امنیتی پایه
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { 
            key: 'X-Frame-Options', 
            value: 'DENY' // جلوگیری از Clickjacking
          },
          { 
            key: 'X-Content-Type-Options', 
            value: 'nosniff' // جلوگیری از sniffing نوع فایل
          },
          { 
            key: 'Referrer-Policy', 
            value: 'strict-origin-when-cross-origin' // کنترل اطلاعات ارجاع
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig