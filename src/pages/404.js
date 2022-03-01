import React from "react"
import Layout from "../components/Layout"

export default function Page404({ location }) {
  return (
    <Layout location={location}>
      <h1>Not found</h1>
    </Layout>
  )
}