import type { SlideKit } from '../../SlideRenderer'
import { IframeSlide } from '../IframeSlide'
import { Frame } from './Frame'
import { ImageSlide } from './ImageSlide'
import { TextSlide } from './TextSlide'
import { Ticker } from './Ticker'
import type { ThemeName } from './theme'
import { WeatherSlide } from './WeatherSlide'

function makeKit(theme: ThemeName): SlideKit {
  return {
    slides: {
      text: (p) => <TextSlide {...p} theme={theme} />,
      image: ImageSlide,
      weather: (p) => <WeatherSlide {...p} theme={theme} />,
      iframe: IframeSlide,
    },
    // biome-ignore lint/correctness/noComponentHookFactories: makeKit only runs at module scope, so identities stay stable
    Ticker: (p) => <Ticker {...p} theme={theme} />,
    // biome-ignore lint/correctness/noComponentHookFactories: makeKit only runs at module scope, so identities stay stable
    Frame: (p) => <Frame {...p} theme={theme} />,
  }
}

// Module-scope kits keep component identities stable for app and preview.
export const zuidwestKits: Record<ThemeName, SlideKit> = {
  baronie: makeKit('baronie'),
  heerlijkheid: makeKit('heerlijkheid'),
  markiezaat: makeKit('markiezaat'),
}
