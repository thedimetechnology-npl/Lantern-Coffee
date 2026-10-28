import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Monogram } from '../components/ProductMock'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { showcase } from '../content'
import { cx } from '../lib/cx'

export function Showcase() {
  const [active, setActive] = useState(showcase.tabs[0].key)
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={showcase.eyebrow} title={showcase.title} align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-1">
              {showcase.tabs.map((tab) => {
                const isActive = tab.key === active
                return (
                  <li key={tab.key}>
                    <button
                      type="button"
                      onClick={() => setActive(tab.key)}
                      aria-pressed={isActive}
                      className={cx(
                        'relative w-full rounded-card-sm px-5 py-4 text-left transition-colors',
                        isActive ? 'bg-surface' : 'hover:bg-white/[0.03]',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="showcase-active"
                          className="depth absolute inset-0 rounded-card-sm"
                          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span className={cx('relative block text-[16px] font-semibold', isActive ? 'text-fg' : 'text-muted')}>
                        {tab.title}
                      </span>
                      <span className="relative mt-1 block text-[14px] leading-relaxed text-muted">{tab.description}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative aspect-[16/10] overflow-hidden rounded-card bg-surface shadow-glow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 p-5 sm:p-7"
                >
                  {active === 'shipments' && <ShipmentsPanel />}
                  {active === 'journey' && <JourneyPanel />}
                  {active === 'roast' && <RoastPanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

const shipments = [
  { code: 'ET', hue: 25, title: 'Guji, Ethiopia · washed · 340 g', when: 'Ships Thu 30 Oct', next: true },
  { code: 'CO', hue: 170, title: 'Huila, Colombia · honey · 340 g', when: 'Ships Thu 13 Nov' },
  { code: 'GT', hue: 210, title: 'Antigua, Guatemala · natural · 340 g', when: 'Ships Thu 27 Nov' },
  { code: 'KE', hue: 320, title: 'Nyeri, Kenya · washed · 340 g', when: 'Ships Thu 11 Dec' },
  { code: 'BR', hue: 90, title: 'Cerrado, Brazil · pulped natural · 340 g', when: 'Ships Thu 25 Dec' },
  { code: 'ET', hue: 350, title: 'Yirgacheffe, Ethiopia · natural · 340 g', when: 'Ships Thu 8 Jan' },
  { code: 'CO', hue: 200, title: 'Nariño, Colombia · washed · 340 g', when: 'Ships Thu 22 Jan' },
]

function ShipmentsPanel() {
  return (
    <ul className="flex h-full flex-col gap-2">
      {shipments.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className={cx(
            'depth relative flex items-center gap-3 rounded-[14px] px-4 py-3',
            item.next ? 'bg-white/[0.04] [--depth-edge:rgb(255_236_224/0.22)]' : '[--depth-edge:var(--color-line)]',
          )}
        >
          <Monogram initials={item.code} hue={item.hue} className="size-7 text-[11px]" />
          <span className="min-w-0 flex-1 truncate text-[13px] sm:text-[14px]">{item.title}</span>
          <span className="shrink-0 text-[12px] tabular-nums text-faint">{item.when}</span>
        </motion.li>
      ))}
    </ul>
  )
}

const stages = [
  { title: 'On the farm', cards: ['Guji · cherry picking', 'Nyeri · drying beds'] },
  { title: 'In transit', cards: ['Huila · 6 bags, sailing'] },
  { title: 'Roasting Tuesday', cards: ['Antigua · 12 kg', 'Guji · 12 kg'] },
  { title: 'Resting & shipped', cards: ['Cerrado · ground', 'Sidama · whole bean'] },
]

function JourneyPanel() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4">
      {stages.map((col, ci) => (
        <div key={col.title} className="flex min-w-0 flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[12px] font-medium text-muted">{col.title}</span>
            <span className="text-[11px] tabular-nums text-faint">{col.cards.length}</span>
          </div>
          {col.cards.map((card, i) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.05 + i * 0.06 }}
              className="depth relative rounded-[12px] bg-white/[0.03] p-3"
            >
              <p className="text-[12px] leading-snug sm:text-[13px]">{card}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="h-1.5 w-10 rounded-[3px] bg-accent/50" />
                <Monogram initials={['ET', 'CO', 'GT', 'KE'][(ci + i) % 4]} hue={[25, 170, 210, 320][(ci + i) % 4]} className="size-5 text-[9px]" />
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}

function RoastPanel() {
  const series = [
    { label: 'Bean temp', values: [30, 120, 168, 196, 212, 222, 231], color: '#ff7a45' },
    { label: 'Rate of rise', values: [100, 74, 58, 44, 34, 27, 21], color: '#ffb547' },
  ]
  const w = 600
  const h = 220
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-5">
        {series.map((s) => (
          <span key={s.label} className="flex items-center gap-2 text-[12px] text-muted">
            <span className="round size-2" style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
        <span className="ml-auto text-[12px] text-faint">Batch #4128 · 11 min</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-full w-full flex-1" preserveAspectRatio="none">
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="rgba(255,255,255,0.06)" />
        ))}
        {series.map((s) => {
          const step = w / (s.values.length - 1)
          const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'}${i * step},${h - (v / 250) * h}`).join(' ')
          return (
            <motion.path
              key={s.label}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          )
        })}
      </svg>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-[12px] text-muted">
        <span>First crack 8:41</span>
        <span>Development 22%</span>
        <span>Dropped 9:42</span>
      </div>
    </div>
  )
}