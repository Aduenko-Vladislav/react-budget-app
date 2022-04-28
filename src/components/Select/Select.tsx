import Select from "react-select";
import { IOption } from "../../type/types";

const options: IOption[] = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBR", label: "GBR" },
];

export const CustomSelect = () => {
  return <Select options={options} isMulti={false} defaultValue={options[0]} />;
};
