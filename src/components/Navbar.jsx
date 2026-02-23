import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 40px' : '20px 40px',
        background: scrolled
          ? 'rgba(11,27,43,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(244,162,97,0.15)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a href="#top" style={{ textDecoration: 'none' }}>
        <div>
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: '#F4A261',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: '2px',
          }}>The</div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '22px',
            fontWeight: 700,
            color: '#F8F9FA',
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}>TARRACE</div>
          <div style={{
            fontSize: '8px',
            letterSpacing: '0.4em',
            color: '#9CA3AF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            textTransform: 'uppercase',
            marginTop: '3px',
          }}>Restaurant</div>
        </div>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
        className="hidden md:flex"
      >
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: '#9CA3AF',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.1em',
              fontWeight: 500,
              transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.target.style.color = '#F4A261'}
            onMouseLeave={e => e.target.style.color = '#9CA3AF'}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#reserve"
          style={{
            background: 'linear-gradient(135deg, #F4A261, #e8894a)',
            color: '#0B1B2B',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 22px',
            borderRadius: '2px',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-1px)'
            e.target.style.boxShadow = '0 8px 24px rgba(244,162,97,0.3)'
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          Reserve Table
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#F8F9FA',
          cursor: 'pointer',
          padding: '4px',
        }}
        className="flex md:hidden"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(11,27,43,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(244,162,97,0.15)',
              padding: '24px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: '#F8F9FA',
                  textDecoration: 'none',
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setMobileOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #F4A261, #e8894a)',
                color: '#0B1B2B',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '12px 22px',
                borderRadius: '2px',
                textAlign: 'center',
              }}
            >
              Reserve Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
