import App from './App'
import { zuidwestKits } from './components/zuidwest/kit'
import type { ThemeName } from './components/zuidwest/theme'

export default function ZuidWestApp({
  theme,
  ...props
}: {
  theme: ThemeName
  apiBase: string
  channel: string
}) {
  return <App {...props} {...zuidwestKits[theme]} />
}
