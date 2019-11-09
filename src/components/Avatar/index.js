import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { AvatarWrapper } from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "perfil.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <AvatarWrapper fixed={avatarImage.childImageSharp.fixed} fadeIn />
}

export default Avatar
