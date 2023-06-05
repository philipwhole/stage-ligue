<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img :src="member.imgSrc" max-height="240" max-width="240" />
            </v-col> 
            <v-col v-show="!isEditing">
                <div class="text-body-1" label="ID">{{member.id}} </div>   
                 
                <div class="text-body-1">{{member.name}} </div>  
                <div class="text-body-1">{{member.email}} </div>
                <div class="text-body-1">{{member.phone}}  </div>   
                <div class="text-body-1">{{member.studentNumber}} </div>
                <div class="text-body-1">{{member.programNumber}} </div>
                <div class="text-body-1">{{member.institution}} </div>
                <div class="text-body-1">{{member.supervisorName}} </div>
                <div class="text-body-1">{{member.startDate}} </div>
                <div class="text-body-1">{{member.endDate}} </div>
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
                <div class="text-body-1" label="ID">{{member.id}} </div>   
                <v-text-field v-model="valueModel.imgSrc">{{member.imgSrc}}</v-text-field>
                <v-text-field v-model="valueModel.name">{{member.name}}</v-text-field>
                <v-text-field v-model="valueModel.email">{{member.email}}</v-text-field> 
                <v-text-field v-model="valueModel.phone">{{member.phone}}</v-text-field>
                <v-text-field v-model="valueModel.studentNumber">{{member.studentNumber}}</v-text-field>
                <v-text-field v-model="valueModel.programNumber">{{member.programNumber}}</v-text-field> 
                <v-text-field v-model="valueModel.institution">{{member.institution}}</v-text-field> 
                <v-text-field v-model="valueModel.supervisorName">{{member.supervisorName}}</v-text-field>
                <v-text-field v-model="valueModel.startDate">{{member.startDate}}</v-text-field> 
                <v-text-field v-model="valueModel.endDate">{{member.endDate}}</v-text-field> 
  
                
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
    name: 'MemberSection2',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false,
            valueModel: {} // Define the valueModel object
        }
    },
    computed: {
        member() {  
            return this.value || {};
        }
    },
    methods: {
        startEdit() {
            this.isEditing = true;
        },
        save () {
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