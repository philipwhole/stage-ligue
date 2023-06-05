import { v4 } from 'uuid';
import { set } from 'vue';

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
const products = collection(db, "products");

const state = () => ({
  products: {},
  currentProductId: 1
});

const mutations = {
    PRODUCT_ADDING(state, tempProduct) {
        const id = tempProduct.id;
        set(state.products, id, { ...tempProduct, loading: true })
    },
    PRODUCT_ADDED(state, productIdFromDatabase) {
        const id = productIdFromDatabase;
        if (state.products[id]) {
            state.products[id].loading = false;
        }
    },
    PRODUCT_ADD_FAILED(state, product) {
        const id = product.id;
        delete state.products[id]
    },
    PRODUCT_LOADED(state, product) {
        const id = product.id;
        set(state.products, id, product)
    },
}

const actions = {
    async loadProducts({ commit }) {
        const querySnapshot = await getDocs(products);
        querySnapshot.forEach((doc) => {
          const product = { ...doc.data(), id: doc.id}
          commit('PRODUCT_LOADED', product)
        });
    },
    async addProduct({ commit }, product) {
        product.id = v4()
        commit('PRODUCT_ADDING', product)
        try {
            await setDoc(doc(db, "products", product.id), product);
            commit('PRODUCT_ADDED', product.id)
          } catch (e) {
            commit('PRODUCT_ADD_FAILED', product)
          }
    }
}

const getters = {
    products: state => state.products,
    currentProduct: state => state.products[state.currentProductId] || {}
}


export default {
  state,
  mutations,
  actions,
  getters
};
