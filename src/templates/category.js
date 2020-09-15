/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  SEO,
} from 'components';
import Image from "gatsby-image";
import { Grid } from "../pages/index"

export const query = graphql`
  query categoryQuery($handle: String!) {
    allShopifyCollection {
      edges {
        node {
          handle
      } 
    }
  }
  shopifyCollection (handle: { eq: $handle }){
    products {
      ...ShopifyProductFields
    }
  }
}
`;

export default function CategoryTemplate(props) {
  const products = props.data.shopifyCollection.products;
  return (
    <Layout>
      <Grid>
        {products.map((product) => {
          return (
            <>
              <a href={`/product/${product.handle}`}>
                {/* <Image fluid={product.images[0].localFile.childImageSharp.fluid} /> */}
                <p>{product.title}</p>
              </a>
            </>
          )
        })}
      </Grid>
    </Layout>
  );
}

