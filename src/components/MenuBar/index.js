import React, { useState, useEffect } from "react"

import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb } from "styled-icons/remix-line/Lightbulb"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Home">
          <S.MenuBarItem>
            <S.Logo>{"<MR/>"}</S.Logo>
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Search">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Select Theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Lightbulb />
        </S.MenuBarItem>
        {/* <S.MenuBarItem title="Top">
          <Arrow />
        </S.MenuBarItem> */}
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
