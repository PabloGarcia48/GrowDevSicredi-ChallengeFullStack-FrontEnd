import { useRouter } from "vue-router";

export function checkLogged(url: string) {
  const token = sessionStorage.getItem("token");
  const router = useRouter();

  if (token) {
    router.push(url);
  } else {
    router.push("/");
  }
}
