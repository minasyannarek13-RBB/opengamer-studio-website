import { permanentRedirect } from "next/navigation";

export default function HiddenLocaleHomePage() {
  permanentRedirect("/");
}
