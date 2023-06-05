<template>
    <v-btn
        class="mx-2"
        tile
        color="success"
        @click="clicked"
    >
        <v-icon dark>
            mdi-content-save
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'SaveButton',
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
</style>