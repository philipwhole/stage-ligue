<template>
    <v-container>
        <v-row> 
            <v-col v-show="!isEditing">
                <div class="text-body-1" label="ID">{{product.id}} </div>   
                 
                <div class="text-body-1">{{product.name}} </div>  
                <div class="text-body-1">{{product.price}} </div>
                <div class="text-body-1">{{product.description}}  </div>   
                 
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
                <div class="text-body-1" label="ID">{{product.id}} </div>   
                
                <v-text-field v-model="valueModel.name">{{product.name}}</v-text-field>
                <v-text-field v-model="valueModel.price">{{product.price}}</v-text-field> 
                <v-text-field v-model="valueModel.description">{{product.description}}</v-text-field>
                
                
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
    name: 'ProductList',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false,
            valueModel: {} // Define the valueModel object
        }
    },
    computed: {
        product() {  
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