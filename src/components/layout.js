/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from './Header';
import { Global, css } from '@emotion/core';


const Layout = () => {

  return (
    <>
      <Header />
      <h2 css={css`
        color: red;
      `}>Master Page aqui</h2>

    </>
  )
}


export default Layout;
