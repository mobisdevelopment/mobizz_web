import LoginForm from "@/components/login/LoginForm";

interface LoginPageProps {
  searchParams: Promise<{ next?: string }>;
}

export default async function Login({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next;

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto pb-8">
      <h1>Login</h1>

      <LoginForm next={next} />
    </div>
  );
}
