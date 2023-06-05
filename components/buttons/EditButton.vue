<template>
    <v-btn
        class="mx-2"
        fab
        color="primary"
        @click="clicked"
    >
        <v-icon dark>
            mdi-pencil
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'EditButton',
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
</style>