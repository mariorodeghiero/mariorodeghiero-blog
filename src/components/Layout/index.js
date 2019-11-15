/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import GithubCorner from "react-github-corner"

import GlobalStyle from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <MenuBar />
      <S.Container>
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.Container>
      <GithubCorner
        href="https://github.com/mariorodeghiero"
        style={{ position: "fixed", top: 0, right: 0 }}
      />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
