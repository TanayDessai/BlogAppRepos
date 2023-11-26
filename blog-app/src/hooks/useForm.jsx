import { useForm as useReactHookForm } from "react-hook-form";

const useForm = (onSubmit, initialValues = {}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useReactHookForm({
    defaultValues: initialValues,
  });

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    reset,
  };
};

export default useForm;
