import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { profile } from '../data/profile'
import { Icon, ease } from './ui'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // storage unavailable (private mode); theme still applies for this visit
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)] as const
}

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['top', ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Navbar() {
  const [dark, toggleTheme] = useTheme()
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="bg-gradient-brand fixed inset-x-0 top-0 z-[60] h-0.5 origin-left" />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
      >
        <nav
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
            scrolled || open
              ? 'border-line bg-surface/75 shadow-lg shadow-black/5 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
            <span className="bg-gradient-brand grid h-8 w-8 place-items-center rounded-lg font-mono text-sm font-bold text-white">
              SC
            </span>
            <span className="hidden font-semibold tracking-tight sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center md:flex">
            {links.map((l) => (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  className={`relative z-10 block px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-elevated"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg text-muted transition-colors hover:bg-elevated hover:text-ink"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? 'sun' : 'moon'}
                  initial={{ y: -16, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 16, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon name={dark ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
                </motion.span>
              </AnimatePresence>
            </button>
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Resume <Icon name="download" className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-elevated hover:text-ink md:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-surface/95 p-2 shadow-xl backdrop-blur-xl md:hidden"
            >
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 font-medium ${active === l.id ? 'bg-elevated text-ink' : 'text-muted'}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  download
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 font-semibold text-bg"
                >
                  Download resume <Icon name="download" />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
