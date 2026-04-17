import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    project_description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await base44.entities.ContactInquiry.create(form);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError(
        "Sorry - we couldn't send your message. Please try again in a moment, or email us directly at info@truelinelasers.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#111113] py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#E53935] text-xs font-semibold uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Bring Precision to Your Next Project
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Whether you're managing large-scale civil works or modular
              construction, TrueLine Lasers can transform your setting-out
              process. Request a demo to see the system in action.
            </p>

            {/* Trust signals */}
            <div className="mt-10 space-y-4">
              {[
                "Free on-site demonstration available",
                "No long-term commitment required",
                "Technical support from day one",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#E53935]" />
                  </div>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-center">
                <div className="w-16 h-16 rounded-full bg-[#E53935]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#E53935]" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Thank You
                </h3>
                <p className="text-gray-400">
                  We've received your inquiry and will be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-5"
              >
                {error && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#E53935]/10 border border-[#E53935]/30"
                  >
                    <AlertCircle className="w-5 h-5 text-[#E53935] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Name <span className="text-[#E53935]">*</span>
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-gray-600 focus:border-[#E53935]/40 focus:ring-[#E53935]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-gray-600 focus:border-[#E53935]/40 focus:ring-[#E53935]/10"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Email <span className="text-[#E53935]">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-gray-600 focus:border-[#E53935]/40 focus:ring-[#E53935]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Role
                    </label>
                    <Input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Project Manager"
                      className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-gray-600 focus:border-[#E53935]/40 focus:ring-[#E53935]/10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Project Description
                  </label>
                  <Textarea
                    name="project_description"
                    value={form.project_description}
                    onChange={handleChange}
                    placeholder="Tell us about your project and how we can help..."
                    rows={4}
                    className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-gray-600 focus:border-[#E53935]/40 focus:ring-[#E53935]/10 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#E53935] hover:bg-[#C62828] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-900/25 h-12"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Request a Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-gray-600 text-center">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}