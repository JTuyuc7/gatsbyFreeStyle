import React from "react"
import Layout from "../components/layout"


const IndexPage = (props) => {
  return(
    <Layout>
      {props.children}
    </Layout>
  )
}

export default IndexPage
