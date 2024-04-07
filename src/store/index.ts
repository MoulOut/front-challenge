import { IBook } from "@/interfaces/IBook";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { GET_BOOKS } from "./type-actions";
import httpClient from "@/http";
import { DEFINE_BOOKS, NOTIFY } from "./type-mutations";
import { INotification } from "@/interfaces/INotification";

export interface State {
  books: IBook[];
  notifications: INotification[];
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    notifications: [],
    books: [],
  },
  mutations: {
    [DEFINE_BOOKS](state, books: IBook[]) {
      state.books = books;
    },
    [NOTIFY](state, newNotification: INotification) {
      newNotification.id = new Date().getTime();
      state.notifications.push(newNotification);

      setTimeout(() => {
        state.notifications.pop();
      }, 300000);
    },
  },
  actions: {
    [GET_BOOKS]({ commit }) {
      return httpClient
        .get("/books")
        .then((response) => commit(DEFINE_BOOKS, response.data.books));
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(storeKey);
}
