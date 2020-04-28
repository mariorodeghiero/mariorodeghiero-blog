import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  margin-left: 45%;
  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  .active {
    visibility: hidden;
}
`

export const MenuLinksLink = styled(Link)`
  text-decoration: none;
  transition: color 0.5s;
  color: var(--highlight);
  &:hover {
    color: var(--highlight);
  }
`
