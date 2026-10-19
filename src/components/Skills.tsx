import { motion } from 'motion/react'
import { skills } from '../data/profile'
import { Section, Spotlight, fadeUp, stagger } from './ui'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical toolkit"
      description="The languages, frameworks and tools I use to design, build and ship products."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group, gi) => (
          <motion.div key={group.group} variants={fadeUp} className="h-full">
            <Spotlight className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{group.group}</h3>
                <span className="font-mono text-xs text-muted">{String(gi + 1).padStart(2, '0')}</span>
              </div>
              <motion.div variants={stagger(0.03, 0.15)} className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                    whileHover={{ y: -2 }}
                    className="cursor-default rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
