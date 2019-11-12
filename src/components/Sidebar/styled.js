import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  display: block;
  height: 100vh;
  padding: 2.5rem 0 0 3.25rem;
  text-align: center;
  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    height: 100px;
    background: var(--background);
    position: fixed;
  `}
`

export const Box = styled.div`
  position: fixed;
  max-width: 400px;
`
