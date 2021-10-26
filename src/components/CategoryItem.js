import React from "react"
import {
  Container,
  Title,
  Button,
  Info,
  Image,
} from "../styles/CategoryItemStyle"

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
