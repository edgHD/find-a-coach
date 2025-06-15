import { defineStore } from "pinia";
import router from "../router";

export const useRouterLinkStore = defineStore("router-link", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    routeTo(page) {
      router.push(`/${page}`);
    },
  },
});
