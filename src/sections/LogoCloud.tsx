import { Container } from '../components/Container'
import type { ReactElement } from 'react'
import { Reveal } from '../components/Reveal'
import { logos } from '../content'

// Minimal geometric marks so the row reads as real brands without
// borrowing anyone's identity. Swap for customer SVGs when you have them.
const marks: Record<string, ReactElement> = {
  Marlowe: <circle cx="12" cy="12" r="7" />,
  Foundry: <path d="M12 4 20 19H4z" />,
  Halfmoon: <path d="M3 14c3-5 6-5 9 0s6 5 9 0" />,
  Tidewater: <path d="M4 12h16M12 4c-4 4-4 12 0 16M12 4c4 4 4 12 0 16" />,
  Ora: <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" />,
  Kindred: <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 12c3-6 15-6 18 0" />,
  Copperline: <path d="M12 4v16M6 10c0 4 3 6 6 6s6-2 6-6" />,
  Verity: <path d="M5 19c6-1 10-6 14-14-5 1-10 5-12 11l-2 3z" />,
}

export function LogoCloud() {
  const doubled = [...logos, ...logos]
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">Poured daily at</p>
        </Reveal>
        <div className="section-mask relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => (
              <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-fg/45">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {marks[name]}
                </svg>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
