import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItem = ({
  title,
  background,
  slug,
  category,
  date,
  description,
  timeToRead,
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>
          {description} - {timeToRead} min
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
}

export default PostItem
