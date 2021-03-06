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
    "info tag"
    "info date";

  body#grid & {
    background-color: var(--background-post);
  }
  &:hover {
    color: var(--hover);
  }

  ${media.lessThan("large")`
    grid-template-columns: 2fr auto auto;
    grid-row-gap: 20px;
    grid-template-areas:
    "info info info"
    "info info info"
    "date tag read";
  `}
`

export const PostItemWrapper = styled.section`
  border: 1px solid var(--borders);
  margin: 0.875rem 0 0.875rem 0;
  border-radius: 3px;
  width: 100%;
  max-height: 160px;
  ${media.lessThan("large")`
      max-height: 220px;
  `}
`

export const PostItemTag = styled.div`
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
  margin-top: 0.4rem;
  span {
    line-height: 20px;
    padding-right: 3px;
  }

  ${PostItemLink}:hover & {
    color: var(--hover);
  }

  ${media.lessThan("large")`
    justify-content: flex-start;
    font-size: 0.875rem;
    margin-top: 5px;
  `}
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
  margin-top: 0.5rem;
  ${media.lessThan("large")`
    font-size: 0.7rem;
    justify-content: flex-start;
    margin-top: 0;
  `}
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

export const PostItemDescription = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2rem;
  display: grid;
  align-content: flex-end;
  min-height: 53px;
`

export const Read = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
  padding: 0.6rem 0 0.5rem 0;
  grid-area: read;
  display: grid;
  justify-content: flex-end;

  ${media.lessThan("large")`
    padding: 0;
    line-height: 1.6rem;
    justify-content: flex-start;
    font-size: 0.875rem;
  `}
`
