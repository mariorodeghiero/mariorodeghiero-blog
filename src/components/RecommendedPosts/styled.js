import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
  max-width: 100%;
  min-width: 300px;
  margin: 0 auto;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  color: var(--highlight);
  display: flex;
  padding: 1.75rem 3rem;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
  `}
  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
