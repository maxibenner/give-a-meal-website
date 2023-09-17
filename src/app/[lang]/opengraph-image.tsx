import { Locale } from '@/i18n-config'
import { ImageResponse } from 'next/server'
import NextImage from 'next/image'

export const runtime = 'edge'

export const size = {
  width: 830,
  height: 498,
}
export const contentType = 'image/png'

export default async function Image({ params: { lang } }: { params: { lang: Locale } }) {

  return new ImageResponse(
    (
      <NextImage src={`/images/opengraph-image-${lang}.jpg`} width={size.width} height={size.height} alt="open graph image" />
    ),
    {
      ...size,
    }
  )
}