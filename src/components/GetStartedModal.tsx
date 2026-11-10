"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { submitLead } from "@/lib/submitLead";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  hasGst: "no",
  gstNumber: "",
};

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const { isCanClose } = useModal();
  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);
  const [hasConsent, setHasConsent] = useState(true);
  const [mounted] = useState(() => typeof window !== "undefined");
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  // Clean form reset when transitioning from open to closed
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setFormData(initialFormData);
    }
  }

  // Close on Esc and lock scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Check if window exists (client-side only)
    if (typeof window === 'undefined') return;

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth || 0;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen, onClose]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim() || !formData.industry.trim()) {
      setErrorMessage("Please complete all mandatory fields (Full Name, Company, Phone, Email, and Industry).");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      setErrorMessage("Please enter a valid 10-digit mobile number (numbers only).");
      return;
    }

    if (formData.hasGst === 'yes' && !formData.gstNumber.trim()) {
      setErrorMessage("Please provide your GST number or select 'No'.");
      return;
    }

    if (!hasConsent) {
      setErrorMessage("Please accept the communication consent to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        hasGst: formData.hasGst === 'yes' ? 'Yes' : 'No',
        gstNumber: formData.hasGst === 'yes' ? formData.gstNumber : '',
        service: "Connect with Our Experts (Modal)",
        leadSource: "Next.js Website - Get Started Modal",
        message: formData.hasGst === 'yes' ? `GST Number: ${formData.gstNumber}` : 'GST: Not registered / No GST',
      });

      if (result.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        setFormData(initialFormData);
        onClose();
      } else {
        setErrorMessage(result.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.name === 'phone' 
      ? e.target.value.replace(/\D/g, '').slice(0, 10) 
      : e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <>
      <style>{`
        .floating-label-container {
          position: relative;
        }
        
        .floating-label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          padding: 0 4px;
          color: #6b7280;
          font-size: 14px;
          transition: all 0.2s ease;
          pointer-events: none;
        }
        
        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          top: 0;
          font-size: 12px;
          color: hsl(var(--accent));
          font-weight: 500;
        }
        
        .floating-textarea-label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          padding: 0 4px;
          color: #6b7280;
          font-size: 14px;
          transition: all 0.2s ease;
          pointer-events: none;
        }
        
        .floating-textarea:focus ~ .floating-textarea-label,
        .floating-textarea:not(:placeholder-shown) ~ .floating-textarea-label {
          top: -10px;
          transform: translateY(0);
          font-size: 12px;
          color: hsl(var(--accent));
          font-weight: 500;
        }

        .floating-select-label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          padding: 0 4px;
          color: #6b7280;
          font-size: 14px;
          transition: all 0.2s ease;
          pointer-events: none;
          z-index: 10;
        }
        
        .floating-select:focus ~ .floating-select-label,
        .floating-select:not([value=""]):valid ~ .floating-select-label {
          top: -10px;
          transform: translateY(0);
          font-size: 12px;
          color: hsl(var(--accent));
          font-weight: 500;
        }
        
        .floating-label-container select {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Fixed positioned backdrop */}
      <div
        className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ margin: 0 }}
      >
        {/* Backdrop click area */}
        <div className="absolute inset-0" onClick={() => isCanClose && onClose()} />

        {/* Modal card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Close button - Only shown after 2 seconds */}
          {isCanClose && (
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}


          {/* Modal content */}
          <div className="p-5">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Connect with Our Experts</h2>
              <p className="text-[11px] text-gray-500">
                Fill out the form and we will reach out via email or WhatsApp within 24 hours.
              </p>
            </div>

            {/* Form fields */}
            <div className="space-y-2.5">
              {/* Full Name - Floating Label */}
              <div className="floating-label-container">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="fullName" className="floating-label">
                  Full Name *
                </label>
              </div>

              {/* Company - Floating Label (Mandatory) */}
              <div className="floating-label-container">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="company" className="floating-label">
                  Company Name *
                </label>
              </div>

              {/* Email - Floating Label */}
              <div className="floating-label-container">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="email" className="floating-label">
                  Work Email Address *
                </label>
              </div>

              {/* Phone with +91 Prefix */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-[hsl(var(--accent))] focus-within:border-transparent transition-all bg-white">
                  <span className="inline-flex items-center px-3 bg-gray-50 text-gray-600 font-semibold text-xs sm:text-sm border-r border-gray-200 select-none">
                    🇮🇳 +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className="w-full h-10 px-3 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Industry - Floating Label (Mandatory) */}
              <div className="floating-label-container">
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="industry" className="floating-label">
                  Industry Vertical *
                </label>
              </div>

              {/* GST Radio & Number Field */}
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/70 space-y-2 text-left">
                <label className="block text-xs font-semibold text-gray-800">Do you have a GST Number? *</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-800 font-medium">
                    <input
                      type="radio"
                      name="hasGst-modal"
                      value="yes"
                      checked={formData.hasGst === 'yes'}
                      onChange={() => setFormData({ ...formData, hasGst: 'yes' })}
                      className="w-4 h-4 text-accent focus:ring-accent accent-[hsl(var(--accent))] cursor-pointer"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-800 font-medium">
                    <input
                      type="radio"
                      name="hasGst-modal"
                      value="no"
                      checked={formData.hasGst === 'no'}
                      onChange={() => setFormData({ ...formData, hasGst: 'no', gstNumber: '' })}
                      className="w-4 h-4 text-accent focus:ring-accent accent-[hsl(var(--accent))] cursor-pointer"
                    />
                    <span>No</span>
                  </label>
                </div>

                {formData.hasGst === 'yes' && (
                  <div className="pt-1">
                    <input
                      type="text"
                      required
                      value={formData.gstNumber}
                      onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value.toUpperCase() })}
                      placeholder="Enter 15-digit GSTIN (e.g. 07AAAAA0000A1Z5)"
                      className="w-full h-9 px-3 text-xs border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                    />
                  </div>
                )}
              </div>

              {/* Error Message display */}
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasConsent}
                    onChange={(e) => setHasConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer accent-[hsl(var(--accent))] shrink-0"
                  />
                  <span className="text-[11px] text-gray-600 leading-relaxed text-left">
                    I consent to receive communications from <strong className="text-gray-900 font-semibold">VMC Media Pvt Ltd.</strong>, in accordance with the{" "}
                    <Link href="/pages/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-800">
                      Privacy Policy
                    </Link>
                    . I understand that I can opt-out at any time.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-10 rounded-lg bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-accent-foreground text-sm font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                {isSubmitting ? "Submitting..." : "Connect with Our Experts"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[10000] bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[300px]">
          <div className="font-semibold text-gray-900 mb-1">Thank you for reaching out!</div>
          <div className="text-sm text-gray-600">We&apos;ll get back to you within 24 hours via WhatsApp or email.</div>
        </div>
      )}
    </>
  );

  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};

export default GetStartedModal;