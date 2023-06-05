<template>
  <v-container fluid class="pt-16 backG"> 

    <p class="text-center titre display-1">
            {{ title }}
        </p> 
        <h3 class="text-center citation"  style="color: rgb(23,84,78)" >(   Let the experience starts from here ...)</h3><br>

        <div class="row">
            <div class="col">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="./img/joinus.jpg" height="200px" cover></v-img>

                    <v-card-title>
                        <h3 style="color: rgb(111,233,146);">Join Us</h3>
                    </v-card-title>

                    <v-card-subtitle>
                        <h4> internshipleague@laresolution.ca</h4>
                        <h4> 514-971-2196</h4>
                    </v-card-subtitle>




                </v-card>
            </div>
            <div class="col">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="./img/opening-web-616x308px.jpg" height="200px" cover></v-img>

                    <v-card-title>
                        <h3 style="color: rgb(111,233,146);">Opening Hours</h3>
                    </v-card-title>


                    <v-card-subtitle>
                        <h4> Monday to Friday</h4>
                        <h4> 10:00am – 03:00pm</h4>
                    </v-card-subtitle>




                </v-card>
            </div>
        </div>
        <br>




    <div v-if="formshown"> 
      <ContactFormList v-for="contactForm in contactForms" :key="contactForm.id" :value="contactForm" v-show="false" /> 
    </div>
    <ul>
        <li v-for="contactForm in contactForms" :key="contactForm.id">
          <div>
          <router-link :to="`/contact/${contactForm.id}`">
            {{ contactForm.name }} 
            <v-btn
            class="mx-2" color="info"  >  
            <v-icon dark>mdi-information</v-icon> 
            </v-btn>
          </router-link><br/>  
          </div> 
        </li>
      </ul>  
    <div style="display: flex; justify-content: center;">    
    <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" 
            @click="affiche"> 
            {{ display }}
    </v-btn>
    </div> 
    <br />
    <div v-if="formshown">
      <AddContactForm @created="contactFormCreated" /> 
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'  

import AddContactForm from '~/components/AddContactForm.vue'
import ContactFormList from '~/components/ContactFormList.vue'
    
export default {
  name: 'contactForms',
  components: { AddContactForm, ContactFormList   },
  data() {
    return { 
      formshown: false ,
      display: 'Contact US', 
    }
  },
  computed: {
    ...mapGetters('contactForms', ['contactForms','currentContactForm']),
    regularComputedProperty () {
            return true
        },
    givenContactFormId() {
        return this.$route.params?.id;
    },    
    givenContactForm () {
        return this.contactForms[this.givenContactFormId] || {}
    }    
  },
  methods: {
    ...mapActions('contactForms', ['loadContactForms','addContactForm']),
    affiche() {
      this.formshown = true
    },
    contactFormCreated(contactForm) { 
      this.formshown = false
      this.addContactForm(contactForm)  
       
      const id = contactForm.id;  
      this.$router.push("/contact/"+id);
    }, 
  },
  beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadContactForms()
        })
    } 
}
</script>





 
