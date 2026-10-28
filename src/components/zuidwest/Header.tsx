import { Clock } from '../Clock'
import { type ThemeName, themes } from './theme'

const dateFormatter = new Intl.DateTimeFormat('nl-NL', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

function DateDisplay() {
  const formatted = dateFormatter.format(new Date())
  return <span>{formatted.charAt(0).toUpperCase() + formatted.slice(1)}</span>
}

export function Header({ theme }: { theme: ThemeName }) {
  const c = themes[theme]

  return (
    <div className="font-nunito absolute top-0 right-0 left-0 z-30">
      <img
        src="/logos/top-bar.svg"
        alt=""
        className="absolute top-0 left-0 h-[160px] w-[1920px]"
      />

      <div
        className="absolute top-[72px] left-[192px] flex h-[56px] items-center rounded-full pr-[28px] pl-[10px]"
        style={{ backgroundColor: c.accentDark }}
      >
        <svg
          className="mr-[10px] size-[36px]"
          viewBox="0 0 40 40"
          fill="none"
          stroke={c.accentMid}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="20" cy="20" r="18" />
          <polyline points="20,10 20,20 12,20" />
        </svg>
        <span className="text-[38px] leading-none font-bold text-white">
          <Clock />
        </span>
      </div>

      <div className="absolute top-[73px] left-[393px] flex h-[54px] items-center rounded-full border-2 border-white px-[24px]">
        <span className="text-[38px] leading-none font-bold text-white">
          <DateDisplay />
        </span>
      </div>
    </div>
  )
}
