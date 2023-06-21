import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { StyledForm } from "./style";
import { useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { render } from "@testing-library/react";
import { loginService } from "../../services/login.services";

export const LoginForm = () => {
  const [keepLogged, setKeepLogged] = useState<boolean>(false);

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Entre um identificador válido!")
      .email("Entrei um email válido!")
      .lowercase(),
    password: yup.string().required("entre uma senha"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <StyledForm onSubmit={handleSubmit(data=>loginService(data, keepLogged))}>
      <Controller
        control={control}
        name="identifier"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <TextField
            error={error ? true : false}
            type="text"
            color="primary"
            variant="outlined"
            label="identificador"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <TextField
            error={error ? true : false}
            type="text"
            color="primary"
            variant="outlined"
            label="senha"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <div>
        <Checkbox onClick={()=>{setKeepLogged(!keepLogged)
        console.log(keepLogged)
        }}></Checkbox>
        <FormLabel>mantenha-me logado</FormLabel>
      </div>
      <Button type="submit" variant="contained">
        Login
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
