import { useEffect, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { marquee, profile } from '../data/profile'
import { BrandIcon, Icon, ease, fadeUp, stagger } from './ui'

function RotatingRole() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    // Every role is stacked invisibly in the same grid cell so the box always fits the longest one, even when it wraps
    <span className="relative grid overflow-hidden pb-1">
      {profile.roles.map((r) => (
        <span key={r} aria-hidden="true" className="invisible col-start-1 row-start-1">
          {r}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="text-gradient col-start-1 row-start-1 self-start"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function Portrait() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease }}
      className="relative mx-auto w-full max-w-[340px] [perspective:1000px] lg:max-w-[400px]"
    >
      <div aria-hidden="true" className="bg-gradient-brand absolute -inset-6 rounded-[2.5rem] opacity-25 blur-3xl" />

      <motion.div onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX, rotateY }} className="relative [transform-style:preserve-3d]">
        {/* Rotating gradient border */}
        <div className="relative overflow-hidden rounded-[2rem] p-[2px]">
          <div
            aria-hidden="true"
            className="animate-spin-slow absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), transparent 40%, var(--accent))' }}
          />
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ opacity: { delay: 0.8 }, x: { delay: 0.8, duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ translateZ: 40 }}
          className="absolute top-10 -left-6 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10"
        >
          <p className="text-gradient text-2xl font-extrabold">3.5+</p>
          <p className="text-xs font-medium text-muted">Years of experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, x: { delay: 1, duration: 0.6 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ translateZ: 60 }}
          className="absolute -right-4 bottom-16 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-8"
        >
          <p className="text-gradient text-2xl font-extrabold">100K+</p>
          <p className="text-xs font-medium text-muted">Users served</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-5">
      <div className="marquee-track flex w-max gap-10">
        {items.map((t, i) => (
          <span key={i} aria-hidden={i >= marquee.length} className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted">
            {t}
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 -right-40 h-[420px] w-[420px] rounded-full bg-accent-2/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pt-32 pb-20 sm:px-6 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.p>

          <motion.p variants={fadeUp} className="mt-7 text-lg font-medium text-muted">
            Hi, I'm {profile.name} 👋
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-2 text-[2.6rem] leading-[1.1] font-extrabold tracking-tight sm:text-6xl lg:text-[3.6rem]">
            <span className="block">I'm a</span>
            <RotatingRole />
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group bg-gradient-brand inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              View my work
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              Download resume
              <Icon name="download" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Icon name="pin" /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-ink">
              <BrandIcon name="github" className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-ink">
              <BrandIcon name="linkedin" className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <Portrait />
      </div>

      <Marquee />
    </section>
  )
}
