<template>
    <v-btn
        class="mx-2"
        tile
        color="error"
        @click="clicked"
    >
        <v-icon dark>
            mdi-delete
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'RemoveButton',
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
</style>