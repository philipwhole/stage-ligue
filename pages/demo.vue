<template>
  <v-container>
    <AddMember   v-show="false"/> 
    <AddCustomer   /> 
    
  </v-container>
</template>

<script>
 
import AddMember from '~/components/AddMember.vue';
import AddCustomer from '~/components/AddCustomer.vue';

export default {
  name: 'demo',
  components: {  AddMember, AddCustomer   },
}
</script>
