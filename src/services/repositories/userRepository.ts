import { User } from "@/types/user";

class UserRepository {
  async getCurrentUser(): Promise<User | null> {
    const user: User = {
      id: "123",
      email: "johndoe@example.com",
      roles: ["ROLE_USER", "ROLE_ADMIN"],
    };

    return user;
  }
}

export const userRepository = new UserRepository();
