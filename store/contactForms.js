import { v4 } from 'uuid';
import { set } from 'vue';

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
const contactForms = collection(db, "contactForms");

const state = () => ({
  contactForms: {},
  currentContactFormId: 1
});

const mutations = {
    CONTACTFORM_ADDING(state, tempContactForm) {
        const id = tempContactForm.id;
        set(state.contactForms, id, { ...tempContactForm, loading: true })
    },
    CONTACTFORM_ADDED(state, contactFormIdFromDatabase) {
        const id = contactFormIdFromDatabase;
        if (state.contactForms[id]) {
            state.contactForms[id].loading = false;
        }
    },
    CONTACTFORM_ADD_FAILED(state, contactForm) {
        const id = contactForm.id;
        delete state.contactForms[id]
    },
    CONTACTFORM_LOADED(state, contactForm) {
        const id = contactForm.id;
        set(state.contactForms, id, contactForm)
    },
}

const actions = {
    async loadContactForms({ commit }) {
        const querySnapshot = await getDocs(contactForms);
        querySnapshot.forEach((doc) => {
          const contactForm = { ...doc.data(), id: doc.id}
          commit('CONTACTFORM_LOADED', contactForm)
        });
    },
    async addContactForm({ commit }, contactForm) {
        contactForm.id = v4()
        commit('CONTACTFORM_ADDING', contactForm)
        try {
            await setDoc(doc(db, "contactForms", contactForm.id), contactForm);
            commit('CONTACTFORM_ADDED', contactForm.id)
          } catch (e) {
            commit('CONTACTFORM_ADD_FAILED', contactForm)
          }
    }
}

const getters = {
    contactForms: state => state.contactForms,
    currentContactForm: state => state.contactForms[state.currentContactFormId] || {}
}


export default {
  state,
  mutations,
  actions,
  getters
};
