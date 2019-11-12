import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  background: var(--background);
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 0rem;
  }
  .ais-SearchBox {
    padding-top: 1rem;
  }
  .ais-Stats {
    color: var(--texts);
    text-align: right;
    padding: 0 4.75rem 0 0;
    ${media.lessThan("large")`
      text-align: right;
      padding: 0 1.25rem 0 0;
  `}
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.25rem;
    font-weight: 300;
    padding: 0.5rem;
    width: 85%;
    margin: 0 auto;
    outline: 0;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
