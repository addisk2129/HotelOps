import styled from "styled-components";
import LoginForm from "../features/authenthication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Header>
        <Logo />
        <Heading as="h2">Log in to your account</Heading>
        <p style={{ color: "var(--color-grey-500)", marginTop: "0.5rem" }}>
          Welcome back! Please enter your details
        </p>
      </Header>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;