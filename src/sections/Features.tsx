import { motion } from 'motion/react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  roast: RoastVisual,
  subscription: SubscriptionVisual,
  quality: QualityVisual,
  grind: GrindVisual,
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(255_236_224/0.22)]">
                  <div className="relative flex-1 overflow-hidden">
                    <Visual />
                  </div>
                  {/* Fixed height so dividers line up across a row regardless of copy length. */}
                  <div className="relative h-[96px] border-t border-line px-6 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// The curve a batch walks on the roaster: bean temperature rising to first
// crack, then flattening out as we ease off the gas.
function RoastVisual() {
  const w = 600
  const h = 240
  const beanTemp = [88, 122, 154, 182, 201, 213, 219, 224, 228, 231, 233]
  const rateOfRise = [100, 74, 58, 47, 39, 33, 28, 25, 22, 20, 18]
  const step = w / (beanTemp.length - 1)
  const toPath = (values: number[], max: number) =>
    values.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(' ')
  return (
    <div className="absolute inset-0 flex flex-col p-6">
      <div className="depth relative flex items-center gap-3 rounded-[12px] bg-surface-2 px-3 py-2 text-[11px] text-muted">
        <span className="round size-2 bg-accent" />
        Batch #4128 · 12 kg · first crack 8:41
        <span className="ml-auto text-faint">Dropped 9:42</span>
      </div>
      <div className="relative mt-4 flex-1">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="rgba(255,255,255,0.06)" />
          ))}
          <motion.path
            d={toPath(beanTemp, 250)}
            fill="none"
            stroke="#ff7a45"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
          <motion.path
            d={toPath(rateOfRise, 110)}
            fill="none"
            stroke="#ffb547"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.25, ease: 'easeInOut' }}
          />
        </svg>
        <div className="absolute bottom-0 left-0 flex items-center gap-4 text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="round size-2 bg-accent" /> Bean temp
          </span>
          <span className="flex items-center gap-1.5">
            <span className="round size-2 bg-accent-2" /> Rate of rise
          </span>
        </div>
      </div>
    </div>
  )
}

const flow = [
  { label: 'You pick a brewer and a rhythm', color: '#ff7a45' },
  { label: 'We roast on Tuesday morning', color: '#ff4d6d' },
  { label: 'Doorstep on Thursday, 48h later', color: '#ffb547' },
]

function SubscriptionVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <ol className="relative flex w-full max-w-[260px] flex-col gap-6">
        <svg aria-hidden className="absolute left-[19px] top-6 h-[calc(100%-48px)] w-px overflow-visible">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 6" className="animate-dash" strokeLinecap="round" />
        </svg>
        {flow.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="depth relative flex min-h-11 items-center gap-3 rounded-[14px] bg-bg/60 px-3 py-2 text-[13px] backdrop-blur"
          >
            <span className="round size-3 shrink-0 ring-4 ring-surface" style={{ background: step.color, boxShadow: `0 0 16px ${step.color}66` }} />
            {step.label}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

// Ten cuppings a week, scored out of 100. Anything under 84 never gets bagged.
const scores = [78, 82, 79, 85, 83, 88, 86, 91, 87, 94]

function QualityVisual() {
  return (
    <div className="absolute inset-0 flex items-end p-6">
      <div className="flex h-[78%] w-full items-end gap-2">
        {scores.map((s, i) => (
          <motion.div
            key={i}
            className={cx(
              'flex-1 origin-bottom rounded-[6px]',
              s >= 84 ? 'bg-gradient-to-t from-accent/30 to-accent' : 'bg-white/[0.12]',
            )}
            style={{ height: `${s}%` }}
            initial={{ scaleY: 0.1, opacity: 0.4 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          />
        ))}
      </div>
      <div className="depth absolute left-6 top-6 rounded-[10px] bg-surface-2 px-2.5 py-1.5 text-[11px] text-muted">
        Cupping score <span className="ml-1 text-accent-2">87 · excellent</span>
      </div>
    </div>
  )
}

const grinds = [
  { name: 'Espresso', code: 'ESP', hue: 25 },
  { name: 'V60', code: 'V60', hue: 40 },
  { name: 'Aeropress', code: 'AER', hue: 20 },
  { name: 'Moka pot', code: 'MOK', hue: 15 },
  { name: 'French press', code: 'PRS', hue: 30 },
  { name: 'Chemex', code: 'CHX', hue: 35 },
  { name: 'Cold brew', code: 'CLD', hue: 210 },
  { name: 'Turkish', code: 'TRK', hue: 300 },
  { name: 'Batch brew', code: 'BAT', hue: 170 },
  { name: 'Percolator', code: 'PER', hue: 120 },
  { name: 'Siphon', code: 'SIP', hue: 260 },
  { name: 'Cupping', code: 'CUP', hue: 285 },
]

function GrindVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid grid-cols-6 gap-3">
        {grinds.map((grind, i) => (
          <div
            key={grind.name}
            title={grind.name}
            className="depth relative grid size-13 place-items-center rounded-[16px] text-[13px] font-semibold animate-float"
            style={{
              animationDelay: `${(i % 6) * 0.4}s`,
              color: `hsl(${grind.hue} 75% 76%)`,
              background: `linear-gradient(180deg, hsl(${grind.hue} 75% 55% / 0.18), hsl(${grind.hue} 60% 30% / 0.06))`,
            }}
          >
            {grind.code}
          </div>
        ))}
      </div>
    </div>
  )
}