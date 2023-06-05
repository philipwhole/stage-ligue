import { v4 } from 'uuid';
import { set } from 'vue';

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
const customers = collection(db, "customers");

const state = () => ({
  customers: {},
  currentCustomerId: 1
});

const mutations = {
    CUSTOMER_ADDING(state, tempCustomer) {
        const id = tempCustomer.id;
        set(state.customers, id, { ...tempCustomer, loading: true })
    },
    CUSTOMER_ADDED(state, customerIdFromDatabase) {
        const id = customerIdFromDatabase;
        if (state.customers[id]) {
            state.customers[id].loading = false;
        }
    },
    CUSTOMER_ADD_FAILED(state, customer) {
        const id = customer.id;
        delete state.customers[id]
    },
    CUSTOMER_LOADED(state, customer) {
        const id = customer.id;
        set(state.customers, id, customer)
    },
}

const actions = {
    async loadCustomers({ commit }) {
        const querySnapshot = await getDocs(customers);
        querySnapshot.forEach((doc) => {
          const customer = { ...doc.data(), id: doc.id}
          commit('CUSTOMER_LOADED', customer)
        });
    },
    async addCustomer({ commit }, customer) {
        customer.id = v4()
        commit('CUSTOMER_ADDING', customer)
        try {
            await setDoc(doc(db, "customers", customer.id), customer);
            commit('CUSTOMER_ADDED', customer.id)
          } catch (e) {
            commit('CUSTOMER_ADD_FAILED', customer)
          }
    }
}

const getters = {
    customers: state => state.customers,
    currentCustomer: state => state.customers[state.currentCustomerId] || {}
}


export default {
  state,
  mutations,
  actions,
  getters
};
