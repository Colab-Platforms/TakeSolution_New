"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Rocket, 
  User, 
  Users 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  // Step 1: Founder
  founderName: z.string().min(2, "Name is too short"),
  founderEmail: z.string().email("Invalid email address"),
  founderLinkedIn: z.string().url("Must be a valid URL"),
  // Step 2: Startup
  companyName: z.string().min(2, "Company name is too short"),
  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  problemStatement: z.string().min(20, "Please describe the problem in more detail"),
  productDescription: z.string().min(50, "Please describe the product in more detail"),
  // Step 3: Logistics
  currentStage: z.string(),
  fundingRaised: z.string(),
  teamSize: z.string(),
  market: z.string(),
  // Step 4: Traction
  traction: z.string().optional(),
  clinicalValidation: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: "founder", title: "Founder", icon: User },
  { id: "startup", title: "Startup", icon: Rocket },
  { id: "details", title: "Product", icon: Users },
  { id: "finish", title: "Review", icon: FileText },
];

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentStep === 0) {
      fieldsToValidate = ["founderName", "founderEmail", "founderLinkedIn"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["companyName", "problemStatement", "productDescription"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["currentStage", "fundingRaised", "teamSize", "market"];
    }

    const output = await trigger(fieldsToValidate);
    if (output) setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-white py-24 lg:py-32" id="apply">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-[2.5rem] bg-navy-50 border border-navy-100"
          >
            <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-navy-950 mb-4">Application Received</h2>
            <p className="text-navy-700 text-lg mb-8">
              Thank you for sharing your vision with us. Our team will review your application and get back to you within 10 business days.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-navy-950 hover:bg-navy-900 text-white px-8 h-12 rounded-xl"
            >
              Back to Website
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy-50 py-24 lg:py-32" id="apply">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-navy-950 text-4xl lg:text-5xl font-bold mb-6">Join the TAKE Network</h2>
            <p className="text-navy-700 text-lg">
              We've streamlined our application to focus on what matters: your vision and your clinical impact.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-navy-100 shadow-2xl shadow-navy-200/40 overflow-hidden">
            {/* Step Indicator */}
            <div className="bg-navy-950 p-6 lg:p-10 text-white">
              <div className="flex justify-between items-center relative">
                {steps.map((step, i) => (
                  <div key={step.id} className="flex flex-col items-center relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      i <= currentStep ? "bg-teal-500 text-navy-950 font-bold" : "bg-navy-800 text-navy-400"
                    }`}>
                      {i < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${
                      i <= currentStep ? "text-teal-400" : "text-navy-500"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                ))}
                {/* Progress bar line */}
                <div className="absolute top-5 left-0 w-full h-[2px] bg-navy-800 -z-0" />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 lg:p-16">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Full Name</label>
                        <input 
                          {...register("founderName")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="John Doe"
                        />
                        {errors.founderName && <p className="text-rose-500 text-xs font-bold">{errors.founderName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Email Address</label>
                        <input 
                          {...register("founderEmail")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="john@company.com"
                        />
                        {errors.founderEmail && <p className="text-rose-500 text-xs font-bold">{errors.founderEmail.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">LinkedIn Profile</label>
                      <input 
                        {...register("founderLinkedIn")}
                        className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                        placeholder="https://linkedin.com/in/username"
                      />
                      {errors.founderLinkedIn && <p className="text-rose-500 text-xs font-bold">{errors.founderLinkedIn.message}</p>}
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Company Name</label>
                        <input 
                          {...register("companyName")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="HealthTech Inc."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Website</label>
                        <input 
                          {...register("website")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="https://company.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">What problem are you solving?</label>
                      <textarea 
                        {...register("problemStatement")}
                        rows={4}
                        className="w-full bg-navy-50 border-none rounded-xl p-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none resize-none" 
                        placeholder="Describe the clinical or operational pain point..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Brief Product Description</label>
                      <textarea 
                        {...register("productDescription")}
                        rows={4}
                        className="w-full bg-navy-50 border-none rounded-xl p-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none resize-none" 
                        placeholder="How does your solution work? What is the unique tech?"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Current Stage</label>
                        <select 
                          {...register("currentStage")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                        >
                          <option value="">Select Stage</option>
                          <option value="prototype">Prototype / MVP</option>
                          <option value="seed">Seed</option>
                          <option value="seriesA">Series A</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Funding Raised</label>
                        <select 
                          {...register("fundingRaised")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                        >
                          <option value="">Select Range</option>
                          <option value="none">$0 (Bootstrapped)</option>
                          <option value="under500k">Under $500K</option>
                          <option value="500k-2m">$500K - $2M</option>
                          <option value="above2m">Above $2M</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Team Size</label>
                        <input 
                          {...register("teamSize")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="e.g. 5 full-time"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-navy-900 uppercase tracking-widest">Primary Market</label>
                        <input 
                          {...register("market")}
                          className="w-full h-14 bg-navy-50 border-none rounded-xl px-6 focus:ring-2 focus:ring-teal-500 transition-all outline-none" 
                          placeholder="e.g. US Hospitals"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="p-8 rounded-2xl bg-navy-50 border-2 border-dashed border-navy-200 text-center">
                      <FileText className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                      <h4 className="font-bold text-navy-950 mb-2">Review Your Details</h4>
                      <p className="text-navy-500 text-sm mb-6">Confirm all information is correct before submitting.</p>
                      
                      <div className="text-left space-y-4 max-w-md mx-auto">
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-navy-400 text-xs font-bold uppercase tracking-wider">Founder</span>
                          <span className="text-navy-950 font-medium">{getValues("founderName")}</span>
                        </div>
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-navy-400 text-xs font-bold uppercase tracking-wider">Company</span>
                          <span className="text-navy-950 font-medium">{getValues("companyName")}</span>
                        </div>
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-navy-400 text-xs font-bold uppercase tracking-wider">Stage</span>
                          <span className="text-navy-950 font-medium capitalize">{getValues("currentStage")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl text-teal-800 text-sm font-medium">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      By submitting, you agree to our privacy policy and data handling for investment review purposes.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-12 pt-8 border-t border-navy-100 flex justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="text-navy-500 disabled:opacity-0"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Previous
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-navy-950 hover:bg-navy-900 text-white px-8 h-12 rounded-xl"
                  >
                    Continue
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-10 h-12 rounded-xl font-bold"
                  >
                    Submit Application
                    <Rocket className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
