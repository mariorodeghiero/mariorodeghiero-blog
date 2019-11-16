import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--backgroundMenubar);
  /* border-right: 1px solid var(--borders); */
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  left: 0;
  width: 3.8rem;
  transition: background 0.5s;
  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const Logo = styled.h3`
  font-size: 1rem;
  margin-left: -0.8rem;
  color: var(--textMenubar);
  ${media.lessThan("large")`
    margin-left: 0px;
  `}
`

export const MenuBarLink = styled(Link)`
  display: block;
  text-decoration: none;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--textMenubar);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: color 0.5s ease;

  ${({ active }) =>
    active &&
    `
    color: var(--hover);
  `}

  &.light {
    color: #abaa56;
  }
  &:hover {
    color: var(--hover);
  }
  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--hover);
    }
  `}

  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
    margin-right: 6px;
  `}
`
