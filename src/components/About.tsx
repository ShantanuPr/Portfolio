import { motion } from 'motion/react'
import { certifications, education, profile, stats } from '../data/profile'
import { Counter, Icon, Reveal, Section, Spotlight, fadeUp, stagger } from './ui'

const strengths = [
  'Reusable component architecture',
  'Redux Toolkit state management',
  'Real-time features with WebSockets',
  'Web performance optimization',
  'Leading teams from requirements to release',
  'Cross-platform apps with Flutter',
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Turning complex requirements into <span className="text-gradient">fast, polished products</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>
          <motion.ul
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {strengths.map((s) => (
              <motion.li key={s} variants={fadeUp} className="flex items-start gap-3 text-sm font-medium">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-4">
          <motion.dl
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <Spotlight className="h-full rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/50">
                  <dd className="text-gradient text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <Counter value={s.value} />
                  </dd>
                  <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                </Spotlight>
              </motion.div>
            ))}
          </motion.dl>

          <Reveal delay={0.1}>
            <Spotlight className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name="cap" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{education.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {education.school} · {education.period}
                  </p>
                  <p className="mt-2 inline-block rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
                    {education.score}
                  </p>
                </div>
              </div>
            </Spotlight>
          </Reveal>

          <Reveal delay={0.15}>
            <Spotlight className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name="award" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Certifications</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-muted">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
