import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Form, LabelLogin, Input, ButtonLogout } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        Email
        <Input type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        Password
        <Input type="password" name="password" />
      </LabelLogin>
      <ButtonLogout type="submit">Log In</ButtonLogout>
    </Form>
  );
};