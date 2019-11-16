import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  background: var(--background);
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 60%;
  grid-column-gap: 100px;
  ${media.lessThan("large")`
    display: flex;
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

  ${media.lessThan("large")`
    display: block;
    max-width: 95%;
    margin: 0 auto; */
    /* padding: 8rem 0 3rem 0; */
  `}
`
