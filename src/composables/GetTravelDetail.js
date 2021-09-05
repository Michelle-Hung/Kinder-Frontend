import axios from "axios";
import { ref } from '@vue/runtime-core';

export default function getTravelDetail(id) {
    const travelDetail = ref([])
    axios.get(`https://localhost:5001/api/MyTravel/detail/${id}`)
    .then((response) => {
        travelDetail.value = response.data.travelDetail
    }).catch((error) => {
    alert('Unexpected Error: ', error.message)
    console.log(error)
    });
    return { travelDetail }
}