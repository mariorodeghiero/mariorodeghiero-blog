import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: 30% auto;
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
  justify-content: end;
  width: 100%;
  /* body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  */
  ${media.lessThan("large")`
    padding: 5rem 0 3rem 0;
  `}
`
