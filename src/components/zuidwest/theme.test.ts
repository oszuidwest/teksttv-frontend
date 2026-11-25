import { describe, expect, test } from 'bun:test'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { themes } from './theme'

describe('ZuidWest themes', () => {
  test.each(Object.keys(themes))('%s has a header logo', (theme) => {
    const logo = join(import.meta.dir, '../../../public/logos', `${theme}.svg`)
    expect(existsSync(logo)).toBe(true)
  })
})
