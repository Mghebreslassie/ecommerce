import React from "react"
import {
  Button,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
} from "../styles/SliderStyle"
import mountain from "../images/mountain.jpg"

function Slider({ item }) {
  return (
    <Slide bg={item.bg} key={item.id}>
      <ImageContainer>
        <Image src={mountain} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>Shop now</Button>
      </InfoContainer>
    </Slide>
  )
}

export default Slider
