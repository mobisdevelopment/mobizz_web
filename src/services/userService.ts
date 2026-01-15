import { cache } from "react";
import { TokenService } from "./tokenService";
import { User } from "@/types/user";
import { userRepository } from "./repositories/userRepository";

export interface UserMenuItem {
  path: string;
  name: string;
  icon?: string;
  children?: UserMenuItem[];
}

export class UserService {
  // Cached for the lifetime of the request - React will memoize this per request
  static getCurrentUser = cache(async (): Promise<User | null> => {
    const userId = await TokenService.getUserId();
    const isAuth = await TokenService.isAuthenticated();

    if (!userId || !isAuth) return null;

    try {
      const currentUser = await userRepository.getCurrentUser();

      return currentUser;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  });
}
