import { motion } from 'motion/react'

import { LogoMark } from './Logo'
import { cx } from '../lib/cx'

// Lots in the customer's current rotation, matched to the sidebar dots below.
const rotation = [
  { label: 'Guji, Ethiopia', hue: 25, note: 'Peach, jasmine' },
  { label: 'Huila, Colombia', hue: 170, note: 'Cocoa, apple' },
  { label: 'Antigua, Guatemala', hue: 210, note: 'Toffee, orange' },
  { label: 'Nyeri, Kenya', hue: 320, note: 'Blackcurrant' },
]

export function Monogram({ initials, hue, className }: { initials: string; hue: number; className?: string }) {
  return (
    <span
      className={cx('round grid size-6 shrink-0 place-items-center text-[10px] font-semibold text-white', className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 62%), hsl(${hue + 40} 70% 48%))`,
      }}
    >
      {initials}
    </span>
  )
}

const flavours = [
  { label: 'Acidity', value: 72 },
  { label: 'Body', value: 54 },
  { label: 'Sweetness', value: 86 },
]

const upcoming = [
  { code: 'ET', hue: 25, title: 'Guji · washed', when: 'Thu 30 Oct', status: 'Roasting Tue', tone: 'accent' },
  { code: 'CO', hue: 170, title: 'Huila · honey', when: 'Thu 13 Nov', status: 'Scheduled', tone: 'muted' },
  { code: 'GT', hue: 210, title: 'Antigua · natural', when: 'Thu 27 Nov', status: 'Scheduled', tone: 'muted' },
  { code: 'KE', hue: 320, title: 'Nyeri · washed', when: 'Thu 11 Dec', status: 'Reserved', tone: 'teal' },
]

const toneClass: Record<string, string> = {
  accent: 'bg-accent/15 text-accent',
  teal: 'bg-accent-2/15 text-accent-2',
  muted: 'bg-white/[0.06] text-muted',
}

export function ProductMock() {
  return (
    <div className="depth relative flex aspect-[16/10] w-full overflow-hidden rounded-window bg-surface text-left shadow-glow sm:aspect-[16/9]">
      {/* Sidebar: the rotation */}
      <aside className="hidden w-[200px] shrink-0 flex-col border-r border-line bg-bg/60 p-3 sm:flex">
        <div className="flex items-center gap-2 px-1.5 py-1">
          <LogoMark className="size-6 rounded-[8px]" />
          <span className="text-[12px] font-semibold">Lantern Coffee</span>
        </div>
        <p className="mt-5 px-2 text-[11px] text-faint">In your rotation</p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {rotation.map((lot) => (
            <li key={lot.label} className="flex h-8 items-center gap-2 rounded-[10px] px-2 text-[12px] text-muted">
              <span className="size-2 rounded-[3px]" style={{ background: `hsl(${lot.hue} 70% 65%)` }} />
              <span className="min-w-0 flex-1 truncate">{lot.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto depth relative rounded-[12px] bg-white/[0.04] p-3">
          <p className="text-[11px] text-faint">Next roast day</p>
          <p className="mt-1 text-[13px] font-semibold">Tuesday, 28 Oct</p>
          <div className="mt-3 flex items-center gap-1.5">
            <Monogram initials="ET" hue={25} />
            <Monogram initials="CO" hue={170} className="-ml-3 ring-2 ring-bg" />
            <Monogram initials="GT" hue={210} className="-ml-3 ring-2 ring-bg" />
            <span className="ml-1 text-[11px] text-faint">3 lots queued</span>
          </div>
        </div>
      </aside>

      {/* Main: the next delivery */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center justify-between border-b border-line px-4">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium">Your next bag</span>
            <span className="hidden text-[12px] text-faint sm:inline">Ships Thu 30 Oct</span>
          </div>
          <div className="depth relative flex items-center gap-1 rounded-[10px] bg-white/[0.04] p-0.5 text-[11px]">
            <span className="rounded-[8px] bg-white/[0.08] px-2 py-1 text-fg">Whole bean</span>
            <span className="px-2 py-1 text-muted">Ground</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-[auto_1fr] gap-3 p-4">
          {[
            { label: 'Roast level', value: 'Medium', delta: 'for V60', tone: 'text-accent' },
            { label: 'Bag size', value: '340 g', delta: '≈ 24 cups', tone: 'text-accent-2' },
            { label: 'Cadence', value: 'Fortnightly', delta: 'skip any time', tone: 'text-accent-3' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="depth relative rounded-[14px] bg-white/[0.02] p-3"
            >
              <p className="text-[11px] text-muted">{kpi.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-[18px] font-semibold tracking-tight">{kpi.value}</span>
                <span className={cx('text-[11px]', kpi.tone)}>{kpi.delta}</span>
              </div>
            </motion.div>
          ))}

          <div className="depth relative col-span-3 flex flex-col rounded-[14px] bg-white/[0.02] p-3 md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium">Flavour profile · Guji</p>
              <span className="text-[11px] text-faint">Cupped 24 Oct</span>
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-center gap-3">
              {flavours.map((f, i) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-[11px] text-muted">{f.label}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-[4px] bg-white/[0.06]">
                    <motion.span
                      className="block h-full rounded-[4px] bg-gradient-to-r from-accent to-accent-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${f.value}%` }}
                      transition={{ delay: 0.7 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                  <span className="w-6 shrink-0 text-right text-[11px] tabular-nums text-faint">{f.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-3 text-[11px]">
              {[
                ['Farm', 'Bombe Washing Stn'],
                ['Altitude', '2,050 m'],
                ['Process', 'Washed'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-faint">{label}</p>
                  <p className="mt-0.5 truncate text-[13px] font-medium text-fg">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="depth relative col-span-3 hidden flex-col rounded-[14px] bg-white/[0.02] p-3 md:col-span-1 md:flex">
            <p className="text-[12px] font-medium">On the way</p>
            <ul className="mt-2 flex flex-col gap-2">
              {upcoming.map((row, i) => (
                <motion.li
                  key={row.title}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.45 }}
                  className="flex items-center gap-2"
                >
                  <Monogram initials={row.code} hue={row.hue} className="size-5 text-[9px]" />
                  <span className="min-w-0 flex-1 truncate text-[11px] text-fg/90">{row.title}</span>
                  <span className={cx('shrink-0 rounded-[6px] px-1.5 py-0.5 text-[10px]', toneClass[row.tone])}>
                    {row.status}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto border-t border-line pt-2 text-[11px] text-faint">Next: {upcoming[0].when}</p>
          </div>
        </div>
      </div>
    </div>
  )
}