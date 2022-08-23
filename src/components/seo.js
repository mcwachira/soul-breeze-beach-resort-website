import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, article }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        Keywords,
        twitterUsername,
    } = site.siteMetadata
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || Keywords,
        url: `${siteUrl}${pathname}`,
    }
    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.keywords && <meta content={seo.keywords} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

        </Helmet>
    )
}
export default SEO
SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    article: PropTypes.bool,
}
SEO.defaultProps = {
    title: null,
    description: null,
    article: false,
}
const query = graphql`
  query SEO {
        site {

    siteMetadata {
        author
              defaultDescription: description
       Keywords:keywords
         siteUrl: url
        defaultTitle:title
        twitterUsername
    }
}
  }
  `
