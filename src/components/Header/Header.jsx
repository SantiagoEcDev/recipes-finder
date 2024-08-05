import "./Header.css"
import { Navbar } from "./Navbar/Navbar"
import { SearchBar } from "./SearchBar/SearchBar"
export const Header = () => {
  return (
    <header className="header">
        <Navbar/>
        <SearchBar/>
    </header>
  )
}
