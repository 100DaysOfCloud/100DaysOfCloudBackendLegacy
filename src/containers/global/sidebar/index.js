import React from "react"
import SearchWidget from "../../widgets/search"
import CategoriesWidget from "../../widgets/categories"
import { SidebarWrap } from "./sidebar.stc"

const Sidebar = () => {
  return (
    <SidebarWrap>
      <CategoriesWidget />
      <SearchWidget />
    </SidebarWrap>
  )
}

export default Sidebar
