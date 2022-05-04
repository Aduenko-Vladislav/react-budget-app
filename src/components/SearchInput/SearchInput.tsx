import { ChangeEvent } from "react";
import { SearchInputStyle } from "./style";

interface ISearchInput {
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: String;
}

const SearchInput = ({ handleSearchInput, searchValue }: ISearchInput) => {
  return (
    <SearchInputStyle
      placeholder="Search ..."
      onChange={handleSearchInput}
    />
  );
};

export default SearchInput;
