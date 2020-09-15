const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `);

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `product/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/product.js'),
    });
  });

  const collections = await graphql(`
    query {
      allShopifyCollection {
        edges {
          node {
            id
            title
            handle
            shopifyId
          }
        }
      }
    }
  `)

  collections.data.allShopifyCollection.edges.forEach(
    ({ node: { shopifyId, handle } }) => {
      createPage({
        path: `/${handle}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          shopifyId,
          handle
        },
      })
    }
  )

};
