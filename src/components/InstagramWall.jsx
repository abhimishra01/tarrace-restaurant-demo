import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

// Each cell is a CSS gradient mood image (placeholder for real photos)
const posts = [
  {
    gradient: 'linear-gradient(135deg, #1a2a3a 0%, #2d3f52 50%, #F4A261 200%)',
    bg: 'radial-gradient(ellipse at 30% 60%, rgba(244,162,97,0.4) 0%, rgba(11,27,43,0.9) 70%)',
    label: 'Evening Vibes',
    likes: '1.2k',
    comments: '84',
    size: 'large',
  },
  {
    bg: 'radial-gradient(ellipse at 70% 30%, rgba(255,100,50,0.5) 0%, rgba(17,34,54,0.95) 70%)',
    label: 'Sunset Table',
    likes: '934',
    comments: '61',
    size: 'small',
  },
  {
    bg: 'radial-gradient(ellipse at 50% 50%, rgba(244,162,97,0.3) 0%, rgba(13,31,48,0.95) 60%)',
    label: 'Skyline Nights',
    likes: '2.1k',
    comments: '103',
    size: 'small',
  },
  {
    bg: 'radial-gradient(ellipse at 20% 70%, rgba(180,80,20,0.5) 0%, rgba(11,27,43,0.9) 60%)',
    label: 'Date Night',
    likes: '1.7k',
    comments: '92',
    size: 'small',
  },
  {
    bg: 'radial-gradient(ellipse at 80% 20%, rgba(255,214,165,0.3) 0%, rgba(14,32,53,0.95) 60%)',
    label: 'Food Spread',
    likes: '887',
    comments: '55',
    size: 'small',
  },
  {
    bg: 'radial-gradient(ellipse at 40% 80%, rgba(244,162,97,0.5) 0%, rgba(11,27,43,0.9) 60%)',
    label: 'Candlelit',
    likes: '1.4k',
    comments: '79',
    size: 'small',
  },
]

function PostCell({ post, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        position: 'relative',
        borderRadius: '3px',
        overflow: 'hidden',
        background: post.bg,
        aspectRatio: '1',
        cursor: 'pointer',
        gridColumn: post.size === 'large' ? 'span 2' : 'span 1',
        gridRow: post.size === 'large' ? 'span 2' : 'span 1',
      }}
      className="instagram-post"
    >
      {/* Overlay on hover */}
      <div className="post-overlay" style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(11,27,43,0.7)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        opacity: 0,
        transition: 'opacity 0.25s ease',
        backdropFilter: 'blur(4px)',
      }}>
        <div style={{
          display: 'flex',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#F8F9FA' }}>
            <Heart size={18} fill="#F8F9FA" />
            <span style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{post.likes}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#F8F9FA' }}>
            <MessageCircle size={18} fill="#F8F9FA" />
            <span style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{post.comments}</span>
          </div>
        </div>
      </div>

      {/* Label */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '10px',
        letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
      }}>
        {post.label}
      </div>

      <style>{`
        .instagram-post:hover .post-overlay {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  )
}

export default function InstagramWall() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        background: 'linear-gradient(180deg, #0B1B2B 0%, #0e2035 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}>
            <Instagram size={16} color="#F4A261" />
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              color: '#F4A261',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
            }}>@thetarrace.lko</span>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 600,
            color: '#F8F9FA',
            marginBottom: '12px',
          }}>
            As Seen on Instagram
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#9CA3AF',
          }}>
            Tag us <span style={{ color: '#F4A261' }}>#TheTarrace</span> and be featured here.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          gap: '8px',
        }}>
          {posts.map((post, i) => (
            <PostCell key={i} post={post} index={i} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '32px' }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(244,162,97,0.3)',
              color: '#F4A261',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: '2px',
              transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(244,162,97,0.08)'
              e.currentTarget.style.borderColor = '#F4A261'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(244,162,97,0.3)'
            }}
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
