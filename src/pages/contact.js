import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Me" />
      <h1>Contact</h1>
      <p>
        867-5309 or tstutzman@beardlysoft.com{" "}
        <a href="https://twitter.com/chickenteeth86" target="_blank">
          Twitter me
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
