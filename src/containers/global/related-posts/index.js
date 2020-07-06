import React from 'react'
import {Row, Col} from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
import { getPostsFromQuery } from '../../../utils/utilFunctions'
import Blog from '../../../components/blog/layout-four'
import Heading from '../../../components/shared/heading'
import { SimilarArticlesFactory } from './SimilarArticlesFactory'
import {RelatedPostsWrap} from './related-posts.stc'

const RelatedPosts = (props) => {
    const relatedPosts = useStaticQuery(graphql `
        query SimilarArticles {    
            posts: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                            format
                            category 
                            video_link
                            quote_text
                            quote_author
                            link
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 520, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fluid(maxWidth: 520, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        excerpt(pruneLength: 80)
                    }
                }
            }
        }
    `)
    const posts = relatedPosts.posts;
    const { category, tags, currentArticleSlug, ...restProps } = props
    const articles = getPostsFromQuery(posts);
    const similarArticles = new SimilarArticlesFactory(articles, currentArticleSlug)
    .setMaxArticles(2)
    .setCategory(category)
    .setTags(tags)
    .getArticles()
    const {headingCSS, blogCSS} = restProps;

    return (
        <RelatedPostsWrap>
            <Row>
                <Col>
                    <Heading {...headingCSS}>Related Posts</Heading>
                </Col>
            </Row>
            <Row>
                {similarArticles.map((data, i) => (
                    <Col md={6} key={`related-${i}`}>
                        <Blog
                            {...blogCSS}
                            content={{
                                ...data.article
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </RelatedPostsWrap>
    )
}

RelatedPosts.defaultProps = {
    headingCSS: {
        as: 'h3',
        fontSize: '16px',
        fontWeight: 600,
        mb: '31px'
    },
    blogCSS: {
        mb: '45px'
    }
}

export default RelatedPosts