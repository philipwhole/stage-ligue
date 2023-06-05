<template>
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
        <template #activator="{ on, attrs }">
            <v-btn
            elevation="2"
            color="amber accent-3"
            x-large
            class="title red--text text-center font-weight-bold"
            v-bind="attrs"
            v-on="on"
            >
            Register to see contact info
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="text-h5">Customer Profile</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-form ref="form">
                    <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                        v-model="newCustomer.firstName"
                        :rules="firstNameRules"
                        label="First name*"
                        hint="max length 60"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                        v-model="newCustomer.lastName"
                        :rules="lastNameRules"
                        label="Last name*"
                        hint="max length 60"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                        v-model="newCustomer.companyName"
                        :rules="companyNameRules"
                        label="Company name*"
                        hint="max length 100"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                        v-model="newCustomer.roleInCompany"
                        :rules="roleRules"
                        label="Role in company"
                        hint="max length 60"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                        v-model="newCustomer.companyNumber"
                        :rules="companyNumberRules"
                        label="Company number"
                        hint="max length 20"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="newCustomer.email"
                        :rules="emailRules"
                        label="Email*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="4"
                        sm="6"
                    >
                        <v-select
                        v-model="newCustomer.countryPhoneCode"
                        :items="['+1', '+7', '+33', '+86']"
                        :rules="countryPhoneCodeRules"
                        label="Country phone code*"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="8" sm="6">
                        <v-text-field
                        v-model="newCustomer.phoneNumber"
                        :rules="phoneRules"
                        label="Phone number*"
                        type="phone"
                        required
                        ></v-text-field>
                    </v-col>
                    </v-row>
                </v-form>
            </v-container>
            <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <SaveButton @click="saveCustomer"></SaveButton>
            <CancelButton @click="clear"></CancelButton> 
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import CancelButton from './buttons/CancelButton.vue'
import SaveButton from './buttons/SaveButton.vue'

const generateNewCustomer = () => {
    return {
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        roleInCompany: '',
        companyNumber: '',
        countryPhoneCode: '',
        phoneNumber: '',
        validated: false
    }
}
export default {
    name: "AddCustomer",
    components: { CancelButton, SaveButton },
    data() {
        return {
            dialog: false,
            newCustomer: generateNewCustomer(),
        firstNameRules: [
        v => !!v || 'First Name is required',
        v => (v && v.length <= 60) || 'First Name must be less then 60 characters'
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
        v => (v && v.length <= 60) || 'Last Name must be less then 60 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      countryPhoneCodeRules: [
        v => !!v || 'Country phone code is required',
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => /^[0-9]{10}$/.test(v) || 'Phone must be a 10-digit number'
      ],
      companyNameRules: [
        v => !!v || 'Company Name is required',
        v => (v && v.length <= 100) || 'Company Name must be less then 100 characters'
      ],
      roleRules: [
        v => !!v || 'Role is required',
        v => (v && v.length <= 60) || 'Role must be less then 60 characters'
      ],
      companyNumberRules: [
        v => !!v || 'Company Number is required',
        v => (v && v.length <= 20) || 'Company Number must be less then 20 characters'
      ]
        };
    },
    methods: {
        saveCustomer() {
            if (this.$refs.form.validate()) {
                this.$emit("created", this.newCustomer);
                this.newCustomer = generateNewCustomer();
                this.dialog = false;
            }
        },
        clear() {
            this.$emit("cancel")
            this.newCustomer = generateNewCustomer();
            this.dialog = false;
        }
    }
}
</script>