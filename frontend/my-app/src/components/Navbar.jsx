import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}