<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-img :src="member.imgSrc" max-height="240" max-width="240" />
            </v-col>
            <v-col v-show="!isEditing">
                <div class="text-h2">{{valueModel.name}}</div>
                <div class="text-h3">{{member.title}}</div>
                <div class="text-body-2">{{member.quote}}</div>
                <div class="text-subtitle-2">Strengths</div>
                <div class="text-body-1">{{member.strengths}}</div>
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <div class="text-body-1">{{member.likes}}</div>
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
            <v-col v-show="isEditing">
                <v-text-field v-model="valueModel.name" label="Name"></v-text-field>
                <div class="text-h3">{{member.title}}</div>
                <div class="text-body-2">{{member.quote}}</div>
                <div class="text-subtitle-2">Strengths</div>
                <div class="text-body-1">{{member.strengths}}</div>
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <div class="text-body-1">{{member.likes}}</div>
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
    name: 'MemberSection',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false
        }
    },
    computed: {
        member () {
            return this.value || {};
        }
    },
    methods: {
        startEdit() {
            this.isEditing = true;
        },
        save () {
            this.isEditing = false;
            this.emitValue()
        },
        cancel () {
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
</style>