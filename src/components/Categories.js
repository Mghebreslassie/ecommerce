import React from "react"
import CategoryItem from "./CategoryItem"
import { Container } from "../styles/CategoriesStyle"
import { categories } from "./data"

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories
