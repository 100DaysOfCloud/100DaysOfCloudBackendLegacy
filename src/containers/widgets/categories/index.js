import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { flatDeep, slugify } from "../../../utils/utilFunctions"
import WidgetBox, { WidgetTitle } from "../../../components/shared/widget-box"
import Anchor from "../../../components/shared/anchor"
import { CategroiesWrap, CategroiesItem } from "./categories.stc"

const Categroies = () => {
  const categoryData = useStaticQuery(graphql`
    query CategoryWidgetQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)
  const categories = categoryData.allMarkdownRemark.edges
  let catArr = []
  for (let i = 0; i < categories.length; i++) {
    catArr.push(categories[i].node.frontmatter.category)
  }
  const catFlat = flatDeep(catArr)
  var catObj = catFlat.reduce((obj, b) => {
    obj[b] = ++obj[b] || 1
    return obj
  }, {})

  let categroyItem = []
  for (const prop in catObj) {
    categroyItem.push(
      <CategroiesItem key={`${prop}-${catObj[prop]}`}>
        <Anchor path={`/category/${slugify(prop)}`}>
          <span className="text">{prop}</span>
          <span className="number">{catObj[prop]}</span>
        </Anchor>
      </CategroiesItem>
    )
  }

  return (
    <WidgetBox style={{ marginTop: "10px" }}>
      <WidgetTitle>Categories</WidgetTitle>
      <CategroiesWrap>{categroyItem}</CategroiesWrap>
    </WidgetBox>
  )
}

export default Categroies
