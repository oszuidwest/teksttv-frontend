import { describe, expect, test } from 'bun:test'
import { sanitizeRichText } from './sanitize'

describe('sanitizeRichText', () => {
  test('passes allowlisted inline formatting through unchanged', () => {
    const input = 'Hello <strong>world</strong> and <em>everyone</em>'
    expect(sanitizeRichText(input)).toBe(input)
  })

  test('preserves <br> line breaks', () => {
    expect(sanitizeRichText('line one<br>line two')).toBe(
      'line one<br>line two',
    )
  })

  test('preserves links with href, target, and rel attributes', () => {
    const input =
      '<a href="https://example.com" target="_blank" rel="noopener">link</a>'
    expect(sanitizeRichText(input)).toBe(input)
  })

  test('strips <script> tags entirely', () => {
    expect(sanitizeRichText('safe<script>alert(1)</script>')).toBe('safe')
  })

  test('strips event-handler attributes', () => {
    expect(sanitizeRichText('<span onclick="alert(1)">x</span>')).toBe(
      '<span>x</span>',
    )
  })

  test('strips javascript: URLs from links', () => {
    const result = sanitizeRichText('<a href="javascript:alert(1)">x</a>')
    expect(result).not.toContain('javascript:')
  })

  test('strips disallowed tags but keeps their text content', () => {
    expect(sanitizeRichText('<iframe>hidden</iframe>nope')).toBe('nope')
    expect(sanitizeRichText('<h1>title</h1>')).toBe('title')
  })

  test('returns an empty string for empty input', () => {
    expect(sanitizeRichText('')).toBe('')
  })

  test('handles plain text without modification', () => {
    expect(sanitizeRichText('just plain text')).toBe('just plain text')
  })
})
