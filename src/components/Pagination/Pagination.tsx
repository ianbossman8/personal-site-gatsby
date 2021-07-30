import React from 'react'
import { Link } from 'gatsby'
import { PaginationNav } from './styles'

interface Props {
  currentPage: number
  numBlogPages: number
}

export default function Pagination(props: Props): JSX.Element {
  const { numBlogPages, currentPage } = props

  const isLastPage = currentPage === numBlogPages
  const isFirstPage = currentPage === 1
  const prevPage = currentPage - 1 === 1 ? '/blogs' : `/blogs/page/${currentPage - 1}`
  const nextPage = `/blogs/page/${currentPage + 1}`

  return (
    <PaginationNav>
      {!isFirstPage && <Link to={prevPage}>Back</Link>}
      {!isLastPage && <Link to={nextPage}>Next</Link>}
    </PaginationNav>
  )
}
