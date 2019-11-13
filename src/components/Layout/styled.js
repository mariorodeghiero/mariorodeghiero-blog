import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section``
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 60%;
  grid-column-gap: 100px;
  ${media.lessThan("large")`
    grid-template-columns: 100%;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  transition: background, color 0.5s;
  display: grid;
  justify-content: center;
  width: 100%;
  padding-top: 3rem;
  /* body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  } */

  ${media.lessThan("large")`
    padding: 8rem 0 3rem 0;
  `}
`
