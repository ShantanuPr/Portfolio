import { motion } from 'motion/react'
import { profile, projects, repos, type Project } from '../data/profile'
import { BrandIcon, Icon, Reveal, Section, Spotlight, Tag, fadeUp, stagger } from './ui'

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#e5c100',
  Dart: '#00b4ab',
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`h-full ${featured ? 'lg:col-span-2' : ''}`}
    >
      <Spotlight className="group h-full overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/50">
        <div className="bg-gradient-brand h-1 w-0 transition-all duration-500 group-hover:w-full" />
        <div className={`grid h-full gap-8 p-6 sm:p-8 ${featured ? 'lg:grid-cols-[1.3fr_1fr]' : ''}`}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">{project.highlight}</span>
            </div>
            <h3 className={`mt-5 font-bold tracking-tight ${featured ? 'text-3xl' : 'text-2xl'}`}>{project.name}</h3>
            <p className="mt-1 text-muted">{project.subtitle}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-[15px] leading-relaxed text-muted">
              {project.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          {featured && project.features && (
            <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-line bg-elevated p-6">
              <div aria-hidden="true" className="bg-gradient-brand absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-3xl" />
              <p className="font-mono text-xs tracking-wider text-muted uppercase">Key features</p>
              <motion.ul
                variants={stagger(0.07, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative mt-4 grid gap-2.5"
              >
                {project.features.map((f) => (
                  <motion.li
                    key={f}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-accent">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      </Spotlight>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Things I've built"
      description="Client projects I've built and shipped to production, with the results they delivered."
    >
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {projects.map((p, i) => (
          <motion.div key={p.name} variants={fadeUp} className={i === 0 ? 'lg:col-span-2' : ''}>
            <ProjectCard project={p} index={i} featured={i === 0} />
          </motion.div>
        ))}
      </motion.div>

      <Reveal className="mt-24 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Open source &amp; side projects</h3>
          <p className="mt-1 text-muted">A selection of my public repositories.</p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
        >
          <BrandIcon name="github" className="h-4 w-4" />
          View GitHub
          <Icon name="arrowUpRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {repos.map((r) => (
          <motion.div key={r.name} variants={fadeUp} whileHover={{ y: -4 }} className="h-full">
            <Spotlight className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-elevated text-muted transition-colors group-hover:text-accent">
                  <BrandIcon name="github" className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-2">
                  {r.live && (
                    <a
                      href={r.live}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent hover:underline"
                    >
                      Live demo
                    </a>
                  )}
                  <Icon
                    name="arrowUpRight"
                    className="h-5 w-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
              </div>
              <a href={r.url} target="_blank" rel="noreferrer" className="mt-5 font-semibold break-words">
                <span className="absolute inset-0" aria-hidden="true" />
                {r.name}
              </a>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.description}</p>
              <p className="mt-5 flex items-center gap-2 font-mono text-xs text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: languageColors[r.language] ?? 'var(--muted)' }} />
                {r.language}
              </p>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
