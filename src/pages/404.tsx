import React from 'react'
import { Link } from 'gatsby'
import { PATH } from '../constants/path'

export default function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to={PATH.ROOT}>Home</Link>
    </>
  )
}
