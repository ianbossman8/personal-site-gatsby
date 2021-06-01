import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface Props {
  description: string | null
  imageDetail: IGatsbyImageData
}

export default function CustomGatsbyImage(props: Props) {
  const { description, imageDetail } = props

  const thumbnail = getImage(imageDetail)
  const thumbnailDescription = description ? description : ''

  return (
    <>
      {thumbnail && (
        <GatsbyImage
          image={thumbnail}
          alt={thumbnailDescription}
          title={thumbnailDescription}
          backgroundColor={
            typeof thumbnail.backgroundColor !== 'undefined' ? thumbnail.backgroundColor : 'white'
          }
        />
      )}
    </>
  )
}
