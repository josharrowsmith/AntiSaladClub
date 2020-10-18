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

  const data = await graphql(`
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
  `).then(result => {
    if (result.errors) throw result.errors;

    const productNodes = result.data.allShopifyProduct.edges;
    
    return productNodes.map( edge =>{
      return {
        ...edge.node
      }
    })
  })

  // Pagination with filtering  
  // const productsPerPage = 10
  // const numPages = Math.ceil(data.length / productsPerPage);

  // Array.from({length:numPages}).forEach((_, i)=>{
  //   createPage({
  //     path: i === 0 ? '/products' : `/products/${i + 1}`,
  //     component: path.resolve('./src/templates/products.js'),
  //     context: {
  //       data,
  //       limit:productsPerPage,
  //       skip: i * productsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     }
  //   });
  // })
  
  data.forEach( node => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/singleProduct.js'),
    });
  });
};
