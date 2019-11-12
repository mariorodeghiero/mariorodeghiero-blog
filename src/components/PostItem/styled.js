import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: color 0.5s ease-in-out;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
`

export const PostItemTag = styled.div`
  align-items: flex-end;
  /* background: ${props =>
    props.background ? props.background : "var(--highlight)"}; */
  border-radius: 3px;
  color: var(--texts);
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  justify-content: flex-end;
  margin-top: 30px;
  height: 40px;
  text-transform: lowercase;
  transition: color 0.5s ease-in-out;

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
  margin-left: 1.5rem;
  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
