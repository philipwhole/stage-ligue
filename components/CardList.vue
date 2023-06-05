<template>
    <v-card elevation="0" class="pa-8" light style="overflow-y:auto;height:96vh;">
        <slot></slot>
    </v-card>
</template>
<script>
export default {
    name: 'CardList'
}
</script>