"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithEmailAndPassword } from "@/app/(public)/login/actions";
import FormErrors from "../common/FormErrors";

export default function LoginForm({ next }: { next?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);

    const result = await loginWithEmailAndPassword(email, password);

    if (result.success) {
      router.push(next || "/");
    } else {
      setErrors(result.errors);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <FormErrors errors={errors} />

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`btn-primary mt-4 ${
          !isValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Sign in
      </button>
    </form>
  );
}
