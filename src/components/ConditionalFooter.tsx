// 'use client'

// import { usePathname } from 'next/navigation';
// import Footer from '@/components/Footer';

// const ConditionalFooter = () => {
//   const pathname = usePathname();
  
//   // Jin pages par footer NAHI dikhana hai
//   const hideFooterOnPages = [
//     '/pages/testimonials',
//   ];
  
//   // Agar current page list mein hai to footer mat dikhao
//   if (hideFooterOnPages.includes(pathname)) {
//     return null;
//   }
  
//   // Baaki sab pages par footer dikhao
//   return <Footer />;
// };

// export default ConditionalFooter;