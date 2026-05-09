// Runtime-validated example payloads for the channel schema.
// Each example is checked twice: at compile time via `satisfies`, and at
// runtime via `Schema.parse` so the schema and the documented examples
// can never silently drift apart.

import { describe, expect, test } from 'bun:test'
import type { z } from 'zod'
import {
  ChannelPayloadSchema,
  type CommercialSlideData,
  CommercialSlideDataSchema,
  type CommercialTransitionSlideData,
  CommercialTransitionSlideDataSchema,
  type ImageSlideData,
  ImageSlideDataSchema,
  type TextSlideData,
  TextSlideDataSchema,
  type TickerItem,
  TickerItemSchema,
  type WeatherSlideData,
  WeatherSlideDataSchema,
} from './types'

const textSlide = {
  type: 'text',
  duration: 15000,
  title: 'News of the Day',
  body: 'This is a news article with <strong>HTML</strong> support.',
  image: { url: 'https://example.com/sidebar.jpg' },
} satisfies TextSlideData

const textSlideWithImageData = {
  type: 'text',
  duration: 15000,
  title: 'News with Attribution',
  body: 'This article has an image with caption and attribution.',
  image: {
    url: 'https://example.com/sidebar.jpg',
    caption: 'A beautiful sunset',
    attribution: 'Photo by Jane Doe',
  },
} satisfies TextSlideData

const imageSlide = {
  type: 'image',
  duration: 10000,
  url: 'https://example.com/image.jpg',
} satisfies ImageSlideData

const imageSlideWithMeta = {
  type: 'image',
  duration: 10000,
  url: 'https://example.com/image.jpg',
  caption: 'Town hall during sunset',
  attribution: 'Photo by John Smith',
} satisfies ImageSlideData

const weatherSlide = {
  type: 'weather',
  duration: 20000,
  title: 'Weather Forecast',
  location: 'Roosendaal',
  days: [
    {
      date: 'monday 12 jan',
      day_short: 'today',
      temp_min: 5,
      temp_max: 12,
      weather_id: 800,
      description: 'Sunny',
      icon: '01d',
      wind_direction: 'ZW',
      wind_beaufort: 3,
    },
  ],
} satisfies WeatherSlideData

const commercialSlide = {
  type: 'commercial',
  duration: 8000,
  url: 'https://example.com/ad.jpg',
} satisfies CommercialSlideData

const commercialTransitionSlide = {
  type: 'commercial_transition',
  duration: 2000,
  url: 'https://example.com/transition.jpg',
} satisfies CommercialTransitionSlideData

const tickerItems = [
  { message: 'Now on air: Morning Show' },
  { message: 'Breaking: Local news update' },
] satisfies TickerItem[]

const fullPayload = {
  slides: [textSlide, weatherSlide, imageSlide],
  ticker: tickerItems,
} satisfies z.infer<typeof ChannelPayloadSchema>

describe('schema examples accept documented payloads', () => {
  test('TextSlideDataSchema parses minimal text slide', () => {
    expect(() => TextSlideDataSchema.parse(textSlide)).not.toThrow()
  })

  test('TextSlideDataSchema parses text slide with image caption/attribution', () => {
    expect(() =>
      TextSlideDataSchema.parse(textSlideWithImageData),
    ).not.toThrow()
  })

  test('ImageSlideDataSchema parses minimal image slide', () => {
    expect(() => ImageSlideDataSchema.parse(imageSlide)).not.toThrow()
  })

  test('ImageSlideDataSchema parses image slide with caption/attribution', () => {
    expect(() => ImageSlideDataSchema.parse(imageSlideWithMeta)).not.toThrow()
  })

  test('WeatherSlideDataSchema parses weather slide', () => {
    expect(() => WeatherSlideDataSchema.parse(weatherSlide)).not.toThrow()
  })

  test('CommercialSlideDataSchema parses commercial slide', () => {
    expect(() => CommercialSlideDataSchema.parse(commercialSlide)).not.toThrow()
  })

  test('CommercialTransitionSlideDataSchema parses commercial transition slide', () => {
    expect(() =>
      CommercialTransitionSlideDataSchema.parse(commercialTransitionSlide),
    ).not.toThrow()
  })

  test('TickerItemSchema parses each ticker item', () => {
    for (const item of tickerItems) {
      expect(() => TickerItemSchema.parse(item)).not.toThrow()
    }
  })

  test('ChannelPayloadSchema parses full channel payload', () => {
    expect(() => ChannelPayloadSchema.parse(fullPayload)).not.toThrow()
  })
})
