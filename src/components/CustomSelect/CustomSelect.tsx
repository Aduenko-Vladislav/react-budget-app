import Select from "react-select";
import { Currency } from "../../config/Currency";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { IOption } from "../../types/types";

const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContex();

  const handleSelect = (option: IOption | null) => {
    if (option) {
      setCurrency(option.value);
    }
  };

  const getDefaultoption = () => {
    return options.find(({ value }) => value === currency);
  };

  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={getDefaultoption()}
      onChange={handleSelect}
    />
  );
};
