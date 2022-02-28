import React from "react"
import DynamicComponent from "./DynamicComponent"
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid} />)
  return (
    <div {...sbEditable(blok)}>
      {content}
    </div>
  )
}

export default Page
