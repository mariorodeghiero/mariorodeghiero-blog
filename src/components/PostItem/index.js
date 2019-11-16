import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import moment from "moment"

const PostItem = ({
  title,
  background,
  slug,
  category,
  date,
  description,
  timeToRead,
}) => (
  <S.PostItemWrapper>
    <S.PostItemLink to={slug}>
      <S.PostItemInfo>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription lang="en">
          ❝ {description} ❞
        </S.PostItemDescription>
      </S.PostItemInfo>
      <S.Read>📖 {timeToRead} min read</S.Read>
      <S.PostItemTag background={background}>
        <span>🏷 </span> {category}
      </S.PostItemTag>
      <S.PostItemDate>
        {moment(date)
          .local()
          .format(`MMMM DD, YYYY`)}
      </S.PostItemDate>
    </S.PostItemLink>
  </S.PostItemWrapper>
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
