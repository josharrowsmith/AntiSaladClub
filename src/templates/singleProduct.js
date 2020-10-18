/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  Button,
  SEO,
  ImageGallery,
  AddCart
} from 'components';
import { Grid, Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function SingleProducts(props) {
  const { getProductById } = React.useContext(CartContext);
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const { search, origin, pathname } = useLocation();

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(result.variants[0])
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
  ]);


  return (
    <Layout>
      <SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
      <Button onClick={() => navigate(-1)}>Back to products</Button>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {!!selectedVariant && (
            <>
              <Price>${selectedVariant.price}</Price>
              <AddCart
                available={selectedVariant.available}
                variantId={selectedVariant.id}
              />
            </>
          )}
        </div>

        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
      </Grid>
    </Layout>
  )
}
