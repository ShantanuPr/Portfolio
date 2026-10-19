import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { experience } from '../data/profile'
import { Icon, Reveal, Section, Spotlight, Tag } from './ui'

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="From building component libraries to leading client delivery, here's what I've been up to."
    >
      <ol ref={ref} className="relative space-y-8 pl-10 sm:pl-14">
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-[11px] w-px bg-line sm:left-[15px]" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: lineScale }}
          className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-gradient-to-b from-accent to-accent-2 sm:left-[15px]"
        />

        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="absolute top-6 -left-10 grid h-6 w-6 place-items-center rounded-full border border-accent/40 bg-bg sm:-left-14 sm:h-8 sm:w-8"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-accent shadow-[0_0_12px_var(--accent)]' : 'bg-accent/60'}`} />
            </motion.span>

            <Reveal>
              <Spotlight className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-bold text-white">
                      {job.company[0]}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="font-medium text-accent">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1 font-mono text-xs">
                      {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                      {job.period}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1 text-sm text-muted sm:justify-end">
                      <Icon name="pin" className="h-3.5 w-3.5" /> {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-muted">
                      <Icon name="arrowRight" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
