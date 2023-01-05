import { LoginForm } from 'components/LoginForm/LoginForm';

import { Logins,Img,H1 } from './Login.styled';

export default function Login() {
  return (
    <Logins>
      <title>Login</title>
      <H1>Welcome Back</H1>
      <Img src="https://img.logoipsum.com/245.svg" />
      <LoginForm />
    </Logins>
  );
}
