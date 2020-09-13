import React from 'react';
import {
  Layout,
  SEO,
} from 'components';
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";

const GET_ALL_PRODUCTS = graphql`
  query ProductsListingQuery {
    products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          variants {
            shopifyId
            title
            price
            availableForSale
          }
          images {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => {

  return (
    <Layout>
      <SEO description="SEO stuff" title="Homepage" />
      <StaticQuery
        query={GET_ALL_PRODUCTS}
        render={({ products }) => {
          return (
            <>
              {products.edges.map(({ node: product }) => {
                return (
                  <a href={`/product/${product.handle}`}>
                    <Image fluid={product.images[0].localFile.childImageSharp.fluid} />
                    <h1>{product.title}</h1>
                  </a>
                )

              })}
            </>
          )
        }}
      />
    </Layout>
  );
};

export default IndexPage;
