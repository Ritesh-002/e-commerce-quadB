import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/homePage"
import SignUp from "./Pages/signUp"
import SignIn from "./Pages/signIn"
import ProductList from "./Pages/Products/productList"
import Product from "./Pages/Products/product"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}

export default App
