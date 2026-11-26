import { zuidwestKits } from './components/zuidwest/kit'
import type { ThemeName } from './components/zuidwest/theme'
import Preview from './Preview'

export default function ZuidWestPreview({ theme }: { theme: ThemeName }) {
  return <Preview {...zuidwestKits[theme]} />
}
