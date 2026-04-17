import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  role: "",
  project_description: "",
};

export default function ContactCTA() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e, inquiryType = "Demo Request") => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await base44.entities.ContactInquiry.create({
        ...formData,
        inquiry_type: inquiryType,
      });

      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "Sorry — we couldn't send your message. Please try again in a moment, or email us directly at info@truelinelasers.com."
      );
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
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
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
                  onClick={(e) => handleSubmit(e, "Contact Request")}
                  className="w-full sm:flex-1 bg-[#1B5E20] hover:bg-[#154A19] text-white font-medium py-4 text-base rounded-xl transition-all duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}