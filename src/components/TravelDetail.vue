<template>
    <div v-for="detail in travelDetail" :key="detail.id">
        <h1> {{ detail.attraction }} </h1>
    
        <el-row :gutter="10">
            <el-col :xs="4" :sm="6" :md="6" :lg="3" :xl="2">
                <!-- <div class="grid-content bg-purple"></div> -->
            </el-col>
            <el-col :xs="16" :sm="12" :md="12" :lg="18" :xl="20">
                <!--<div class="grid-content bg-purple-light"></div>-->
                <span class="right"> Date:{{ dateFormat(detail.startDate) }} </span>
                <br/>
                <p class="word-break"> {{ detail.context }} </p>
            </el-col>
            <el-col :xs="4" :sm="6" :md="6" :lg="3" :xl="2">
                <!-- <div class="grid-content bg-purple-light"></div> -->
            </el-col>
        </el-row> 
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute } from "vue-router";
import getTrevelDetail from "../composables/GetTravelDetail";
import dateFormat from "../composables/DateFormat";
export default {
    name: "TravelDetail",
    setup() {
        const route = useRoute()
        const { travelDetail } = getTrevelDetail(route.params.id);

        return { travelDetail, dateFormat }
    },
}
</script>
<style>
@import url("//unpkg.com/element-plus/dist/index.css");
.el-col {
    border-radius: 4px;
}
  .bg-purple-dark {
    background: #99a9bf;
}
  .bg-purple {
    background: #d3dce6;
}
  .bg-purple-light {
    background: #e5e9f2;
}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.right{
    float: right;
}
.word-break{
    word-wrap:break-word;
}
</style>