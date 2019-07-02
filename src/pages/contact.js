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
        Portfolio Webiste: <a href="https://www.beardlysoft.com">BeardlySoft.com</a><br />
        Email: <a href="mailto:tstutzman@beardlysoft.com">tstutzman@beardlysoft.com</a>
      </p>
    </Layout>
  )
}

export default ContactPage
