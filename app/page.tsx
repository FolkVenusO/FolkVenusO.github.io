'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Play, ShieldCheck, Waves, InfinityIcon, Palette, Zap, PanelsTopLeft } from 'lucide-react';
import gsap from 'gsap';
import ThemeToggle from './components/theme-toggle';
import { useTheme } from './components/theme-provider';

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const xTo = gsap.quickTo(node, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(node, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      xTo(offsetX * 0.15);
      yTo(offsetY * 0.15);
    };

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', reset);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <button
      ref={ref}
      data-hoverable="true"
      className={`relative isolate overflow-hidden rounded-full px-6 py-3 font-semibold text-sm uppercase tracking-wide text-white shadow-glow backdrop-blur-xl ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/80 via-purple-500/80 to-cyan-400/80 opacity-90" aria-hidden />
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const cardGlow = useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, rgba(123, 97, 255, 0.3), rgba(10, 10, 20, 0.6))`;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      data-hoverable="true"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="glass-card relative h-full rounded-3xl border border-white/10 p-6 shadow-2xl"
    >
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-70"
        style={{ backgroundImage: cardGlow }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center text-lg font-bold">LX</span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Immersive card</p>
              <h3 className="text-xl font-semibold">Lumen Experience</h3>
            </div>
          </div>
          <Sparkles className="h-6 w-6 text-fuchsia-300" />
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-md">
          Dynamic tilt, subtle parallax, and a live glow reacting to your cursor. Built with pure Framer Motion and CSS, no WebGL.
        </p>
        <div className="mt-auto flex gap-3">
          <span className="glass-card rounded-full px-3 py-1 text-xs uppercase tracking-wide text-slate-100">Realtime</span>
          <span className="glass-card rounded-full px-3 py-1 text-xs uppercase tracking-wide text-slate-100">3D feel</span>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { label: 'Projects shipped', value: '68', accent: 'from-fuchsia-400 to-purple-500' },
  { label: 'Avg. uplift', value: '+214%', accent: 'from-cyan-400 to-emerald-400' },
  { label: 'Response time', value: '< 24h', accent: 'from-amber-300 to-pink-400' },
];

const bentoCards = [
  {
    icon: Palette,
    title: 'Bento storytelling',
    description: 'Layered composition mixing mesh gradients, frosted glass, and liquid shapes tailored to your brand.',
    size: 'col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & security',
    description: 'Accessibility, performance, and SEO baked in from day zero — no trade-offs.',
    size: 'col-span-1',
  },
  {
    icon: Waves,
    title: 'Micro-interactions',
    description: 'GSAP-powered magnetics, luminous cursors, and tactile hover states for delightful UX.',
    size: 'col-span-1',
  },
  {
    icon: PanelsTopLeft,
    title: 'CMS-friendly',
    description: 'Modular blocks ready for your favorite headless CMS or Markdown-driven workflow.',
    size: 'col-span-2',
  },
];

const services = [
  {
    title: 'Interactive branding',
    copy: 'Signature art direction with mesh gradients, neon glows, and motion systems that feel alive.',
    icon: InfinityIcon,
  },
  {
    title: 'Product sites',
    copy: 'Conversion-led landing pages with bento highlights, sticky CTA bars, and smooth scroll journeys.',
    icon: Zap,
  },
  {
    title: 'Design systems',
    copy: 'Shadcn + Tailwind component kits, themeable tokens, and documentation baked into the UI.',
    icon: Play,
  },
];

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="relative flex min-h-screen flex-col gap-24 pb-24 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60" aria-hidden />
      <section className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <span className="glass-card rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200">Premium One Pager</span>
            </div>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white drop-shadow-[0_10px_50px_rgba(100,116,255,0.25)]"
            >
              Crafted to make eyes melt. Next.js + Tailwind + motion, built for premium brands.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              We merge brutalist typography, glassmorphism, and responsive bento grids with scroll-based reveals and magnetic interactions.
            </motion.p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton className="mt-2">
                <span>Book a call</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton className="mt-2 !bg-white/10 !text-white">
                <Sparkles className="h-4 w-4" />
                <span>Watch reel</span>
              </MagneticButton>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.12 * index }}
                  className="glass-card rounded-3xl p-4 border border-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${stat.accent}`}>
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-xl">
            <motion.div
              className="glass-card rounded-4xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Signature 3D card</p>
              <div className="mt-4">
                <TiltCard />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capabilities</p>
            <h2 className="text-3xl font-display font-semibold text-white">Bento grid of advantages</h2>
          </div>
          <div className="hidden md:flex gap-3 text-sm text-slate-300">
            <span className="glass-card rounded-full px-3 py-1">Glassmorphism</span>
            <span className="glass-card rounded-full px-3 py-1">Mesh gradients</span>
            <span className="glass-card rounded-full px-3 py-1">Framer Motion</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {bentoCards.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.08 * index }}
              className={`glass-card group relative overflow-hidden rounded-3xl border border-white/10 ${item.size}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 gap-3">
                <item.icon className="h-8 w-8 text-fuchsia-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-fuchsia-200 text-xs uppercase tracking-[0.2em]">
                  <span>Reveal</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Scroll-reveal</p>
            <h2 className="text-3xl font-display font-semibold text-white">Every block slides softly into view.</h2>
            <p className="text-lg text-slate-300 max-w-xl">
              Intersection-aware animations that respect performance budgets. No jank, only buttery 60fps transitions using Framer Motion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-card rounded-3xl border border-white/10 p-5"
                >
                  <service.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-3 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{service.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="glass-card rounded-4xl border border-white/10 p-6 shadow-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Dark / Light</p>
                <h3 className="text-2xl font-semibold text-white">Seamless theme shift</h3>
              </div>
              <ThemeToggle />
            </div>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              The theme toggle animates with spring physics and updates root tokens. Mesh gradients adapt subtly to the active palette.
            </p>
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Preview</span>
                <span className="glass-card rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">{theme} mode</span>
              </div>
              <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/20 to-cyan-400/25 shadow-inner" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass-card rounded-4xl border border-white/10 p-8 shadow-2xl flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Final CTA</p>
              <h2 className="text-3xl font-display font-semibold text-white">Ready to elevate your next launch?</h2>
              <p className="text-slate-300 mt-2 max-w-2xl">
                A one-page experience engineered with premium UI polish, motion, and UX intent. Ship something unforgettable.
              </p>
            </div>
            <div className="flex gap-3">
              <MagneticButton>
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton className="bg-white/5">
                <span>Download deck</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
