import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background — cinematic rooftop gradient + overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 60% 40%, rgba(244,162,97,0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(255,214,165,0.08) 0%, transparent 50%),
          linear-gradient(160deg, #0B1B2B 0%, #112236 40%, #1a2a3a 70%, #0d1f30 100%)
        `,
        zIndex: 0,
      }} />

      {/* Star particles */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            borderRadius: '50%',
            backgroundColor: '#FFD6A5',
            top: Math.random() * 70 + '%',
            left: Math.random() * 100 + '%',
            zIndex: 1,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Rooftop silhouette SVG */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 2,
          opacity: 0.35,
        }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300 L0 200 L60 200 L60 160 L80 160 L80 130 L100 130 L100 160 L130 160 L130 200 L200 200 L200 180 L220 180 L220 150 L240 150 L250 120 L260 150 L270 150 L270 180 L300 180 L300 200 L380 200 L380 170 L400 170 L430 130 L460 170 L480 170 L480 200 L540 200 L540 190 L560 190 L560 160 L600 160 L600 140 L640 140 L640 160 L680 160 L680 190 L700 190 L700 200 L760 200 L760 175 L780 175 L800 145 L820 145 L840 175 L860 175 L860 200 L920 200 L920 185 L960 185 L960 155 L1000 155 L1000 185 L1040 185 L1040 200 L1100 200 L1100 170 L1140 130 L1160 130 L1180 160 L1200 160 L1200 200 L1260 200 L1260 190 L1280 165 L1300 165 L1300 200 L1360 200 L1360 210 L1440 210 L1440 300 Z"
          fill="#0B1B2B"
        />
      </svg>

      {/* Gradient fade bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(transparent, #0B1B2B)',
        zIndex: 3,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 20px',
        maxWidth: '900px',
      }}>
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(244,162,97,0.12)',
            border: '1px solid rgba(244,162,97,0.3)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '28px',
          }}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#F4A261',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#FFD6A5',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
          }}>
            Rooftop · Aliganj, Lucknow
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div style={{
            fontSize: 'clamp(11px, 1.5vw, 14px)',
            letterSpacing: '0.5em',
            color: '#F4A261',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>The</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(56px, 10vw, 120px)',
            fontWeight: 700,
            color: '#F8F9FA',
            letterSpacing: '0.06em',
            lineHeight: 0.95,
            marginBottom: '8px',
          }}>
            TARRACE
          </h1>
          <div style={{
            fontSize: 'clamp(9px, 1.2vw, 12px)',
            letterSpacing: '0.6em',
            color: '#9CA3AF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}>Restaurant</div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#FFD6A5',
            letterSpacing: '0.02em',
            marginBottom: '48px',
            lineHeight: 1.3,
          }}
        >
          Dine Above The Ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#reserve"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #F4A261, #e8894a)',
              color: '#0B1B2B',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              borderRadius: '2px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 12px 36px rgba(244,162,97,0.4)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Book A Table
          </a>
          <a
            href="#menu"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#F8F9FA',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              borderRadius: '2px',
              border: '1px solid rgba(248,249,250,0.3)',
              transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = '#F4A261'
              e.target.style.color = '#F4A261'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'rgba(248,249,250,0.3)'
              e.target.style.color = '#F8F9FA'
            }}
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{
          fontSize: '9px',
          letterSpacing: '0.3em',
          color: '#9CA3AF',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}>Scroll</span>
        <ChevronDown size={16} color="#F4A261" />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
