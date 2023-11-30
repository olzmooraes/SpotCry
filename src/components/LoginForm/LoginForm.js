import {
  FormContainer,
  LoginTitle,
  LogoWithText,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./Styles";
import logoLogin from "../../assets/logoHeader.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import SimpleText from "../SimpleText/SimpleText";
import { login } from "../../services/users";
import { Loading } from "../loading/Loading";
import { useState } from "react";

export const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const onSubmitLogin = (event) => {
    event.preventDefault();
    setLoading(true)
    login(form, navigate);
  };

  return (
    <FormContainer>
      <LogoWithText>
        <img src={logoLogin} alt="logo" />
      </LogoWithText>
      <StyledForm>
        <LoginTitle>Sinta a música, viva a emoção</LoginTitle>
        {
          !loading && (
            <>
              <div>
                <SimpleText text="Email:" />
                <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email} />
              </div>
              <div>
                <SimpleText text="Senha:" />
                <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password} />
              </div>
              <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin} />
            </>
          ) || <Loading />
        }
      </StyledForm>
    </FormContainer>
  );
}
