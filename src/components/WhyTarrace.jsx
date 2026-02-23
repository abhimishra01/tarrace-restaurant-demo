import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wind, UtensilsCrossed, PartyPopper } from 'lucide-react'

const features = [
  {
    icon: Wind,
    emoji: '🌇',
    title: 'Rooftop Ambience',
    description:
      'Open skies, fairy lights, and the warm Lucknow breeze. Every table is a front-row seat to the city skyline.',
  },
  {
    icon: UtensilsCrossed,
    emoji: '🍽️',
    title: 'Multi-Cuisine Menu',
    description:
      'From North Indian classics to Asian stir-fries, our menu spans continents. Crafted fresh. Served with care.',
  },
  {
    icon: PartyPopper,
    emoji: '🎉',
    title: 'Ideal Celebration Spot',
    description:
      'Birthdays, anniversaries, date nights — The Tarrace sets the stage for your most memorable evenings.',
  },
]

// Sunset Table card
function SunsetTableCard({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(244,162,97,0.12), rgba(255,214,165,0.06))',
        border: '1px solid rgba(244,162,97,0.3)',
        borderRadius: '6px',
        padding: 'clamp(28px, 4vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '64px',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(244,162,97,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        fontSize: '10px',
        letterSpacing: '0.35em',
        color: '#F4A261',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}>Premium Experience</div>

      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(26px, 4vw, 40px)',
        fontWeight: 700,
        color: '#F8F9FA',
        marginBottom: '16px',
      }}>
        Sunset Table Experience
      </h3>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        color: '#9CA3AF',
        lineHeight: 1.8,
        maxWidth: '600px',
        margin: '0 auto 28px',
      }}>
        Pre-reserved table at the railing. Candle setup. Exclusive for 90 minutes.
        The most sought-after seat in Lucknow — reserved for those who plan ahead.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(24px, 4vw, 60px)',
        flexWrap: 'wrap',
        marginBottom: '32px',
      }}>
        {[
          { label: 'Railing Table', detail: 'Prime Skyline View' },
          { label: 'Candle Setup', detail: 'Romantic Ambience' },
          { label: '90 Minutes', detail: 'Exclusive Slot' },
        ].map(item => (
          <div key={item.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFD6A5',
              marginBottom: '4px',
            }}>{item.label}</div>
            <div style={{
              fontSize: '11px',
              color: '#9CA3AF',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.06em',
            }}>{item.detail}</div>
          </div>
        ))}
      </div>

      <a
        href="#reserve"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #F4A261, #e8894a)',
          color: '#0B1B2B',
          textDecoration: 'none',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '14px 32px',
          borderRadius: '2px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          fontFamily: 'Inter, sans-serif',
        }}
        onMouseEnter={e => {
          e.target.style.transform = 'translateY(-2px)'
          e.target.style.boxShadow = '0 8px 24px rgba(244,162,97,0.4)'
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'translateY(0)'
          e.target.style.boxShadow = 'none'
        }}
      >
        Reserve Sunset Table
      </a>
    </motion.div>
  )
}

export default function WhyTarrace() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        background: '#0B1B2B',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.35em',
            color: '#F4A261',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>Why Choose Us</div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 600,
            color: '#F8F9FA',
          }}>
            Why Tarrace?
          </h2>
        </motion.div>

        {/* Feature blocks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {features.map(({ icon: Icon, emoji, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '4px',
                padding: '36px 28px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{emoji}</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontWeight: 600,
                color: '#F8F9FA',
                marginBottom: '12px',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#9CA3AF',
                lineHeight: 1.75,
              }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sunset Table Feature */}
        <SunsetTableCard inView={inView} />
      </div>
    </section>
  )
}
