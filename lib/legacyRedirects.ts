import { redirect } from "next/navigation";

export function redirectToLaunch(path: string): never {
  redirect(path);
}

