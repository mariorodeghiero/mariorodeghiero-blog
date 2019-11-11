import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  ${media.lessThan("large")`
    height: 3.75rem !important;
    width: 3.75rem !important;
  `}
`
