import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Image({ src, alt, className, width }) {
  return (
    <LazyLoadImage src={src} width={width ? width : null} alt={alt} className={className} />
  )
}
