<template>
    <h1> Travel Detail </h1>
    <p> Travel id is {{ id }}</p>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute } from "vue-router";
export default {
    setup() {
        const route = useRoute()
        const id = ref(0)
        id.value = route.params.id

        return { id }
    },
}
</script>