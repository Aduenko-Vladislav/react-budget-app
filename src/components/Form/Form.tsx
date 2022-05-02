import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { FormButton } from "../FormButton/FormButton";
import { Input, StyledForm } from "./styles";
import { v4 as uuidv4 } from "uuid";

type FormValues = {
  name: string;
  cost: string;
};
export const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { expenses, setExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = (item) => {
    setExpense([
      ...expenses,
      { id: uuidv4(), name: item.name, cost: +item.cost },
    ]);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="enter name ..."
        {...register("name", {
          required: true,
          maxLength: 15,
          pattern: {
            value: /[A-Za-zА-Яа-яЁё]/,
            message: "Please enter only a letters",
          },
        })}
      />
      <Input
        placeholder="enter cost ..."
        {...register("cost", {
          required: true,
          maxLength: 5,
          pattern: {
            value: /^[ 0-9]+$/,
            message: "Please enter only a numbers",
          },
        })}
      />
      <FormButton>Done</FormButton>
    </StyledForm>
  );
};

export default Form;
