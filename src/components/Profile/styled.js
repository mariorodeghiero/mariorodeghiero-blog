import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  min-width: 400px;
  min-height: 350px;
  flex-direction: column;
  padding: 24px;
  margin: 30px 0 0 0;

  ${media.lessThan("large")`
    min-width: 100%;
    margin: 0;
    padding: 0;
  `}

  ${media.greaterThan("huge")`
    margin: 6rem 0 0 6rem;
  `}
`

export const ProfileLink = styled.div`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 1.5rem auto 1.5rem;
  color: var(--highlight);

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 1.75rem 0 0 1.25rem;
    color: var(--textMenubar);

  `};
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1rem;
  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`
