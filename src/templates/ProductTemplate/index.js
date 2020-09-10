/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  SEO,
} from 'components';

export default function ProductTemplate(props) {
  return (
    <Layout>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
    </Layout>
  );
}
