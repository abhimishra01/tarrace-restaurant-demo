import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Users, Star, Sparkles } from 'lucide-react'

const occasions = [
  { icon: Heart, label: 'Date Nights' },
  { icon: Star, label: 'Birthday Celebrations' },
  { icon: Users, label: "Friends' Gatherings" },
  { icon: Sparkles, label: 'Casual Luxury Evenings' },
]

// Cinematic rooftop illustration using CSS
function RooftopVisual() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '4/3',
      borderRadius: '4px',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #112236 0%, #1a3045 40%, #0d1f2e 100%)',
    }}>
      {/* Sky gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 20%, rgba(244,162,97,0.25) 0%, rgba(255,100,50,0.1) 30%, transparent 60%)',
      }} />

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            borderRadius: '50%',
            backgroundColor: '#FFD6A5',
            top: Math.random() * 55 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Table scene */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '55%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(11,27,43,0.6) 100%)',
      }} />

      {/* Railing */}
      <div style={{
        position: 'absolute',
        bottom: '38%',
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(244,162,97,0.4), transparent)',
      }} />
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: '38%',
          left: `${(i + 1) * 7.5}%`,
          width: '1px',
          height: '40px',
          background: 'rgba(244,162,97,0.3)',
          transform: 'translateX(-50%)',
        }} />
      ))}

      {/* Table */}
      <div style={{
        position: 'absolute',
        bottom: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '4px',
        background: 'rgba(244,162,97,0.3)',
        borderRadius: '2px',
      }} />

      {/* Candle flame */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '8px',
          height: '14px',
          background: 'radial-gradient(ellipse at 50% 80%, #F4A261, #FFD6A5)',
          borderRadius: '50% 50% 30% 30%',
          boxShadow: '0 0 12px 4px rgba(244,162,97,0.5)',
        }}
        animate={{ scaleX: [1, 0.8, 1.1, 1], skewX: ['0deg', '3deg', '-3deg', '0deg'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Fairy lights */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: '25%',
            left: `${10 + i * 11}%`,
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#FFD6A5',
            boxShadow: '0 0 6px 2px rgba(255,214,165,0.6)',
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '40%',
        right: '40%',
        height: '30%',
        background: 'radial-gradient(ellipse, rgba(244,162,97,0.15) 0%, transparent 70%)',
      }} />

      {/* Label */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        background: 'rgba(11,27,43,0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(244,162,97,0.2)',
        borderRadius: '3px',
        padding: '6px 12px',
      }}>
        <span style={{
          fontSize: '9px',
          letterSpacing: '0.25em',
          color: '#F4A261',
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
        }}>Rooftop · Open Air · Aliganj</span>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        background: '#0B1B2B',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>
        {/* Visual Left */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <RooftopVisual />
        </motion.div>

        {/* Copy Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.35em',
            color: '#F4A261',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>The Experience</div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 600,
            color: '#F8F9FA',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            Sky Above.<br />
            <span style={{
              background: 'linear-gradient(135deg, #F4A261, #FFD6A5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Flavor Below.</span>
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#9CA3AF',
            lineHeight: 1.8,
            marginBottom: '32px',
          }}>
            Located in the heart of Aliganj near Engineering College Chauraha,
            The Tarrace offers an elevated dining experience with open skies,
            cozy seating, and curated dishes designed for memorable evenings.
          </p>

          {/* Occasions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '4px',
            }}>Perfect for</p>
            {occasions.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(244,162,97,0.1)',
                  border: '1px solid rgba(244,162,97,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={14} color="#F4A261" />
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#FFD6A5',
                  fontWeight: 500,
                }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
