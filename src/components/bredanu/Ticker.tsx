import type { TickerItem } from '../../types'
import { Clock } from '../Clock'

export function Ticker({
  items,
  currentIndex,
}: {
  items: TickerItem[]
  currentIndex: number
}) {
  const message = items?.length > 0 ? items[currentIndex]?.message : ''

  return (
    <div className="bg-bredanu-gray font-inter flex h-[114px] w-full flex-shrink-0 items-center gap-4 px-6 text-white">
      <span className="shrink-0 text-[48px] leading-none font-semibold tabular-nums">
        <Clock />
      </span>
      <span className="shrink-0 text-[36px] leading-none font-normal">|</span>
      <span
        className="min-w-0 flex-1 truncate pt-0.5 text-[34px] leading-tight font-normal"
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  )
}
