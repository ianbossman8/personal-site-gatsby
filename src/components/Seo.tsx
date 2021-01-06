import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
}

const SEO = ({ description, lang, meta, title }: Props) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    />
  )
}

export default SEO
