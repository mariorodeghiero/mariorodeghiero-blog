import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.Box>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.Box>
  </S.SidebarWrapper>
)

export default Sidebar
