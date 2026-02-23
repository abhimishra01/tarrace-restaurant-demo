import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#070f18',
      borderTop: '1px solid rgba(244,162,97,0.1)',
      padding: 'clamp(50px, 7vw, 80px) clamp(20px, 6vw, 80px) 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(36px, 5vw, 60px)',
          marginBottom: '52px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#F4A261',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>The</div>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#F8F9FA',
                letterSpacing: '0.08em',
                lineHeight: 1,
              }}>TARRACE</div>
              <div style={{
                fontSize: '8px',
                letterSpacing: '0.5em',
                color: '#9CA3AF',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>Restaurant</div>
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '16px',
              fontStyle: 'italic',
              color: '#FFD6A5',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}>
              "Where Lucknow Meets The Sky."
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Facebook, href: 'https://facebook.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(244,162,97,0.08)',
                    border: '1px solid rgba(244,162,97,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(244,162,97,0.18)'
                    e.currentTarget.style.borderColor = '#F4A261'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(244,162,97,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(244,162,97,0.15)'
                  }}
                >
                  <Icon size={15} color="#F4A261" />
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: '#F4A261',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Visit Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={15} color="#F4A261" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#9CA3AF',
                  lineHeight: 1.6,
                }}>
                  Near Engineering College Chauraha,<br />
                  Aliganj, Lucknow,<br />
                  Uttar Pradesh – 226024
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={15} color="#F4A261" style={{ flexShrink: 0 }} />
                <a href="tel:+91XXXXXXXXXX" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#F4A261'}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={15} color="#F4A261" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#9CA3AF',
                    lineHeight: 1.6,
                    display: 'block',
                  }}>Mon – Sun</span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#FFD6A5',
                  }}>12:00 PM – 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: '#F4A261',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Book A Table', href: '#reserve' },
                { label: 'Our Menu', href: '#menu' },
                { label: 'The Experience', href: '#experience' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Sunset Table', href: '#reserve' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={e => e.target.style.color = '#F4A261'}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Map embed placeholder */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: '#F4A261',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Find Us</h4>
            <a
              href="https://maps.google.com/?q=Engineering+College+Chauraha+Aliganj+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                width: '100%',
                height: '130px',
                background: 'rgba(244,162,97,0.06)',
                border: '1px solid rgba(244,162,97,0.15)',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(244,162,97,0.1)'
                e.currentTarget.style.borderColor = '#F4A261'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(244,162,97,0.06)'
                e.currentTarget.style.borderColor = 'rgba(244,162,97,0.15)'
              }}
              >
                <MapPin size={20} color="#F4A261" />
                <span style={{
                  fontSize: '11px',
                  color: '#9CA3AF',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                  letterSpacing: '0.08em',
                }}>Engineering College Chauraha<br />Aliganj, Lucknow</span>
                <span style={{
                  fontSize: '10px',
                  color: '#F4A261',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>Open in Maps →</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#9CA3AF',
          }}>
            © 2025 The Tarrace. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(244,162,97,0.5)',
          }}>
            Elevate Your Evenings.
          </span>
        </div>
      </div>
    </footer>
  )
}
