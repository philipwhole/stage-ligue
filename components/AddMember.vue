<template> 
    <v-container>
        <v-row>
            <v-form>  
                <v-text-field  v-model="newMember.name" label="Name" :rules="nameRules" :maxlength="60" required></v-text-field>
                <v-text-field  v-model="newMember.email" label="Email" :rules="emailRules" required></v-text-field>
                <v-text-field  v-model="newMember.phone" label="Phone" :rules="phoneRules" required></v-text-field>
                <v-text-field  v-model="newMember.studentNumber" label="Student number" :maxlength="20" required></v-text-field>
                <v-text-field  v-model="newMember.programNumber" label="Program number" :maxlength="20" required></v-text-field>
                <v-text-field  v-model="newMember.institution" label="Institution" :maxlength="100"></v-text-field>
                <v-text-field  v-model="newMember.supervisorName" label="Supervisor name" :maxlength="60"></v-text-field>
                    
                <v-row justify="space-around"> 
                    <div>Internship start
                    <v-date-picker
                    v-model="newMember.startDate" :min="minDate " :max="newMember.endDate || maxDate " required
                    color="green lighten-1"
                    ></v-date-picker></div>

                    <div>Internship end 
                    <v-date-picker
                    v-model="newMember.endDate"
                    color="green lighten-1"
                    header-color="primary"  :min="newMember.startDate || minDate" :max="maxDate"
                    ></v-date-picker></div> 
                </v-row>

                <v-btn class="mr-4 success" @click="submit"> Add member </v-btn>
                <v-btn class="mr-4 error" @click="clear"> clear </v-btn>
                    
            </v-form>     
        </v-row>
    </v-container>
    
</template>

<script>
 
const generateNewMember = () => {
    return {
        imgSrc:'/img/developer.jpg',
        name: '',
        email: '',
        phone: '',
        studentNumber: '',
        programNumber: '',
        institution: '',
        supervisorName: '',
        startDate:'',
        endDate:''  
    }
}
export default {
    name: "AddMember", 
    data() {
        return {
            newMember: generateNewMember(), 
            maxDate: this.getMaxDate(),
            minDate: this.getMinDate(), 
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 50) || 'Name must be less than 10 characters',
            ],
            phoneRules: [
                v => !!v || 'Phone number is required',
                v => (v && v.length >= 10) || 'Phone number needs to be at least 10 digits.',
                v => /^\d+$/.test(v) || 'Phone number must contain only numbers.',
            ],
      
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        };
    },
    methods: {
        submit() { 
            this.$emit("created", this.newMember);
            // return { ...this.newMember }; // Return a copy of newMember object 
            return this.newMember ;
        },
        clear() { 
            this.newMember = generateNewMember(); 
        },

        getMaxDate() {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 2);
            return date.toISOString().substr(0, 10);
        },
        getMinDate() {
            const date = new Date(); 
            // date.setFullYear(date.toISOString().split('T')[0]);
            return date.toISOString().substr(0, 10);
        },
    } 
} 
</script>