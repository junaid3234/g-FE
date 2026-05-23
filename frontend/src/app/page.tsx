"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  Brain,
  MessageSquare,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/landing/hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Conversational Screening",
    desc: "ChatGPT-style one-question-at-a-time flow with typing indicators and progress tracking.",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    icon: Brain,
    title: "ML Risk Prediction",
    desc: "Random Forest classifier with confidence scores, severity levels, and SHAP explainability.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    icon: Activity,
    title: "Live Risk Meter",
    desc: "Real-time visual risk assessment with animated gauges and clinical dashboards.",
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    icon: Shield,
    title: "HIPAA-Style Security",
    desc: "JWT auth, audit logs, rate limiting, and minimal PHI storage architecture.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
];

const stats = [
  { label: "Screening Accuracy", value: "83%", desc: "Validated on clinical dataset" },
  { label: "Questions Covered", value: "25", desc: "Across 3 clinical sections" },
  { label: "Avg. Completion", value: "8 min", desc: "Per screening session" },
  { label: "Severity Classes", value: "3", desc: "Mild · Moderate · Severe" },
];

const workflow = [
  {
    step: "01",
    title: "Start Chat",
    desc: "Patient begins guided screening with Gingi AI assistant.",
  },
  {
    step: "02",
    title: "Collect Data",
    desc: "Hygiene habits, symptoms, and clinical indices captured step-by-step.",
  },
  {
    step: "03",
    title: "Predict Risk",
    desc: "Random Forest model classifies gingivitis and severity.",
  },
  {
    step: "04",
    title: "Get Report",
    desc: "Personalized recommendations, charts, and downloadable PDF.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
      <Hero />

      {/* ── CTA ── */}
      <section className="px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl gradient-brand p-12 text-center text-white shadow-2xl shadow-[color-mix(in_srgb,var(--primary)_30%,transparent)]"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <Users className="relative mx-auto mb-5 h-12 w-12 opacity-90" />
          <h2 className="relative text-3xl font-extrabold">Ready to screen smarter?</h2>
          <p className="relative mt-3 text-lg opacity-90">
            Start your AI-assisted gingivitis assessment in under 10 minutes.
          </p>
          <Link href="/screening" className="relative mt-8 inline-block">
            <Button
              size="lg"
              className="group bg-white text-[var(--primary)] shadow-lg hover:bg-white/95 hover:shadow-xl"
            >
              Start Screening Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
