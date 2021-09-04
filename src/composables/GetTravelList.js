import axios from "axios";
import { ref } from '@vue/runtime-core';

export default function getTravelList() {
    const travelList = ref([])
    axios.get('https://localhost:5001/api/MyTravel')
    .then((response) => {
        travelList.value = response.data.travelList
    }).catch((error) => {
    alert('Unexpected Error: ', error.message)
    console.log(error)
    });
    return { travelList }
}