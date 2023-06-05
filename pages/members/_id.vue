<template>
    <v-container>
          
        <router-link to="../members">Back to list</router-link>
        <MemberSection2 :value="givenMember" @saveData="enregistrement"></MemberSection2>  
        <DeleteButton @click="remove(givenMember)" ></DeleteButton>  
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex'
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from '~/store/firebase.js';

import MemberSection2 from '~/components/MemberSection2.vue';
import DeleteButton from '~/components/buttons/DeleteButton.vue';  
export default {
    
    data() {
        return {};
    },
    components: {MemberSection2, DeleteButton },
    computed: {
        ...mapGetters('members',[
            'members'
        ]),
        givenMemberId() {
            return this.$route.params?.id;
        },
        givenMember () {
            return this.members[this.givenMemberId] || {}
        }
    },
    methods: {
        async enregistrement(member) {   
            // ... update member code
            const memberId = member.id; 
            try {
                await updateDoc(doc(db, "members", memberId), member);
                
      // Add more fields to update as needed
                // update operation successful 
                alert("Update operation successful"); 
            } catch (error) {
                // Handle the error if the update operation fails
                console.error("Error updating member:", error);
            }
            this.$router.push("/members/");
          },

        async remove(givenMember) {
            const memberId = givenMember.id;
        
            try {
            await deleteDoc(doc(db, "members", memberId));
            // Delete operation successful 
            alert("Delete operation successful");
            this.$router.push("/");
            } catch (error) {
            // Handle the error if the delete operation fails
            console.error("Error deleting member:", error);
            }
        }
    }
}
</script>

<style scoped>
</style>