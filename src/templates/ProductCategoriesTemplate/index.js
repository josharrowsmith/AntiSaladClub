/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  SEO,
} from 'components';

// callback to fragment
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductCategoriesTemplate(props) {
  return (
    <Layout>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
    </Layout>
  );
}
