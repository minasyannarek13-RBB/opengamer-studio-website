import { permanentRedirect } from "next/navigation";

export function redirectToLaunch(path: string): never {
  permanentRedirect(path);
}
