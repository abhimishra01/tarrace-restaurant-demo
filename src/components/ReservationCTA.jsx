import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react'

export default function ReservationCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // WhatsApp booking integration
    const msg = `Hello! I'd like to reserve a table at The Tarrace.
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Occasion: ${formData.occasion || 'Not specified'}`
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encoded}`, '_blank')
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '3px',
    padding: '12px 16px',
    color: '#F8F9FA',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <section
      id="reserve"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(244,162,97,0.2) 0%, transparent 60%),
          linear-gradient(180deg, #0B1B2B 0%, #112236 50%, #0B1B2B 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(244,162,97,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.35em',
            color: '#F4A261',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>Reservations</div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 5vw, 50px)',
            fontWeight: 600,
            color: '#F8F9FA',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Reserve Your Evening<br />
            <span style={{
              background: 'linear-gradient(135deg, #F4A261, #FFD6A5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Under The Sky</span>
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#9CA3AF',
            lineHeight: 1.7,
          }}>
            Book your table and we'll confirm via WhatsApp within 30 minutes.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(244,162,97,0.15)',
            borderRadius: '6px',
            padding: 'clamp(28px, 4vw, 48px)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '26px',
                color: '#F8F9FA',
                marginBottom: '12px',
              }}>Redirecting to WhatsApp!</h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#9CA3AF',
              }}>
                Complete your reservation on WhatsApp. We'll confirm your table shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div>
                  <label style={labelStyle}>Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <select
                    required
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  >
                    <option value="" style={{ background: '#112236' }}>Select time</option>
                    {['12:30 PM', '1:00 PM', '2:00 PM', '3:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map(t => (
                      <option key={t} value={t} style={{ background: '#112236' }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div>
                  <label style={labelStyle}>Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8', '10+'].map(n => (
                      <option key={n} value={n} style={{ background: '#112236' }}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Occasion (Optional)</label>
                  <select
                    value={formData.occasion}
                    onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(244,162,97,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  >
                    <option value="" style={{ background: '#112236' }}>Select occasion</option>
                    {['Birthday', 'Anniversary', 'Date Night', 'Sunset Table', 'Friends Meetup', 'Business Dinner', 'Other'].map(o => (
                      <option key={o} value={o} style={{ background: '#112236' }}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #F4A261, #e8894a)',
                  color: '#0B1B2B',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '16px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  marginTop: '4px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(244,162,97,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Book Now via WhatsApp <ChevronRight size={16} />
              </button>

              <p style={{
                textAlign: 'center',
                fontSize: '11px',
                color: '#9CA3AF',
                fontFamily: 'Inter, sans-serif',
              }}>
                Reservation confirmed within 30 mins · Call:{' '}
                <a href="tel:+91XXXXXXXXXX" style={{ color: '#F4A261', textDecoration: 'none' }}>+91-XXXXXXXXXX</a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
