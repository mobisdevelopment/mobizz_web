import LoginForm from "@/components/login/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto pb-8">
      <h1>Login</h1>

      <LoginForm />
    </div>
  );
}
