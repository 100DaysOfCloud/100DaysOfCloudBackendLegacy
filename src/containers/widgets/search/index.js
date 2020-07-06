import React, { useState } from "react"
import { navigate } from "gatsby"
import WidgetBox from "../../../components/shared/widget-box"
import Form, { Input, Label } from "../../../components/shared/form"
import { FormWrapper } from "./search.stc"

const SearchWidget = ({ widgetStyle, inputStyle }) => {
  const [value, setValue] = useState("")
  const onChangeHandler = event => setValue(event.target.value)
  const onSubmitHandler = event => {
    event.preventDefault()
    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w ]/g, "")
    // .replace(/\&+/g, '-')

    navigate(`/search?query=${query}`, { state: { query } })
  }
  return (
    <WidgetBox {...widgetStyle}>
      <FormWrapper>
        <Form onSubmit={onSubmitHandler}>
          <Label htmlFor="search">Search</Label>
          <Input
            {...inputStyle}
            onChange={onChangeHandler}
            type="text"
            name="search"
            id="search"
            placeholder="Search Here..."
          />
        </Form>
      </FormWrapper>
    </WidgetBox>
  )
}

SearchWidget.defaultProps = {
  widgetStyle: {
    skin: "primary",
  },
  inputStyle: {
    pr: "50px",
  },
}

export default SearchWidget
