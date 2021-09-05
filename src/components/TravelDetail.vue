<template>
    <h1> Travel Detail </h1>
    <p> Travel id is {{ id }}</p>
    <span> Travel detail:: {{travelDetail}} </span>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute } from "vue-router";
import getTrevelDetail from "../composables/GetTravelDetail";
export default {
    name: "TravelDetail",
    setup() {
        const route = useRoute()
        const id = ref(0)
        const { travelDetail } = getTrevelDetail(1);
        id.value = route.params.id

        return { id, travelDetail }
    },
}
</script>