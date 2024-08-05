import "./SearchBar.css";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <span className="searchbar-input">
        <IoIosSearch />
        <input type="text" placeholder="Search Recipes" />
      </span>
    </div>
  );
};
