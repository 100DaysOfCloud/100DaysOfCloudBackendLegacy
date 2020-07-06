import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FiChevronRight } from "react-icons/fi"
import Button from "../../shared/button"
import { slugify } from "../../../utils/utilFunctions"
import BlogMeta, { Category } from "../../blog/blog-meta"
import ModalVideo from "../../shared/modal-video"
import { Thumbnail, Video, Quote, Linked, Gallery } from "../blog-media"
import {
  BlogWrapper,
  BlogInner,
  BlogMedia,
  BlogContent,
  BlogHeader,
  BlogTitle,
  BlogMetaWrap,
  BlogExcerpt,
  BlogFooter,
} from "./blog.stc"

const Blog = ({ content, ...restProps }) => {
  const {
    slug,
    dateSlug,
    category,
    date,
    format,
    title,
    image,
    excerpt,
    video_link,
    quote_text,
    quote_author,
    link,
    images,
  } = content
  const { btnStyle, categoryStyle, ...restStyles } = restProps
  let video_arr, video_id, video_channel
  if (video_link) {
    video_arr = video_link.split("=", -1)
    video_id = video_arr[1]
    video_channel = video_link.split(".")[1]
  }
  const [videoOpen, setVideoOpen] = useState(false)
  const modalVideoOpen = () => {
    setVideoOpen(true)
  }
  const modalVideoClose = () => {
    setVideoOpen(false)
  }

  return (
    <Fragment>
      <BlogWrapper {...restStyles}>
        <BlogInner>
          <BlogMedia>
            {(format === "image" || format === "standard") && (
              <Thumbnail path={`/${slug}`} image={image} title={title} />
            )}
            {format === "video" && (
              <Video
                onClick={modalVideoOpen}
                poster={image.childImageSharp.fluid}
                title={title}
              />
            )}
            {format === "quote" && (
              <Quote text={quote_text} author={quote_author} />
            )}
            {format === "link" && <Linked link={link} />}
            {format === "gallery" && <Gallery images={images} />}
          </BlogMedia>
          <BlogContent>
            <BlogHeader>
              {category && (
                <Category
                  {...categoryStyle}
                  slug={`/category/${slugify(category)}`}
                  text={category}
                />
              )}
              {title && (
                <BlogTitle>
                  <Link to={`/${slug}`}>{title}</Link>
                </BlogTitle>
              )}
              <BlogMetaWrap>
                {date && (
                  <BlogMeta>
                    <Link to={`/date/${slugify(dateSlug)}`}>{date}</Link>
                  </BlogMeta>
                )}
              </BlogMetaWrap>
            </BlogHeader>
            {excerpt && <BlogExcerpt>{excerpt}</BlogExcerpt>}
            <BlogFooter>
              <Button {...btnStyle} icon={<FiChevronRight />} to={`/${slug}`}>
                Read More
              </Button>
            </BlogFooter>
          </BlogContent>
        </BlogInner>
      </BlogWrapper>
      <ModalVideo
        channel={video_channel}
        videoId={video_id}
        isOpen={videoOpen}
        onClose={modalVideoClose}
      />
    </Fragment>
  )
}

Blog.propTypes = {
  btnStyle: PropTypes.object,
}

Blog.defaultProps = {
  btnStyle: {
    varient: "texted",
  },
  categoryStyle: {
    mb: "7px",
  },
}

export default Blog
