import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../data/profile'
import { BrandIcon, Icon } from './ui'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          className="bg-gradient-brand fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full text-white shadow-lg shadow-accent/30"
        >
          <Icon name="arrowUp" className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-lg font-mono text-sm font-bold text-white">SC</span>
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">Frontend & Full Stack Developer</p>
          </div>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-ink"
          >
            <BrandIcon name="github" className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-ink"
          >
            <BrandIcon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-ink"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
        </div>
      </div>
      <BackToTop />
    </footer>
  )
}
