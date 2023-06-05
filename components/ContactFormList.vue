<template>
    <v-container>
        <v-row> 
            <v-col v-show="!isEditing">
                <div class="text-body-1" label="ID">{{contactForm.id}} </div>   
                 
                <div class="text-body-1">{{contactForm.name}} </div>  
                <div class="text-body-1">{{contactForm.email}} </div>
                <div class="text-body-1">{{contactForm.phoneNumber}}  </div>   
                <div class="text-body-1">{{contactForm.availability}}  </div> 
                <v-btn
                    class="mx-2"
                    fab
                    color="primary"
                    @click="startEdit"
                >
                    <v-icon dark>
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </v-col>
            <v-spacer></v-spacer> 
            <v-col v-show="isEditing"> 
                <div class="text-body-1" label="ID">{{contactForm.id}} </div>   
                
                <v-text-field v-model="valueModel.name">{{contactForm.name}}</v-text-field>
                <v-text-field v-model="valueModel.email">{{contactForm.email}}</v-text-field> 
                <v-text-field v-model="valueModel.phoneNumber">{{contactForm.phoneNumber}}</v-text-field>
                <v-text-field v-model="valueModel.availability">{{contactForm.availability}}</v-text-field> 
                
                <v-btn
                    class="mx-2"
                    fab
                    color="success"
                    @click="save"
                >
                    <v-icon dark>
                        mdi-content-save
                    </v-icon>
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
import vModelObjectMixin from '~/mixins/vModelObjectMixin';

export default {
    name: 'ContactFormList',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false,
            valueModel: {} // Define the valueModel object
        }
    },
    computed: {
        contactForm() {  
            return this.value || {};
        }
    },
    methods: {
        startEdit() {
            this.isEditing = true;
        },
        save() {
            this.isEditing = false;
            this.$emit('saveData',this.valueModel) 
        },
        cancel () {
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
</style>