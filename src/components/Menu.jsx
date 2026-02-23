import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed, Flame, Leaf, Coffee, ChevronRight } from 'lucide-react'

const menuCategories = [
  {
    icon: Flame,
    title: 'North Indian Classics',
    description: 'Dal Makhani, Butter Chicken, Paneer Lababdar, Biryanis & more.',
    highlights: ['Dal Makhani', 'Butter Chicken', 'Paneer Lababdar', 'Lucknowi Biryani', 'Shahi Korma'],
    tag: 'Chef\'s Favourite',
  },
  {
    icon: UtensilsCrossed,
    title: 'Chinese & Asian',
    description: 'Wok-tossed noodles, Momos, Dimsums, and vibrant Asian stir-fries.',
    highlights: ['Hakka Noodles', 'Chicken Momos', 'Dimsums', 'Fried Rice', 'Spring Rolls'],
    tag: 'Popular',
  },
  {
    icon: Flame,
    title: 'Tandoor Specials',
    description: 'Slow-marinated kebabs and tikkas straight from the clay oven.',
    highlights: ['Galouti Kebab', 'Seekh Kebab', 'Tandoori Chicken', 'Paneer Tikka', 'Haryali Kebab'],
    tag: 'Must Try',
  },
  {
    icon: Leaf,
    title: "Chef's Signature Starters",
    description: 'Exclusive appetizers crafted to begin your evening right.',
    highlights: ['Crispy Corn', 'Achari Paneer', 'Stuffed Mushrooms', 'Peri Peri Fries', 'Nachos Platter'],
    tag: 'Exclusive',
  },
  {
    icon: Coffee,
    title: 'Mocktails & Beverages',
    description: 'Crafted mocktails, fresh juices, and signature drinks for every mood.',
    highlights: ['Virgin Mojito', 'Blue Lagoon', 'Sunset Cooler', 'Rose Milk', 'Mango Tango'],
    tag: 'Seasonal',
  },
]

function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered
          ? 'rgba(244,162,97,0.08)'
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? '1px solid rgba(244,162,97,0.35)'
          : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        padding: '32px 28px',
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(244,162,97,0.12)' : 'none',
      }}
    >
      {/* Tag */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'rgba(244,162,97,0.12)',
        border: '1px solid rgba(244,162,97,0.2)',
        borderRadius: '100px',
        padding: '3px 10px',
        fontSize: '9px',
        letterSpacing: '0.15em',
        color: '#F4A261',
        textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
      }}>
        {item.tag}
      </div>

      {/* Icon */}
      <div style={{
        width: '44px',
        height: '44px',
        background: hovered ? 'rgba(244,162,97,0.15)' : 'rgba(244,162,97,0.08)',
        border: '1px solid rgba(244,162,97,0.2)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '18px',
        transition: 'all 0.3s',
      }}>
        <Icon size={18} color="#F4A261" />
      </div>

      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '20px',
        fontWeight: 600,
        color: '#F8F9FA',
        marginBottom: '10px',
      }}>
        {item.title}
      </h3>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: '#9CA3AF',
        lineHeight: 1.7,
        marginBottom: '20px',
      }}>
        {item.description}
      </p>

      {/* Highlights */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {item.highlights.map(dish => (
          <span key={dish} style={{
            background: 'rgba(255,214,165,0.06)',
            border: '1px solid rgba(255,214,165,0.12)',
            borderRadius: '2px',
            padding: '3px 8px',
            fontSize: '11px',
            color: '#FFD6A5',
            fontFamily: 'Inter, sans-serif',
          }}>
            {dish}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="menu"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        background: 'linear-gradient(180deg, #0B1B2B 0%, #0d1f30 50%, #0B1B2B 100%)',
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
          }}>Our Offerings</div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 600,
            color: '#F8F9FA',
            marginBottom: '16px',
          }}>
            Signature Menu
          </h2>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '20px',
            fontStyle: 'italic',
            color: '#FFD6A5',
          }}>
            Crafted for evenings that deserve more.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {menuCategories.map((item, i) => (
            <MenuCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <button
            style={{
              background: 'transparent',
              border: '1px solid rgba(244,162,97,0.4)',
              color: '#F4A261',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '13px 32px',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(244,162,97,0.1)'
              e.currentTarget.style.borderColor = '#F4A261'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(244,162,97,0.4)'
            }}
          >
            View Full Menu <ChevronRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
