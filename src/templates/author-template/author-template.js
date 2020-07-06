import React, { Fragment, useState } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { FiLoader } from "react-icons/fi"
import Img from "gatsby-image"
import SEO from "../../components/seo"
import Layout from "../../containers/layout/layout"
import Header from "../../containers/layout/header"
import Footer from "../../containers/layout/footer"
import Heading from "../../components/shared/heading"
import Text from "../../components/shared/text"
import Social from "../../components/socials/layout-two"
import Blog from "../../components/blog/layout-two"
import Button from "../../components/shared/button"
import {
  AuthorSection,
  AuthorImg,
  AuthorInfo,
  AuthorBlogs,
  LoadMoreBtnWrap,
} from "./author-template.stc"

const AuthorTemplate = ({ data, pageContext, location, ...restProps }) => {
  const author = data.authorsJson
  const {
    totalCount,
    edges: [...blogs],
  } = data.allMarkdownRemark
  const {
    authorCSS: { nameHeadingCSS, nameTextCSS, taglineCSS, bioCSS, socialCSS },
    blogSectionCSS: { titleCSS, blogCSS },
    loadMoreBtn,
  } = restProps

  const initialBlogs = [...blogs].splice(0, 8)
  const [hasMore, setHasMore] = useState(true)
  const [currentShow, setCurrentShow] = useState(8)
  const [nextToShow, setNextToShow] = useState([])
  const [loading, setLoading] = useState(false)
  const blogWillShow = () => {
    setLoading(true)
    setTimeout(() => {
      const nextBlogs = [...blogs].splice(currentShow, 2)
      setCurrentShow(prev => prev + 2)
      setNextToShow([...nextToShow, ...nextBlogs])
      setLoading(false)
    }, 3000)
  }
  const loadMoreHandler = () => {
    blogWillShow()
    hasMoreToLoad()
  }

  const hasMoreToLoad = () => {
    const blogsToLoad = blogs.length - currentShow
    setHasMore(blogsToLoad === 0 ? false : true)
  }
  return (
    <Layout>
      <SEO title={`Author: ${author.name}`} />
      <Header />
      <div className="main-content">
        <AuthorSection>
          <Container>
            <Row className="align-items-center">
              <Col sm={4} lg={{ size: 3, offset: 1 }}>
                <AuthorImg>
                  <Img
                    fluid={author.image.childImageSharp.fluid}
                    alt={author.name}
                  />
                </AuthorImg>
              </Col>
              <Col sm={8} lg={7}>
                <AuthorInfo>
                  {author.name && (
                    <Heading {...nameHeadingCSS}>
                      <Text {...nameTextCSS}>I'm </Text>
                      {author.name}
                    </Heading>
                  )}
                  {author.tagline && (
                    <Heading {...taglineCSS}>{author.tagline}</Heading>
                  )}
                  {author.bio && <Text {...bioCSS}>{author.bio}</Text>}
                  {author.social && (
                    <Social {...socialCSS} social={author.social} />
                  )}
                </AuthorInfo>
              </Col>
            </Row>
          </Container>
        </AuthorSection>
        <AuthorBlogs>
          <Container>
            <Row>
              <Col lg={12}>
                <Text>Total Post ({totalCount})</Text>
                <Heading {...titleCSS}>Articles By This Author</Heading>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Fragment>
                  {initialBlogs.map(blog => (
                    <Blog
                      {...blogCSS}
                      key={blog.node.fields.slug}
                      content={{
                        ...blog.node.fields,
                        ...blog.node.frontmatter,
                        excerpt: blog.node.excerpt,
                      }}
                    />
                  ))}
                  {nextToShow &&
                    nextToShow.map(blog => (
                      <Blog
                        {...blogCSS}
                        key={blog.node.fields.slug}
                        content={{
                          ...blog.node.fields,
                          ...blog.node.frontmatter,
                          excerpt: blog.node.excerpt,
                        }}
                      />
                    ))}
                </Fragment>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="text-center">
                {hasMore && (
                  <LoadMoreBtnWrap isLoading={loading}>
                    <Button
                      disabled={!hasMore}
                      onClick={loadMoreHandler}
                      {...loadMoreBtn}
                      icon={<FiLoader />}
                    >
                      Load More Article
                    </Button>
                  </LoadMoreBtnWrap>
                )}
                {!hasMore && <p>There is no more posts to show.</p>}
              </Col>
            </Row>
          </Container>
        </AuthorBlogs>
      </div>
      <Footer />
    </Layout>
  )
}

AuthorTemplate.defaultProps = {
  authorCSS: {
    nameHeadingCSS: {
      as: "h2",
      fontSize: ["28px", "32px", "36px"],
      fontWeight: 700,
      color: "#fff",
      lineHeight: 1.1,
    },
    nameTextCSS: {
      as: "span",
      fontWeight: 300,
    },
    taglineCSS: {
      as: "h5",
      color: "#fff",
      mb: ["15px", null, "24px"],
    },
    bioCSS: {
      fontSize: "16px",
      color: "#fff",
      fontWeight: 300,
      mb: ["23px", null, "33px"],
    },
    socialCSS: {
      color: "#fff",
      borderColor: "#fff",
    },
  },
  blogSectionCSS: {
    titleCSS: {
      as: "h4",
      color: "secondaryColor",
      fontWeight: 700,
      mb: "41px",
      mt: "10px",
    },
    blogCSS: {
      mb: "30px",
    },
  },
  loadMoreBtn: {
    btnsize: "large",
    varient: "contained",
    shape: "rounded",
    fontSize: ["12px", null, null, "13px"],
    letterSpacing: [0, null, null, "1px"],
    iconcss: {
      pl: "4px",
      width: "14px",
      height: "12px",
    },
  },
}

export const query = graphql`
  query BlogByAuthorQuery($author: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { authorId: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            dateSlug
            postID
          }
          frontmatter {
            category
            tags
            date(formatString: "LL")
            format
            title
            video_link
            quote_text
            quote_author
            link
            image {
              childImageSharp {
                fluid(
                  maxWidth: 510
                  maxHeight: 350
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
                  maxWidth: 510
                  maxHeight: 350
                  quality: 100
                  srcSetBreakpoints: 6
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          excerpt(pruneLength: 165, format: PLAIN, truncate: true)
        }
      }
    }
    authorsJson(fields: { authorId: { eq: $author } }) {
      name
      tagline
      bio
      social {
        facebook
        instagram
        linkedin
        twitter
        youtube
      }
      image {
        childImageSharp {
          fluid(maxWidth: 290, maxHeight: 290, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default AuthorTemplate
