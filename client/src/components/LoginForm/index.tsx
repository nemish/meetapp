import * as React from "react";
import { css } from "emotion";
import { BigButton } from "@ui/Button";
import * as Typo from "@ui/Typography";
import { Form, Text } from "informed";
import { lifecycle, compose, mapProps } from "recompose";
import { validatePassword, emailValidation } from "@src/utils/validators";

import styled from "react-emotion";

const FormContainer = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormComponent = styled(Form)`
  display: block;
  margin: 8px;
  width: 264px;
`;

const FormTitle = styled(Typo.Title3)`
  font-size: 18px;
`;

const inputStyles = css`
  font-family: "Lato", sans-serif;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 16px;
  border-radius: 6px;
  border: 1px solid #eee;
  margin: 8px 0 16px;
  &:focus {
    outline: 0;
  }
`;

const Input = (props: any) => {
  const { name, ...rest } = props;
  return <Text className={inputStyles} field={props.name} {...rest} />;
};

const Error = styled(Typo.Text)`
  color: orangered;
  font-weight: 700;
`;

interface ILoginForm {
  email: string;
  password: string;
}

interface IForm {
  formState: {
    errors: ILoginForm;
    invalid: boolean;
    pristine: boolean;
  };
  formApi: {
    reset: () => void;
  };
}

const LoginForm = () => {
  return (
    <FormContainer>
      <FormTitle>Sign in or Register</FormTitle>
      <FormComponent>
        {({ formState, formApi }: IForm) => {
          return <FormFields formState={formState} formApi={formApi} />;
        }}
      </FormComponent>
    </FormContainer>
  );
};

const FormFields = ({ formState }: any) => {
  const { errors, invalid, pristine } = formState;
  return (
    <React.Fragment>
      {errors.email && <Error>{errors.email}</Error>}
      <Input
        placeholder="Email"
        type="text"
        name="email"
        validateOnBlur
        validate={emailValidation}
      />
      {errors.password && <Error>{errors.password}</Error>}
      <Input
        placeholder="Password"
        type="password"
        name="password"
        validateOnChange
        validateOnBlur
        validate={validatePassword}
      />
      <Input
        placeholder="Confirm password"
        type="password"
        name="confirmPassword"
      />
      <BigButton disabled={invalid || pristine} full type="submit">
        Sign in
      </BigButton>
    </React.Fragment>
  );
};

// const enhance = compose(
//   mapProps((props: IForm) => {
//     return {
//       formApi: props.formApi
//     };
//   }),
//   lifecycle({
//     componentWillUnmount() {
//       // this.props.formApi.reset();
//     }
//   })
// );

export default LoginForm;
