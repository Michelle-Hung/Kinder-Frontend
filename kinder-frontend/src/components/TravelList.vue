<template>
  <el-row>
    <el-col
      :span="4"
      v-for="travel in travelDatas"
      :key="travel.id"
      :offset="3"
      style="padding-bottom: 20px"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img :src="require('@/assets/images/Wuling.jpeg')" class="image" />
        <div style="padding: 14px">
          <span>{{ travel.attraction }}</span>
          <div class="bottom clearfix">
            <time class="time" format="YYYY/MM/DD">{{ travel.startDate }}</time>
            <el-button type="text" class="button" @click="GoToTravelDetailPage(travel.id)">more</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";
import { getTravelDatas } from '../composables/GetTravelDatas'
export default {
  name: 'TravelList',
  setup() {
    //const imagePath = require('@/assets/images/Wuling.jpeg')
    
    const { travelDatas } = getTravelDatas();
    const router = useRouter();

    function GoToTravelDetailPage(acctractionId) {
      router.push({ path: `/travelDetail/${acctractionId}` })
      //travelDatas.value.filter((travelData) => travelData.id == acctractionId)
    }

    
    return { travelDatas, GoToTravelDetailPage };
  },
};
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
  clear: both;
}

.el-input {
  width: 180px;
}
</style>