import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'
import image from '../components/images/robo-bg.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Welcome to the Beardly Robot!</h1>
      <p>
        Join my in my quest to learn about building and programming robots!
        <img src={image} />
      </p>
    </Layout>
  )
}

export default IndexPage
