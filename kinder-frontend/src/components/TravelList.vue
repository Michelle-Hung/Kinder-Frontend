<template>
    <el-row>
        <el-col :span="4" v-for="photo in 1" :key="photo" :offset="3" style="padding-bottom: 20px">

            <el-card :body-style="{ padding: '0px' }">
            <img :src="imagePath" class="image">
            <div style="padding: 14px;">
                <span>{{ attraction }}</span>
                <div class="bottom clearfix">
                <time class="time">{{ travelDate }}</time>
                <el-button type="text" class="button">more</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import axios from "axios";
export default {
  name: 'TravelList',
  props: {
    
  },
  data() {
    return {
      travelDatas: {
        success:Boolean,
        errorMessage: String,
        travelDetail: {
          id: Number,
          attraction: String,
          address: String,
          startDate: Date,
          endDate: Date,
          context: String,
          createdOn: Date,
          modifiedOn: Date
        }
      },
      //travelDetail: {},
      travelDate: new Date(),
      imagePath: require('@/assets/images/Wuling.jpeg'),
      attraction: '武嶺',

    };
  },
  mounted() {
    this.GetTravelData()
  },
  methods: {
    
    GetTravelData() {
      axios.get('https://localhost:5001/MyTravel/GetTravelData')
      .then((response) => {
        this.travelDatas = response.data
        console.log(this.travelDatas.success)
        console.log(this.travelDatas.travelDetail)
      }).catch((error) => {
        alert(error)
      });
    }
    
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