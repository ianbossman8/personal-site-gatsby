import { Link } from 'gatsby'
import React from 'react'

interface Props {
  title: string
  description: string
}

function Header({ title, description }: Props) {
  return (
    <header>
      <Link to="/">
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </header>
  )
}

export default Header
