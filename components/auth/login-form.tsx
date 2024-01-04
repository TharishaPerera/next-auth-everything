import CardWrapper from "@/components/auth/card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/test/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
