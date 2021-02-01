import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import ReactIcon from "../../images/react.svg"
import GatsbyIcon from "../../images/gatsby-icon.png"
import GraphqlIcon from "../../images/graphql.png"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.Box>
      <Profile />
      {/* <MenuLinks /> commented until create the about page*/}
      <SocialLinks />

      {/* <S.BuiltWith>
        <S.Icon src={ReactIcon} alt="ReactJS" />
        <S.Icon src={GatsbyIcon} alt="ReactJS" />
        <S.Icon src={GraphqlIcon} alt="ReactJS" />
      </S.BuiltWith> */}
    </S.Box>
  </S.SidebarWrapper>
)

export default Sidebar
