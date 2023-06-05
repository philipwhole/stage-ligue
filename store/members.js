import { v4 } from 'uuid';
import { set } from 'vue';

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from './firebase';
const members = collection(db, "members");

const state = () => ({
  members: {},
  currentMemberId: 1
});

const mutations = {
    MEMBER_ADDING(state, tempMember) {
        const id = tempMember.id;
        set(state.members, id, { ...tempMember, loading: true })
    },
    MEMBER_ADDED(state, memberIdFromDatabase) {
        const id = memberIdFromDatabase;
        if (state.members[id]) {
            state.members[id].loading = false;
        }
    },
    MEMBER_ADD_FAILED(state, member) {
        const id = member.id;
        delete state.members[id]
    },
    MEMBER_LOADED(state, member) {
        const id = member.id;
        set(state.members, id, member)
    },
}

const actions = {
    async loadMembers({ commit }) {
        const querySnapshot = await getDocs(members);
        querySnapshot.forEach((doc) => {
          const member = { ...doc.data(), id: doc.id}
          commit('MEMBER_LOADED', member)
        });
    },
    async addMember({ commit }, member) {
        member.id = v4()
        commit('MEMBER_ADDING', member)
        try {
            await setDoc(doc(db, "members", member.id), member);
            commit('MEMBER_ADDED', member.id)
          } catch (e) {
            commit('MEMBER_ADD_FAILED', member)
          }
    }
}

const getters = {
    members: state => state.members,
    currentMember: state => state.members[state.currentMemberId] || {}
}


export default {
  state,
  mutations,
  actions,
  getters
};
