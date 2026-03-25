'use client';
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, ShieldCheck, Quote, ChevronRight, CheckCircle2, Star, Flame, } from "lucide-react";

function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}

function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}

function Button({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={className} {...props} />;
}

function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={className} {...props} />;
}

const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "You do not need to be extreme, just consistent.",
  "Tiny progress is still progress.",
  "Start before you feel ready.",
  "Done is better than perfect.",
  "Keep going. The boring days count too.",
  "Confidence grows from promises kept to yourself.",
  "One good decision today can change your week.",
  "Discipline beats motivation when motivation disappears.",
];

export default function DailyMotivationPreview() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dailyQuote = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000) % quotes.length;
    return quotes[dayIndex];
  }, []);

  function handleSubscribe() {
    setLoading(true);
    if (window.self !== window.top) {
      setTimeout(() => {
        setLoading(false);
        alert("Preview mode: This would redirect to Stripe checkout.");
      }, 800);
      return;
    }
    window.location.href = "https://buy.stripe.com/00wfZg8jA3W3f5EdAR5J604";
  }

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_30%)]" />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-neutral-900">Daily Motivation</p>
              <p className="text-xs text-neutral-500">Feel better. Do better.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm md:flex">
            <ShieldCheck className="h-4 w-4" /> Secure checkout
          </div>
        </header>
        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
              <Flame className="h-4 w-4" /> Join 2,000+ people building better days
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              One small email. <br />
              <span className="text-neutral-500">A completely different day.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Most people don't need more content. They need one right sentence at the right time. That's exactly what this gives you.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-neutral-950 outline-none placeholder:text-neutral-400 shadow-sm" />
              <Button onClick={handleSubscribe} disabled={loading || !email || !email.includes("@"} className="h-12 rounded-2xl bg-neutral-950 px-6 text-white transition hover:bg-neutral-800 disabled:opacity-60">
                {loading ? "Redirecting..." : "Start getting better days"}
                <ChevronRight className="ml-2 inline h-4 w-4" />
              </Button>
            </motion.div>
            <p className="mt-3 text-sm text-neutral-500">Takes 10 seconds. Cancel anytime.</p>
            <p className="mt-2 text-xs text-neutral-400">Powered by Stripe · Secure payment</p>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <TrustPill text="Secure checkout" />
              <TrustPill text="Cancel anytime" />
              <TrustPill text="No spam. Ever." />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-10 grid gap-4 sm:grid-cols-3">
              <FeatureCard icon={<Mail className="h-5 w-5" />} title="Just one email" text="No overwhelm. Just one powerful sentence per day." />
              <FeatureCard icon={<Star className="h-5 w-5" />} title="Actually useful" text="People keep this subscription because it genuinely helps." />
              <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="Safe & simple" text="No accounts, no dashboards, no complexity." />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mx-auto w-full max-w-xl">
            <Card className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <CardContent className="p-0">
                <div className="border-b border-neutral-100 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Preview</p>
                      <h2 className="mt-2 text-2xl font-semibold text-neutral-950">Today's email</h2>
                    </div>
                    <div className="rounded-2xl bg-neutral-100 p-3 text-neutral-700">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="rounded-[24px] border border-neutral-200 bg-[#fcfaf7] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-neutral-500">Subject</p>
                        <p className="mt-1 text-lg font-medium text-neutral-900">This might help today</p>
                      </div>
                      <div className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-white">Daily</div>
                    </div>
                    <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5">
                      <p className="text-sm text-neutral-500">Message</p>
                      <blockquote className="mt-3 text-2xl font-medium leading-10 text-neutral-950">"{dailyQuote}"</blockquote>
                      <p className="mt-4 text-sm text-neutral-500">Read in 5 seconds. Stays with you all day.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <MiniStat label="Price" value="\$1 / month" />
                    <MiniStat label="Time" value="5 sec / day" />
                    <MiniStat label="Impact" value="High" />
                    <MiniStat label="Commitment" value="None" />
                  </div>
                  <div className="mt-5 rounded-3xl border border-neutral-200 bg-[#fcfaf7] p-5">
                    <p className="text-sm font-medium text-neutral-900">People say</p>
                    <div className="mt-4 space-y-3">
                      <ReviewRow text="It's weirdly the only email I actually read." />
                      <ReviewRow text="Tiny thing, big effect on my mindset." />
                      <ReviewRow text="Honestly worth way more than \$1." />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
      </CardContent>
    </Card>
  );
}
function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">{label}</p>
      <p className="mt-2 text-base font-medium text-neutral-900">{value}</p>
    </div>
  );
}
function TrustPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-neutral-200">
      <CheckCircle2 className="h-4 w-4 text-neutral-700" />
      <span>{text}</span>
    </div>
  );
}
function ReviewRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
      <div className="mt-0.5 rounded-full bg-neutral-950 p-1 text-white">
        <CheckCircle2 className="h-3.5 w-3.5" />
      </div>
      <p className="text-sm leading-6 text-neutral-700">{text}</p>
    </div>
  );
}