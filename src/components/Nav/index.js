import React from "react"
import { graphql, Link } from "gatsby"
import ProductContext from 'context/ProductContext';

export function Nav() {
  const { collections } = React.useContext(ProductContext)

  return (
    <nav>
      {collections.map(edge => {
        console.log(edge)
        return (
          <Link
            key={edge.title}
            style={{ color: "#000", marginLeft: 15 }}
            to={`/${edge.handle}`}
          >
            {edge.title}
          </Link>
        )
      })}
    </nav>
  )
}

