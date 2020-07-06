import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../containers/layout/layout"
import Header from "../../containers/layout/header"
import Footer from "../../containers/layout/footer"
import HeroArea from "../../containers/home/hero-area"
import Siderbar from "../../containers/global/sidebar"
import SectionTitle from "../../components/shared/section-title"
import Blog from "../../components/blog/layout-two"
import Pagination from "../../components/pagination"
import { MainWrapper, RecenPostWrap, RecentPostContent } from "./blog-list.stc"

const BlogList = ({ data, pageContext, location, ...restProps }) => {
  const { sectionTitleStyle, blogStyle } = restProps
  const blogs = data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = pageContext
  return (
    <Layout>
      <SEO title={`Blog Page: ${currentPage}`} />
      <Header transparent />
      <div className="main-content">
        <HeroArea />
        <MainWrapper>
          <Container>
            <Row>
              <Col lg={8}>
                <RecenPostWrap>
                  <SectionTitle
                    {...sectionTitleStyle}
                    title="Most Recent Post"
                  />
                  <RecentPostContent>
                    {blogs.map(blog => (
                      <Blog
                        {...blogStyle}
                        key={blog.node.fields.slug}
                        content={{
                          ...blog.node.fields,
                          ...blog.node.frontmatter,
                          excerpt: blog.node.excerpt,
                        }}
                      />
                    ))}
                  </RecentPostContent>
                  <Pagination
                    rootPage="/"
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                  />
                </RecenPostWrap>
              </Col>
              <Col lg={4}>
                <Siderbar />
              </Col>
            </Row>
          </Container>
        </MainWrapper>
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            dateSlug
            postID
          }
          frontmatter {
            category
            date(formatString: "LL")
            format
            tags
            title
            video_link
            quote_text
            quote_author
            link
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
          }
          excerpt(pruneLength: 165, format: PLAIN, truncate: true)
        }
      }
    }
  }
`

BlogList.propTypes = {
  sectionTitleStyle: PropTypes.object,
  blogStyle: PropTypes.object,
}

BlogList.defaultProps = {
  sectionTitleStyle: {
    mb: "46px",
  },
  blogStyle: {
    mb: "50px",
  },
}

export default BlogList
