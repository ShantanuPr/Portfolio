import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../data/profile'
import { BrandIcon, Icon, Reveal } from './ui'

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'done' : 'copy'}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2"
        >
          <Icon name={copied ? 'check' : 'copy'} />
          {copied ? 'Copied!' : 'Copy email'}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

const channels = [
  { icon: 'mail' as const, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone' as const, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'pin' as const, label: 'Location', value: profile.location },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <div className="bg-gradient-cta relative overflow-hidden rounded-[2rem] p-8 shadow-2xl shadow-accent-2/20 sm:p-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_left,black,transparent_60%)]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-[0.2em] text-white/80 uppercase">Get in touch</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
                Have a project in mind? Let's build it together.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
                I'm open to frontend and full stack roles as well as freelance work. Whether you have a question or just want to
                say hi, my inbox is always open.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Say hello
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <CopyEmail />
              </div>
            </div>

            <ul className="min-w-0 space-y-3">
              {channels.map((c) => {
                const body = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-white">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium tracking-wide text-white/70 uppercase">{c.label}</span>
                      <span className="block font-semibold [overflow-wrap:anywhere] text-white">{c.value}</span>
                    </span>
                  </>
                )
                const cls = 'flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition-colors'
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} className={`${cls} hover:bg-white/20`}>
                        {body}
                      </a>
                    ) : (
                      <div className={cls}>{body}</div>
                    )}
                  </li>
                )
              })}
              <li className="flex gap-3 pt-1">
                {[
                  { name: 'github' as const, href: profile.github, label: 'GitHub' },
                  { name: 'linkedin' as const, href: profile.linkedin, label: 'LinkedIn' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <BrandIcon name={s.name} className="h-5 w-5" />
                    {s.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
