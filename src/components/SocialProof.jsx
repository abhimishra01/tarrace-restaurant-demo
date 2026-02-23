import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    text: "Perfect rooftop ambience for evening dinners. The view of Aliganj at night is absolutely beautiful.",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "Amazing vibe and the food is genuinely good. The Paneer Tikka and mocktails are a must-try!",
    author: "Rahul M.",
    rating: 5,
  },
  {
    text: "Great location near Engineering College Chauraha. Came for a birthday, felt like a premium experience.",
    author: "Anjali K.",
    rating: 5,
  },
  {
    text: "Best rooftop spot in Lucknow hands down. The breeze, the lights, the food — absolutely loved it.",
    author: "Aryan T.",
    rating: 5,
  },
]

function ReviewCard({ review, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(244,162,97,0.12)',
        borderRadius: '4px',
        padding: '28px',
        position: 'relative',
      }}
    >
      <Quote size={20} color="#F4A261" style={{ opacity: 0.5, marginBottom: '12px' }} />
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '17px',
        fontStyle: 'italic',
        color: '#FFD6A5',
        lineHeight: 1.6,
        marginBottom: '16px',
      }}>
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: '12px',
          color: '#9CA3AF',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.06em',
        }}>
          — {review.author}
        </span>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={12} color="#F4A261" fill="#F4A261" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
      background: 'linear-gradient(180deg, #0B1B2B 0%, #0e2035 50%, #0B1B2B 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          {/* Rating */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
          }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} color="#F4A261" fill="#F4A261" />
            ))}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#F4A261',
              fontWeight: 600,
              marginLeft: '4px',
            }}>4.8 on Google</span>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 600,
            color: '#F8F9FA',
            marginBottom: '12px',
          }}>
            A Rooftop Loved by Lucknow
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#9CA3AF',
            letterSpacing: '0.08em',
          }}>
            Hundreds of Happy Evenings Served
          </p>
        </motion.div>

        {/* Review grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
