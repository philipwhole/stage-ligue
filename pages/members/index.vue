<template> 
  <v-container fluid class="pt-16 backG"> 
    <div v-if="formshown"> 
      <MemberSection2 v-for="member in members" :key="member.id" :value="member" v-show="false" /> 
    </div>
    <ul>
        <li v-for="member in members" :key="member.id">
          <div>
          <router-link :to="`/members/${member.id}`">
            {{ member.name }} 
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
      <AddMember @created="memberCreated" /> 
    </div>
  </v-container> 
</template>

<script>
 
import { mapGetters, mapActions } from 'vuex'; 
import AddMember from '~/components/AddMember.vue';
import MemberSection2 from '~/components/MemberSection2.vue';
  
export default {
    name: "Members",
    components: {  AddMember, MemberSection2  },
   
    data() {
        return {
            formshown: false,
            display: "ADD MEMBER"  
        } 
    },
    computed: {
        ...mapGetters('members', [
            'members',
            'currentMember'
        ]), 
        regularComputedProperty () { 
            return true
        },
        
        givenMemberId() {
            return this.$route.params?.id;
        },    
        givenMember () {
            return this.members[this.givenMemberId] || {}
        }    
         
    }, 

    methods: {
        ...mapActions('members', [ 'loadMembers','addMember' ]),  
        affiche() {
          this.formshown = true
        },
        memberCreated(member) {
        this.formshown = false;  
        const id = member.id;   
        this.addMember(member);
        this.$router.push("/members/"+id);  
      }, 
    },  
  
    beforeRouteEnter(to, from, next) {
        next(vm => { 
         vm.loadMembers() ;  
        })
    }
}
</script>

<style scoped>
</style>