import React from "react"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import ProductList from "../components/ProductList"

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
      <ProductList />
    </div>
  )
}

export default Home
