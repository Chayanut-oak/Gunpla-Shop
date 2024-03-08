import { jwtDecode } from "jwt-decode";
import { useUserStore } from "@/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  //   if (process.server) {
  //     return
  // }
  const userStore = useUserStore();
  const token = useCookie("token");
  //   console.log(userStore.isAdmin);
  //   const role = "customer";
  // console.log(userStore.user);
  const { role } = token.value ? jwtDecode(token.value) : "";
  if (role != "admin" && to.path == "/admin") {
    console.log("1", !userStore.isAdmin);
    console.log("2", to.path == "/admin");
    return abortNavigation();
  }
  if ((to.path == "/profile" || to.path == "/checkout" || to.path == "/orderHistory") && !token.value) {
    return navigateTo("/login");
  }
});
