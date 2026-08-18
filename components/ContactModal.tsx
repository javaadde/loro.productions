"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle, ArrowRight, Calendar, User, Mail, Globe, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>("Personal Brand Scale");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5k - $10k / mo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-brand-charcoal/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-paper-100 border-4 border-brand-charcoal rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper-200 border-2 border-brand-charcoal flex items-center justify-center text-brand-charcoal hover:bg-brand-orange hover:text-paper-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-paper-100 text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BOOK BRAND STRATEGY CALL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-charcoal">
                  Let's Build Your Empire
                </h3>
                <p className="text-xs font-mono text-brand-charcoal/70">
                  Select your goals below to schedule a 1-on-1 strategy call with our founders.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-6 border-b border-brand-charcoal/15 pb-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 rounded-full transition-colors ${
                      step >= s ? "bg-brand-orange" : "bg-paper-300"
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <label className="block text-xs font-mono font-bold text-brand-charcoal uppercase">
                      1. What is your primary objective?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Personal Brand Scale",
                        "Executive Docuseries",
                        "Short-Form Viral Reels",
                        "Full Media Engine",
                      ].map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setSelectedGoal(goal)}
                          className={`p-3 rounded-xl text-xs font-display font-bold text-left border-2 transition-all ${
                            selectedGoal === goal
                              ? "bg-brand-charcoal text-paper-100 border-brand-orange shadow-brutalist-sm"
                              : "bg-paper-200 text-brand-charcoal border-brand-charcoal/20 hover:border-brand-charcoal"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-2.5 rounded-xl bg-brand-orange text-paper-100 font-bold text-xs font-mono hover:bg-brand-charcoal transition-colors flex items-center gap-2"
                      >
                        <span>NEXT STEP</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <label className="block text-xs font-mono font-bold text-brand-charcoal uppercase">
                      2. Estimated Monthly Media Budget
                    </label>
                    <div className="space-y-2">
                      {[
                        "$3,500 - $5,000 / mo",
                        "$5,000 - $10,000 / mo",
                        "$10,000+ / mo (Enterprise)",
                      ].map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`w-full p-3 rounded-xl text-xs font-mono font-bold text-left border-2 transition-all ${
                            selectedBudget === budget
                              ? "bg-brand-charcoal text-paper-100 border-brand-orange shadow-brutalist-sm"
                              : "bg-paper-200 text-brand-charcoal border-brand-charcoal/20 hover:border-brand-charcoal"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2 rounded-xl bg-paper-200 text-brand-charcoal font-bold text-xs font-mono border border-brand-charcoal/20"
                      >
                        BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-2.5 rounded-xl bg-brand-orange text-paper-100 font-bold text-xs font-mono hover:bg-brand-charcoal transition-colors flex items-center gap-2"
                      >
                        <span>FINAL DETAILS</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-charcoal uppercase mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-paper-200 border-2 border-brand-charcoal text-xs text-brand-charcoal font-sans focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-charcoal uppercase mb-1">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-paper-200 border-2 border-brand-charcoal text-xs text-brand-charcoal font-sans focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-charcoal uppercase mb-1">
                        LinkedIn or Website URL
                      </label>
                      <input
                        type="text"
                        placeholder="linkedin.com/in/alexvance"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-paper-200 border-2 border-brand-charcoal text-xs text-brand-charcoal font-sans focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-4 py-2 rounded-xl bg-paper-200 text-brand-charcoal font-bold text-xs font-mono border border-brand-charcoal/20"
                      >
                        BACK
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-brand-orange text-paper-100 font-bold text-xs font-mono hover:bg-brand-charcoal transition-colors flex items-center gap-2 shadow-brutalist"
                      >
                        <span>CONFIRM &amp; SCHEDULE</span>
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-paper-100 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-brand-charcoal">
                Strategy Session Confirmed!
              </h3>
              <p className="text-xs font-sans text-brand-charcoal/80 max-w-sm mx-auto leading-relaxed">
                Thank you <span className="font-bold text-brand-orange">{formData.name}</span>. Our executive producer will review your brand details and email you a calendar invitation within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-brand-charcoal text-paper-100 font-mono text-xs font-bold"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
