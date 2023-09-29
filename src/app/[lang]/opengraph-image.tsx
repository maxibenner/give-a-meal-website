import { Locale } from '@/i18n-config';
import { ImageResponse } from 'next/server';

export default async function Image({ params }: { params: { lang: Locale } }) {

    const options = { width: 830, height: 498 }
    const element = <img src={require(`@/public/assets/images/opengraph-image-${params.lang}.jpg`)} width={options.width} height={options.height} />

    return new ImageResponse(element, options);
}
