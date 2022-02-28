import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { useStoryblok } from "../utils/storyblok";

const PageIndex = ({ data, location }) => {
  let story = data.story
  console.log("PAGE INDEX")

  story = useStoryblok(story)

  return (
    <Layout location={location}>
      <Page blok={story.content} />
    </Layout>
  )
}
export default PageIndex

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "en/" }) {
      name
      content
      full_slug
      uuid
      id
    }
  }
`