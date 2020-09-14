import React from 'react';
import {
  Layout,
  SEO,
} from 'components';
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from 'styled-components';
import CartContext from 'context/CartContext';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

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
  const { updateLineItem } = React.useContext(CartContext);
  const handleSubmit = (variantId) => {
    updateLineItem({ variantId, quantity: parseInt(10) });
  };

  return (
    <Layout>
      <SEO description="SEO stuff" title="Homepage" />
      <StaticQuery
        query={GET_ALL_PRODUCTS}
        render={({ products }) => {
          return (
            <Grid>
              {products.edges.map(({ node: product }) => {
                return (
                  <div>
                    <a href={`/product/${product.handle}`}>
                      <Image fluid={product.images[0].localFile.childImageSharp.fluid} />
                      <p>{product.title}</p>
                    </a>
                    <button onClick={() => handleSubmit(product.variants[0].shopifyId)}>Add to cart</button>
                  </div>
                )
              })}
            </Grid>
          )
        }}
      />
    </Layout>
  );
};

export default IndexPage;
