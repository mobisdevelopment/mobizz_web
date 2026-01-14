import { cookies } from "next/headers";

export class TokenService {
  static async storeAuthData(
    token: string,
    userIdentifier: string,
    roles: string
  ): Promise<void> {
    const cookieStore = await cookies();

    const authTokenExpires = new Date();
    authTokenExpires.setHours(authTokenExpires.getHours() + 4);

    cookieStore.set("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      expires: authTokenExpires,
    });

    cookieStore.set("userIdentifier", userIdentifier, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      expires: authTokenExpires,
    });

    cookieStore.set("userRoles", roles, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      expires: authTokenExpires,
    });
  }

  static async clear(): Promise<void> {
    const cookieStore = await cookies();

    cookieStore.delete("authToken");
    cookieStore.delete("userIdentifier");
    cookieStore.delete("userRoles");
  }
}
