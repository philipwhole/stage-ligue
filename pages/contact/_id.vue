<template>
    <v-container>  
        <router-link to="../contact">Back to list</router-link>
        <ContactFormList :value="givenContactForm" @saveData="enregistrement"></ContactFormList>  
        <DeleteButton @click="remove(givenContactForm)" ></DeleteButton>   
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex';
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from '~/store/firebase.js';

import ContactFormList from '~/components/ContactFormList.vue';
import DeleteButton from '~/components/buttons/DeleteButton.vue'; 
export default {
    
    data() {
        return {};
    },
    components: {ContactFormList, DeleteButton },
    computed: {
        ...mapGetters('contactForms',[
            'contactForms'
        ]),
        givenContactFormId() {
            return this.$route.params?.id;
        },
        givenContactForm () {
            return this.contactForms[this.givenContactFormId] || {}
        }
    },
 methods: {
    async enregistrement(contactForm) {  
            // ... update contactForm code
            const contactFormId = contactForm.id; 
            try {
                await updateDoc(doc(db, "contactForms", contactFormId), contactForm);
                
      // Add more fields to update as needed
                // update operation successful 
                alert("Update operation successful"); 
            } catch (error) {
                // Handle the error if the update operation fails
                console.error("Error updating contactform:", error);
            }
            this.$router.push("/contact/");
          },

    async remove(givenContactForm) {
        const contactFormId = givenContactForm.id;
    
        try {
        await deleteDoc(doc(db, "contactForms", contactFormId));
        // Delete operation successful 
        alert("Delete operation successful");
        this.$router.push("/");
        } catch (error) {
        // Handle the error if the delete operation fails
        console.error("Error deleting contactForm:", error);
        }
    }
}

}
</script>

 