import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    project_description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e, inquiryType = "Demo Request") => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create the contact inquiry
      await base44.entities.ContactInquiry.create(formData);
      
      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1D1D1F; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: #1B5E20; padding: 32px 24px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 32px 24px; }
    .badge { display: inline-block; background: #F5F7F6; color: #1B5E20; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 13px; font-weight: 600; color: #4A4A4A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .field-value { font-size: 16px; color: #1D1D1F; font-weight: 500; }
    .description { background: #F5F7F6; padding: 20px; border-radius: 12px; margin-top: 24px; }
    .footer { padding: 24px; text-align: center; color: #4A4A4A; font-size: 13px; border-top: 1px solid #F5F7F6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>TrueLine Lasers</h1>
    </div>
    <div class="content">
      <span class="badge">${inquiryType}</span>
      
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${formData.name}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${formData.email}" style="color: #1B5E20; text-decoration: none;">${formData.email}</a></div>
      </div>
      
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${formData.company || 'Not provided'}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Role</div>
        <div class="field-value">${formData.role || 'Not provided'}</div>
      </div>
      
      ${formData.project_description ? `
      <div class="description">
        <div class="field-label" style="margin-bottom: 12px;">Project Description</div>
        <div style="color: #1D1D1F; line-height: 1.6;">${formData.project_description}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>This inquiry was submitted via the TrueLine Lasers website contact form.</p>
    </div>
  </div>
</body>
</html>`;
      
      // Send email notification to both recipients
      await base44.integrations.Core.SendEmail({
        to: "james@truelinelasers.com",
        subject: `TrueLine Lasers - ${inquiryType}: ${formData.name}`,
        body: emailBody
      });
      
      await base44.integrations.Core.SendEmail({
        to: "wave@mbm.dev",
        subject: `TrueLine Lasers - ${inquiryType}: ${formData.name}`,
        body: emailBody
      });
      
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        role: "",
        project_description: ""
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 lg:py-40 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D1D1F] mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Bring Precision to Your Next Project
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto font-light px-4 sm:px-0">
            Request a demo or speak with our team to learn how TrueLine Lasers can transform your construction workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F5F7F6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16"
        >
          {submitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1B5E20] flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3 sm:mb-4">Thank You!</h3>
              <p className="text-[#4A4A4A] text-base sm:text-lg font-light px-4">We'll be in touch shortly to discuss your requirements.</p>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A1E3A] mb-2">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-[#0A1E3A]/20 text-[#0A1E3A] placeholder:text-[#4A5568]/50 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-3">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white border-[#1D1D1F]/20 text-[#1D1D1F] placeholder:text-[#4A4A4A]/50 focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 h-12 rounded-xl"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A1E3A] mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-[#0A1E3A]/20 text-[#0A1E3A] placeholder:text-[#4A5568]/50 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A1E3A] mb-2">Role</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="bg-white border-[#0A1E3A]/20 text-[#0A1E3A] placeholder:text-[#4A5568]/50 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]"
                    placeholder="Project Manager"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A1E3A] mb-2">Project Description</label>
                <Textarea
                  value={formData.project_description}
                  onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                  className="bg-white border-[#0A1E3A]/20 text-[#0A1E3A] placeholder:text-[#4A5568]/50 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] min-h-32"
                  placeholder="Tell us about your project and requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={(e) => handleSubmit(e, "Demo Request")}
                  className="w-full sm:flex-1 bg-[#1B5E20] hover:bg-[#154A19] text-white font-medium py-4 text-base rounded-xl transition-all duration-200"
                >
                  {isSubmitting ? "Sending..." : "Request a Demo"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  type="button"
                  disabled={isSubmitting}
                  variant="outline"
                  className="w-full sm:flex-1 border-2 border-[#1B5E20] bg-white text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white font-medium py-4 text-base rounded-xl transition-all duration-200"
                  onClick={(e) => handleSubmit(e, "Sales Inquiry")}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Contact Sales"}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}