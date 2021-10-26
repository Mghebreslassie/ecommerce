import React, { useState } from "react"
import Slider from "./Slider"
import { Container, Arrow, Wrapper } from "../styles/SliderStyle"
import { sliderItems } from "./data"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"

function Carousel() {
  const [move, setMove] = useState(0)

  const handleClick = (direction) => {
    if (direction === "left") {
      if (move === 0) {
        setMove(-200)
      } else {
        setMove(move + 100)
      }
    } else {
      if (move === -200) {
        setMove(0)
      } else {
        setMove(move - 100)
      }
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper test={move}>
        {sliderItems.map((item) => {
          return <Slider item={item} key={item.id} />
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Carousel
