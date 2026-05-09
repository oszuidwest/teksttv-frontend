import DOMPurify from 'isomorphic-dompurify'

// Slide titles, bodies, and ticker messages are emitted by the CMS as
// rich-text HTML. We trust the CMS but render through this allowlist as
// defense-in-depth: a compromised or misconfigured upstream cannot inject
// scripts, event handlers, or unexpected tags into a 24/7 cable feed.
const ALLOWED_TAGS = [
  'a',
  'b',
  'br',
  'em',
  'i',
  'li',
  'ol',
  'p',
  'span',
  'strong',
  'u',
  'ul',
]

const ALLOWED_ATTR = ['href', 'rel', 'target']

export function sanitizeRichText(html: string): string {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR })
}
