import { LoginForm } from 'components/LoginForm/LoginForm';

import { Logins,Img } from './Login.styled';

export default function Login() {
  return (
    <Logins>
      <title>Login</title>
      <Img src="https://img.logoipsum.com/245.svg" />
      <LoginForm />
    </Logins>
  );
}
