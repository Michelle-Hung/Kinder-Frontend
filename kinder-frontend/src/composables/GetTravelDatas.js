import axios from "axios";
import { ref } from '@vue/runtime-core';

export function getTravelDatas() {
    const travelDatas = ref([])
        axios.get('https://localhost:5001/MyTravel/GetTravelData')
        .then((response) => {
        if (!response.data.success) {
            alert(response.data.errorMessage)
        }else{
            travelDatas.value = response.data.travelDetail
        }
        }).catch((error) => {
        alert('Unexpected Error: ', error.message)
        console.log(error)
        });
    return { travelDatas }
}