import { IBook } from '@/interfaces/book';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';

export interface State {
    books: IBook[];
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        books: [
            {
                id: 1,
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                isbn: '9780061120084',
                price: 10.99,
                availableStock: 15,
            },
            {
                id: 2,
                title: '1984',
                author: 'George Orwell',
                isbn: '9780451524935',
                price: 9.99,
                availableStock: 10,
            },
            {
                id: 3,
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                isbn: '9780743273565',
                price: 12.99,
                availableStock: 8,
            },
        ],
    },
    mutations: {},
    actions: {},
});

export function useStore(): Store<State> {
    return vuexUseStore(storeKey);
}
