import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  display: block;
  height: 100vh;
  padding: 2.5rem 0 0 4rem;
  text-align: center;
  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    height: 100px;
    background: var(--background);
    position: fixed;
    z-index: 2000;
  `}
`

export const Box = styled.div`
  position: fixed;
  max-width: 400px;
`
