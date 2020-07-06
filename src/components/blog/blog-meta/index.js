import React from "react"
import { Category } from "./category"
import { Tags } from "./tags"
import { MetaWrap } from "./blog-meta.stc"

const BlogMeta = ({ children, ...restProps }) => {
  return <MetaWrap {...restProps}>{children}</MetaWrap>
}

export { Category, Tags }

export default BlogMeta
