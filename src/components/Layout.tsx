import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Header from './Header'

const AppContainer = styled.div`
  height: 100%;
  margin: 0 auto;
`

interface Props {
  location: Location | string
  title: string
  description: string
  children?: any
}

const Layout = ({ location, title, description, children }: Props) => {
  // const rootPath = `/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }

  return (
    <AppContainer>
      <Header title={title} description={description} />
      <main>{children}</main>
    </AppContainer>
  )
}

export default Layout
