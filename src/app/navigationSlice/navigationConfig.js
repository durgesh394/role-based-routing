import authRoles from "../auth/authRole";

export const navigationConfig = [
  {
    title: "Dashboard",
    url: "/dashboard",
    auth: authRoles.user,
  },

  {
    title: "Blog",
    url: "/blog",
    auth: authRoles.user,
  },
  {
    title: "About",
    url: "/about",
    auth: authRoles.onlyGuest,
  },

  {
    title: "Contact",
    url: "/contact",
    auth: authRoles.onlyGuest,
  },
  {
    title: "Sign In",
    url: "/sign-in",
    auth: authRoles.onlyGuest,
  },
];
