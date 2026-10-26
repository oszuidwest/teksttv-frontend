import type { ImageData } from '../../types'

export function ImageMeta({
  image,
}: {
  image: Pick<ImageData, 'caption' | 'attribution'>
}) {
  return (
    <div className="absolute inset-x-0 bottom-0">
      {image.attribution && (
        <div className="flex justify-end p-5">
          <span className="bg-bredanu-yellow font-inter inline-block px-2.5 py-1 text-[16px] leading-none font-semibold text-black">
            Foto: {image.attribution}
          </span>
        </div>
      )}
      {image.caption && (
        <div className="bg-bredanu-gray font-bahnschrift px-4 py-2.5 text-[22px] leading-snug text-white">
          {image.caption}
        </div>
      )}
    </div>
  )
}
