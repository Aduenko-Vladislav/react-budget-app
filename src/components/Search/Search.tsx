import { ChangeEvent } from "react";
import { StyledSearch } from "./style";

interface ISearch {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: String;
}

const Search = ({ handleSearch }: ISearch) => {
  return <StyledSearch placeholder="Search ..." onChange={handleSearch} />;
};

export default Search;
