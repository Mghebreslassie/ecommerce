import React from "react"
import {
  Container,
  Language,
  Left,
  SearchContainer,
  Wrapper,
  Center,
  Right,
  Input,
  MenuItem,
  Logo,
} from "../styles/NavbarStyle"
import { Search, ShoppingCart } from "@material-ui/icons"
import { Badge } from "@material-ui/core"

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>mos def.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
