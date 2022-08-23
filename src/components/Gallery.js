import React, { Component } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "bootstrap/dist/css/bootstrap.min.css"




const Gallery = () => {

  const data = useStaticQuery(graphql`
  query{
    allPhotos: allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "websiteImages"}}
  sort: { fields: base, order: ASC }
  ) {
    edges {
      node {
          id
          base
    childImageSharp  {
            gatsbyImageData(
             
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
  }
`)

  {/* <GatsbyImage image={node.childImageSharp.gatsbyImageData}  */ }
  // <img key={node.id} src={node.childImageSharp.gatsbyImageData} alt={node.base} />
  return (
    <>



      <GalleyBox>
        <h2 className="text-center display-4 p-2">
          Gallery
        </h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 900: 3 }} >

          <Masonry gutter={4}>
            {data.allPhotos.edges.map(({ node }) => (<GatsbyImage style={{ image: "100%" }} image={node.childImageSharp.gatsbyImageData} alt={node.base} />))}
          </Masonry>
        </ResponsiveMasonry>
      </GalleyBox>

    </>


  )


}
export default Gallery

const GalleyBox = styled(Container)`
  background: #f6f6f8;
`