import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  padding: 2rem;
  transition: color 0.5s ease-in-out;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 1rem;
  grid-template-areas:
    "info read"
    "info tag"
    "info date";
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  border: 1px solid var(--borders);
  margin: 0.875rem 0 0.875rem 0;
  border-radius: 3px;
  width: 100%;
`

export const PostItemTag = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  /* background: ${props =>
    props.background ? props.background : "var(--highlight)"}; */
  border-radius: 3px;
  color: var(--texts);
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  text-transform: lowercase;
  transition: color 0.5s ease-in-out;
  grid-area: tag;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${PostItemLink}:hover & {
    color: var(--highlight);
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: info;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.75rem;
  line-height: 1.6rem;
  grid-area: date;
  display: grid;
  align-items: flex-end;
  justify-content: flex-end;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
  padding: 1.5rem 0 0 0;
`

export const Read = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
  padding: 0.4rem 0 1.2rem 0;
  grid-area: read;
  display: grid;
  justify-content: flex-end;
`
