import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
  ${media.lessThan("large")`
    display: none;
  `}

  ${media.greaterThan("huge")`
    margin: 6rem 0 0 6rem;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-column-gap: 20px;
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--hover);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
