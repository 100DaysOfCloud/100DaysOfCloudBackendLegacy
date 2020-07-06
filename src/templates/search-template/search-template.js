import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import SEO from "../../components/seo"
import Layout from "../../containers/layout/layout"
import Header from "../../containers/layout/header"
import Footer from "../../containers/layout/footer"
import Text from "../../components/shared/text"
import Heading from "../../components/shared/heading"
import Blog from "../../components/blog/layout-two"
import SearchWidget from "../../containers/widgets/search"
import RecentPostWidget from "../../containers/widgets/recent-post"
import CategoryWidget from "../../containers/widgets/categories"
import {
  SectionWrap,
  PageHeader,
  BlogListWrap,
  SidebarWrap,
} from "./search-template.stc"

const SearchTemplate = ({ data, pageContext, location, ...restProps }) => {
  const blogs = data.allMarkdownRemark.edges || []
  const { headingCSS, textCSS, blogStyle } = restProps
  const { state } = location
  const query = state && state.query
  let filteredBlogs = []
  filteredBlogs =
    query &&
    blogs.filter(post => {
      const {
        title,
        quote_text,
        quote_author,
        category,
        tags,
        author: { name: authorName },
      } = post.node.frontmatter
      const { html } = post.node
      return (
        (title && title.toLowerCase().includes(query)) ||
        (quote_text && quote_text.toLowerCase().includes(query)) ||
        (quote_author && quote_author.toLowerCase().includes(query)) ||
        (html && html.toLowerCase().includes(query)) ||
        (authorName && authorName.toLowerCase().includes(query)) ||
        (category && category.toLowerCase().includes(query)) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
  return (
    <Layout>
      <SEO title={`Search For: ${query ? query : ""}`} />
      <Header />
      <div className="main-content">
        <SectionWrap>
          <Container>
            <Row>
              <Col xl={8}>
                <PageHeader>
                  <Text {...textCSS}>Search Results for "{query}"</Text>
                  <Heading {...headingCSS}>
                    Post found: {filteredBlogs ? filteredBlogs.length : 0}
                  </Heading>
                </PageHeader>
                <BlogListWrap>
                  {filteredBlogs &&
                    filteredBlogs.map(blog => (
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
                </BlogListWrap>
              </Col>
              <Col xl={4}>
                <SidebarWrap>
                  <SearchWidget />
                  <RecentPostWidget />
                  <CategoryWidget />
                </SidebarWrap>
              </Col>
            </Row>
          </Container>
        </SectionWrap>
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query BlogBySearchQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
            author {
              name
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
          html
        }
      }
    }
  }
`

SearchTemplate.defaultProps = {
  textCSS: {
    mb: "11px",
    mt: "-4px",
  },
  headingCSS: {
    as: "h4",
    color: "secondaryColor",
  },
  blogStyle: {
    mb: "30px",
  },
}

export default SearchTemplate
