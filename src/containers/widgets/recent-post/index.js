import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import WidgetBox, {WidgetTitle} from '../../../components/shared/widget-box'
import Blog from '../../../components/blog/layout-three'
import {RecentPostWrap, RecentPostItem} from './recent-post.stc'

const RecentPost = () => {
    const blogData = useStaticQuery(graphql `
        query RecentPostWidgetQuery {
            allMarkdownRemark(
                filter: {frontmatter: {format: {eq: "image"}}}, 
                sort: {order: DESC, fields: frontmatter___date}, limit: 4) {
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                        }
                        frontmatter {
                            date(formatString: "ll")
                            title
                            format
                            image {
                                childImageSharp {
                                    fixed(width: 78, height: 76, quality: 100) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `);
    const blogs = blogData.allMarkdownRemark.edges;
    return (
        <WidgetBox>
            <WidgetTitle>Recent Posts</WidgetTitle>
            <RecentPostWrap>
                {blogs.map(blog => (
                    <RecentPostItem key={blog.node.fields.slug}>
                        <Blog
                            content={{
                                ...blog.node.fields, 
                                ...blog.node.frontmatter
                            }}
                        />
                    </RecentPostItem>
                ))}
            </RecentPostWrap>
        </WidgetBox>
    )
}
 
export default RecentPost;
