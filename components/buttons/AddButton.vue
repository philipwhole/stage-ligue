<template>
    <v-btn
        class="mx-2"
        fab
        color="primary"
        @click="clicked"
    >
        <v-icon dark>
            mdi-plus
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'AddButton',
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
</style>