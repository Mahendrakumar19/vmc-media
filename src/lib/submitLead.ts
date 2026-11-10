export interface LeadSubmissionPayload {
  name: string;
  phone: string;
  email: string;
  company?: string;
  industry?: string;
  hasGst?: string;
  gstNumber?: string;
  service?: string;
  message?: string;
  leadSource?: string;
  landingPageUrl?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  error?: string;
  data?: any;
}

/**
 * Submits lead data via the Next.js API route (/api/audit), which cleanly forwards
 * the payload server-to-server to the AIWA WhatsApp CRM dashboard (https://aiwa.vmcmedia.in/api/leads)
 * without browser CORS issues, while triggering the notification email.
 */
export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
  const landingUrl = typeof window !== "undefined" ? window.location.href : (payload.landingPageUrl || "");
  
  // Clean phone to exactly 10 digits
  const cleanPhone = payload.phone.replace(/\D/g, "").slice(-10);

  try {
    const res = await fetch("/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: payload.name,
        name: payload.name,
        email: payload.email,
        phone: cleanPhone,
        company: payload.company || "",
        industry: payload.industry || "",
        hasGst: payload.hasGst || "",
        gstNumber: payload.gstNumber || "",
        service: payload.service || "General Inquiry",
        message: payload.message || "",
        leadSource: payload.leadSource || "Next.js Website",
        landingPageUrl: landingUrl,
      }),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.success) {
      return { success: true, data };
    }

    return {
      success: false,
      error: data?.error || "Submission failed. Please try again.",
    };
  } catch (err: any) {
    return {
      success: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}
