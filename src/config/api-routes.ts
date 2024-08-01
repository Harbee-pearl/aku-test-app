export const baseUrl = "https://api.github.com";

export const apiRoutes = {
  auth: {
    login: "/auth/login",
    forgotPassword: "/auth/password/forgot",
    signIn: "/signin",
    resetPassword: "/auth/password/reset",
    verify: "/auth/verify",
  },

  search_users: (query: string) => `/search/users?q=${query}`,
  search_organization: (query: string) => `/search/users?q=${query}+type:org`,
};
