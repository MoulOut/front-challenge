import { IBook } from "@/interfaces/book";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { GET_BOOK, GET_BOOKS } from "./type-actions";
import httpClient from "@/http";
import { DEFINE_BOOK, DEFINE_BOOKS } from "./type-mutations";

export interface State {
  books: IBook[];
  book: IBook;
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    books: [],
    book: {
      id: 0,
      author: "",
      title: "",
      availableStock: 0,
      isbn: "",
      price: 0,
    },
  },
  mutations: {
    [DEFINE_BOOKS](state, books: IBook[]) {
      state.books = books;
    },
    [DEFINE_BOOK](state, book: IBook) {
      state.book = book;
    },
  },
  actions: {
    [GET_BOOKS]({ commit }) {
      return httpClient
        .get("/books")
        .then((response) => commit(DEFINE_BOOKS, response.data.books));
    },
    [GET_BOOK]({ commit }, bookId: number) {
      return httpClient.get(`/books/${bookId}`).then((response) => {
        return commit(DEFINE_BOOK, response.data.book);
      });
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(storeKey);
}
