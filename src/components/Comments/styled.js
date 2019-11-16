import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  max-width: 100%;
  padding: 3rem 6.4rem 3rem;

  ${media.lessThan("large")`
    padding: 3rem 1.4rem 3rem;
    max-width: 90%;
  `}
  iframe[src*='ads-iframe'] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--postColor) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`
