<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          elevation="2"
          style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;"
        >
          JOIN NOW
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Add new member</v-card-title>
        <AddMember ref="addMember"></AddMember>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="enregistrerMembre">
            Submit
          </v-btn>
          <v-btn color="primary" text @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddMember from './AddMember.vue';

export default {
  data() {
    return {
      dialog: false,
      currentMember: null // Initialize currentMember
    };
  },
  components: { AddMember },
  methods: {
    enregistrerMembre() {
      // Get the member information from the child component
      const currentMember = this.$refs.addMember.submit();
      if (currentMember) {
       
        // Save the member information or perform any other desired action
        this.currentMember = currentMember;
        // Emit an event to send the member information to the parent component
        this.$emit('member-saved', currentMember);
        this.dialog = false;
         const id = currentMember.id; 
        this.$router.push("/members/"+id);  
        
      }
    }
  }
};
</script>
