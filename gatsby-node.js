const path = require(`path`)
const { slugify } = require('./src/utils/utilFunctions')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title);
        const date = node.frontmatter.date;
        const dateSplit = date.split(" ");
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        });
        createNodeField({
            node,
            name: 'postID',
            value: slugFromTitle + '-' + dateSplit[0]
        });
        createNodeField({
            node,
            name: "dateSlug",
            value: dateSplit[0]
        });
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
                node,
                name: "authorId",
                value: slugify(node.frontmatter.author)
            });
        }
    }
    if (node.internal.type === 'AuthorsJson') {
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const singleBlogPage = path.resolve("./src/templates/single-blog/single-blog.js")
    const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
    const tagPage = path.resolve("./src/templates/tag-template/tag-template.js");
    const categoryPage = path.resolve("./src/templates/category-template/category-template.js");
    const authorPage = path.resolve("./src/templates/author-template/author-template.js");
    const datePage = path.resolve("./src/templates/date-template/date-template.js");
    const searchPage = path.resolve("./src/templates/search-template/search-template.js");


    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        frontmatter {
                            tags
                            category
                            date(formatString: "LL")
                        }
                    }
                }
            }       
        }
    `);


    // Create Single Blog Page

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: singleBlogPage,
            context: {
                slug: node.fields.slug
            }
        })
    });

    // Create Blog List Page
    // Pagination

    const postsPerPage = 4;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;
        if (isFirstPage) return;
        createPage({
            path: `page/${currentPage}`,
            component: blogList,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                currentPage,
                numberOfPages
            }
        })
    })

    // Create Tags Page

    let tags = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })

    tags = _.uniq(tags)
    tags.forEach(tag => {
        createPage({
            path: `/tag/${slugify(tag)}`,
            component: tagPage,
            context: {
                tag
            }
        })
    })

    // Create Categories Page

    let categories = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category)
        }
    })

    categories = _.uniq(categories)
    categories.forEach(category => {
        createPage({
            path: `/category/${slugify(category)}`,
            component: categoryPage,
            context: {
                category
            }
        })
    })

    // Create Authors Page

    let authors = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.fields.authorId')) {
            authors = authors.concat(edge.node.fields.authorId)
        }
    })

    authors = _.uniq(authors)
    authors.forEach(author => {
        createPage({
            path: `/author/${author}`,
            component: authorPage,
            context: {
                author
            }
        })
    })

    // Create Date Page

    let dates = []
    let dateSlugs = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.date')) {
            dates = dates.concat(edge.node.frontmatter.date)
            dateSlugs = dateSlugs.concat(edge.node.fields.dateSlug)
        }
    })

    dates = _.uniq(dates)
    dateSlugs = _.uniq(dateSlugs)
    dateSlugs.forEach((dateSlug, i) => {
        createPage({
            path: `/date/${dateSlug}`,
            component: datePage,
            context: {
                date: dates[i],
                dateSlug
            }
        })
    })

    // Create Search Page
    createPage({
        path: '/search',
        component: searchPage,
    })
}