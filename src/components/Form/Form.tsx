import { SubmitHandler, useForm } from "react-hook-form";
import { FormButton } from "../FormButton/FormButton";
import { Input, StyledForm } from "./styles";

type FormValues = {
  name: string;
  cost: string;
};
const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (buy) => {
    console.log(134);

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
