<template>
    <v-btn
        class="mx-2"
        tile
        color="error"
        @click="clicked"
    >
        <v-icon dark>
            mdi-cancel
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'CancelButton',
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
</style>