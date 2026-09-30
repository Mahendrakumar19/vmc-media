'use client'
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-primary dark:bg-gray-900 text-primary-foreground dark:text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Company Info */}
          <div className="space-y-3">
            <Link href="/" className="inline-block bg-white/95 rounded-xl p-2 shadow-sm hover:opacity-95 transition-opacity">
              <img 
                src="/logo-vm.png" 
                alt="VMC Media - Connect · Create · Grow" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              VMC Media Pvt. Ltd. is a Noida(NCR) based digital marketing Company specialising in local SEO, marketplace growth, WhatsApp lead funnels, and performance marketing for Indian brands.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <Link href="#" className="p-2 bg-white/10 dark:bg-gray-800 hover:bg-secondary dark:hover:bg-blue-600 rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 dark:bg-gray-800 hover:bg-secondary dark:hover:bg-blue-400 rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 dark:bg-gray-800 hover:bg-secondary dark:hover:bg-blue-700 rounded-full transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 dark:bg-gray-800 hover:bg-secondary dark:hover:bg-pink-600 rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/smm" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Google Ads & PPC
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-sm hover:text-white dark:hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold dark:text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>VMC Media Pvt. Ltd. 701, 7th Floor, Logix City Centre, Sector-32, Noida-201301</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919250592505" className="hover:text-white dark:hover:text-white transition-colors">
                  +91 9250592505
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:Info@vmcmedia.in" className="hover:text-white dark:hover:text-white transition-colors">
                  Info@vmcmedia.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} All rights reserved by{" "}
              <span className="font-medium">VMC Media</span>.
            </p>

            {/* Policy Links */}
            <div className="flex gap-4 text-sm">
              <button
                onClick={() => setShowTerms(true)}
                className="opacity-70 hover:text-white dark:hover:text-white transition-colors"
              >
                Terms and Conditions
              </button>
              <span className="opacity-50">|</span>
              <button
                onClick={() => setShowPrivacy(true)}
                className="opacity-70 hover:text-white dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowTerms(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
                <button
                  onClick={() => setShowTerms(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6 text-gray-700">
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Terms of Service</h3>
                  <p className="text-sm leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Use License</h3>
                  <p className="text-sm leading-relaxed mb-2">
                    Permission is granted to temporarily download one copy of the materials (information or software) on VMC Media's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Disclaimer</h3>
                  <p className="text-sm leading-relaxed">
                    The materials on VMC Media's website are provided "as is". VMC Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Limitations</h3>
                  <p className="text-sm leading-relaxed">
                    In no event shall VMC Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VMC Media's website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Accuracy of Materials</h3>
                  <p className="text-sm leading-relaxed">
                    The materials appearing on VMC Media's website could include technical, typographical, or photographic errors. VMC Media does not warrant that any of the materials on the website are accurate, complete, or current.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowPrivacy(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6 text-gray-700">
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h3>
                  <p className="text-sm leading-relaxed">
                    VMC Media ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Information Collection and Use</h3>
                  <p className="text-sm leading-relaxed mb-2">
                    We collect several different types of information for various purposes to provide and improve our service to you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Personal Data: Name, email address, phone number, cookies and usage data</li>
                    <li>Usage Data: Browser type, IP address, pages visited, time spent, referring URLs</li>
                    <li>Device Information: Device type, operating system, unique device identifiers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Use of Data</h3>
                  <p className="text-sm leading-relaxed mb-2">
                    VMC Media uses the collected data for various purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>To provide and maintain the service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To allow you to participate in interactive features</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis and valuable information</li>
                    <li>To monitor the usage of our service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Security of Data</h3>
                  <p className="text-sm leading-relaxed">
                    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Changes to This Privacy Policy</h3>
                  <p className="text-sm leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Contact Us</h3>
                  <p className="text-sm leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at Info@vmcmedia.in or call us at +91 9250592505.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </>
      )}

    </footer>
  );
};

export default Footer;