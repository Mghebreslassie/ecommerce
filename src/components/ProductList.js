import React from "react"
import { popularProducts } from "./data"
import { Container } from "../styles/ProductListStyle"
import Product from "./Product"

function ProductList() {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </Container>
  )
}

export default ProductList
