import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import SEO from "../../components/seo"
import Layout from "../../containers/layout/layout"
import Header from "../../containers/layout/header"
import Footer from "../../containers/layout/footer"
import BlogMeta, { Category, Tags } from "../../components/blog/blog-meta"
import {
  Thumbnail,
  Video,
  Quote,
  Linked,
  Gallery,
} from "../../components/blog/blog-media"
import ModalVideo from "../../components/shared/modal-video"
import { slugify } from "../../utils/utilFunctions"
import SearchWidget from "../../containers/widgets/search"
import RecentPostWidget from "../../containers/widgets/recent-post"
import CategoryWidget from "../../containers/widgets/categories"
import AuthorWidget from "../../containers/widgets/author"
import RelatedPosts from "../../containers/global/related-posts"
import {
  SinglePostArea,
  SinglePostWrap,
  PostMedia,
  PostHeader,
  PostTitle,
  PostMeta,
  PostFooter,
  PostTags,
  SidebarWrap,
} from "./single-blog.stc"

const SingleBlog = ({ data, pageContext, location, ...restProps }) => {
  const { dateSlug, slug, authorId } = data.markdownRemark.fields
  const {
    category,
    date,
    format,
    title,
    image,
    video_link,
    quote_text,
    quote_author,
    link,
    images,
    author,
    tags,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
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
    <Layout>
      <SEO title={title} />
      <Header />
      <div className="main-content">
        <SinglePostArea {...restProps}>
          <Container>
            <Row>
              <Col lg={8}>
                <SinglePostWrap>
                  <PostMedia>
                    {(format === "image" || format === "standard") && (
                      <Thumbnail
                        path={`/${slug}`}
                        image={image}
                        title={title}
                      />
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
                  </PostMedia>
                  <PostHeader>
                    {category && (
                      <Category
                        slug={`/category/${slugify(category)}`}
                        text={category}
                      />
                    )}
                    {title && <PostTitle>{title}</PostTitle>}
                    <PostMeta>
                      {date && (
                        <BlogMeta>
                          <Link to={`/date/${slugify(dateSlug)}`}>{date}</Link>
                        </BlogMeta>
                      )}
                      {author && (
                        <BlogMeta>
                          <Link to={`/author/${slugify(authorId)}`}>
                            {author.name}
                          </Link>
                        </BlogMeta>
                      )}
                    </PostMeta>
                  </PostHeader>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <PostFooter>
                    <PostTags>
                      <Tags tags={tags} />
                    </PostTags>
                  </PostFooter>
                </SinglePostWrap>
                <RelatedPosts
                  category={category}
                  tags={tags}
                  currentArticleSlug={slug}
                />
              </Col>
              <Col lg={4}>
                <SidebarWrap>
                  <AuthorWidget content={author} />
                  <CategoryWidget />
                  <RecentPostWidget />
                  <SearchWidget />
                </SidebarWrap>
              </Col>
            </Row>
          </Container>
        </SinglePostArea>
      </div>
      <Footer />
      <ModalVideo
        channel={video_channel}
        videoId={video_id}
        isOpen={videoOpen}
        onClose={modalVideoClose}
      />
    </Layout>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        dateSlug
        authorId
        slug
        postID
      }
      frontmatter {
        title
        category
        tags
        date(formatString: "LL")
        format
        video_link
        quote_text
        quote_author
        link
        image {
          childImageSharp {
            fluid(
              maxWidth: 839
              maxHeight: 455
              quality: 100
              srcSetBreakpoints: 6
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
        images {
          childImageSharp {
            fluid(
              maxWidth: 839
              maxHeight: 455
              quality: 100
              srcSetBreakpoints: 6
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
        author {
          name
          tagline
          image {
            childImageSharp {
              fixed(width: 180, height: 180, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          social {
            facebook
            instagram
            linkedin
            twitter
            youtube
          }
        }
      }
      html
    }
  }
`

export default SingleBlog
