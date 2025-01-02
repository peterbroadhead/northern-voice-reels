/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const fullTitle = title ? `${title} | Northern Voice Reels` : defaultTitle

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author || ``} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="keywords" content="voice reels, voice over, Manchester, BBC producer, commercial voice over, documentary narration, audiobook narration, voice acting, voice production, professional voice reels" />
      <meta name="geo.region" content="GB-MAN" />
      <meta name="geo.placename" content="Manchester" />
      <meta name="author" content="Chris Wallis - Former BBC Senior Producer" />
      {children}
    </>
  )
}

export default Seo
