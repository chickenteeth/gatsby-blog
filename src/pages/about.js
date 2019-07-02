import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <p>I am currently an IT Systems Engineer working towards making a switch
        to the developer side of IT.  Once I get settled into that career I want to
        focus on programming and building some robots, which is why I made this blog.
        I plan to track progress and post updates and other articles here.
      </p>
    </Layout>
  )
}

export default AboutPage
