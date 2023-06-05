<template>
    <v-container
        class="pa-0"
        fluid>
        <v-row no-gutters>
            <v-card
                class="mx-auto pa-8"
                max-width="80%"
                outlined>
                <v-card-text
                    class="ms-4 text-h2 text-center font-weight-bold">
                    {{ pageTitle }}
                </v-card-text>
                <v-card-text>
                    <v-row class="pa-8 mx-0">
                        <div class="ms-4 title text-center font-weight-bold">
                            {{ invitationText }}
                        </div>
                    </v-row>
                    <v-row no-gutters justify="center">
                        <v-btn 
                            elevation="2"
                            to="/members"
                            color="amber accent-3"
                            x-large
                            class="title red--text text-center font-weight-bold">
                            {{ textBtnRedirectToMembers }}
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row no-gutters  class="px-16 py-8">
            <v-img
            id="banner"
            :alt="altBanner"
            src="./img/hire-our-interns.jpg">
            </v-img>
        </v-row>
        <v-row no-gutters justify="center">
            <AddCustomer class="my-5" @created="customerCreated"/>
        </v-row>
        <v-row no-gutters>
            <v-img
                id="separateur"
                alt="separateur"
                src="./img/bcground-home-2.jpg"
                height="350px"
                background-position="center"
                background-repeat="no-repeat"
                background-size="cover">
            </v-img>
        </v-row>
   <v-row>
            <v-list>
                <v-list-item v-for="customer in customers" :key="customer.id" v-model="customer.data">
                    {{ customer.id }} 
                </v-list-item>
            </v-list>
        </v-row>  
    </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'
import AddCustomer from '../components/AddCustomer.vue'
export default {
    name: 'Hire',
    components: { AddCustomer },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadCustomers()
        })
    },
    data() {
        return {
            pageTitle: 'Hire Our Interns',
            altBanner: 'Banner Hire Our Interns',
            invitationText: 'Be confident in the person you wish to collaborate with to have the required skills, resources and support to contribute to the success of your enterprise. Use this button to browse our collaborators portfolio!',
            textBtnRedirectToMembers: 'Discover your potential hire!'
        }
    },
    computed: {
        ...mapGetters('customers', [
            'customers',
            'currentCustomer'
        ]),
        regularComputedProperty () {
            return true
        }
    },
    methods: {
        ...mapActions('customers', [
            'loadCustomers',
            'addCustomer'
        ]),
        customerCreated(newCustomer) {
            const newId = uuidv4()
            newCustomer.id = newId
            this.addCustomer(newCustomer)
        }
    }
}
</script>

<style scoped>
</style>