import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} with <a href="https://gatsbyjs.org" target="_blank">Gatsby JS</a></p>
    </footer>
  )
}

export default Footer
