<template>
    <el-row>
        <el-col :span="4" v-for="travel in travelDatas" :key="travel.id" :offset="3" style="padding-bottom: 20px">
            <el-card :body-style="{ padding: '0px' }">
            <img :src="require('@/assets/images/Wuling.jpeg')" class="image">
            <div style="padding: 14px;">
                <span>{{ travel.attraction }}</span>
                <div class="bottom clearfix">
                <time class="time" format="YYYY/MM/DD">{{ travel.startDate }}</time>
                <el-button type="text" class="button">more</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import axios from "axios";
import { ref } from '@vue/runtime-core';
export default {
  name: 'TravelList',
  setup() {
    const travelDatas = ref()
    //const imagePath = require('@/assets/images/Wuling.jpeg')

    async function loadTravelDatas() {
      await axios.get('https://localhost:5001/MyTravel/GetTravelData')
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
    }

    loadTravelDatas()

    return { travelDatas }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>