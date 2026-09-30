"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    industry: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset form data when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        interest: "",
        industry: "",
        message: "",
      });
    }
  }, [isOpen]);

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

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          service: formData.interest || "General Inquiry",
          message: formData.message || "Audit requested from website modal.",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        setFormData({ fullName: "", company: "", email: "", phone: "", interest: "", industry: "", message: "" });
        onClose();
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please try again.");
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Modal content */}
          <div className="p-5">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Request a Free Audit</h2>
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
                  Full Name
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
                  Email Address
                </label>
              </div>

              {/* Phone - Floating Label */}
              <div className="floating-label-container">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="phone" className="floating-label">
                  Phone Number
                </label>
              </div>

              {/* Company - Floating Label */}
              <div className="floating-label-container">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=" "
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="company" className="floating-label">
                  Company Name (Optional)
                </label>
              </div>

              {/* Industry - Floating Label */}
              <div className="floating-label-container">
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder=" "
                  className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                />
                <label htmlFor="industry" className="floating-label">
                  Industry (Optional)
                </label>
              </div>

              {/* Interest Dropdown */}
              <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                <SelectTrigger className="w-full h-10 px-3 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 !placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all [&>span]:text-gray-500 !bg-white !text-gray-900 !dark:bg-white !dark:text-gray-900">
                  <SelectValue placeholder="What do you need?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="ai-chatbot">AI Chatbot</SelectItem>
                  <SelectItem value="ai-voicebot">AI Voicebot</SelectItem>
                  <SelectItem value="lead-generation">Lead Generation</SelectItem>
                  <SelectItem value="sales-automation">Sales Automation</SelectItem>
                  <SelectItem value="not-sure">Not Sure</SelectItem>
                </SelectContent>
              </Select>

              {/* Message - Floating Label */}
              <div className="floating-label-container">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="floating-textarea w-full px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all resize-none"
                />
                <label htmlFor="message" className="floating-textarea-label">
                  Tell us about your project
                </label>
              </div>

              {/* Error Message display */}
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-10 rounded-lg bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-accent-foreground text-sm font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                {isSubmitting ? "Submitting..." : "Request Audit"}
              </button>

              {/* Privacy text */}
              <p className="text-[10px] text-center text-gray-500 pt-1">
                By submitting, you agree to our privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[10000] bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[300px]">
          <div className="font-semibold text-gray-900 mb-1">Thank you for reaching out!</div>
          <div className="text-sm text-gray-600">We'll get back to you within 24 hours via WhatsApp or email.</div>
        </div>
      )}
    </>
  );

  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};

export default GetStartedModal;