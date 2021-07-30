<template>
  <div>
      <div class="top__block">
        <ul>
          <li class="col-lg-3 " v-for="banner in getBanners" :key="banner.id" >
            <img :src="banner.src" alt="#">
            <input type="file" >
            <label><span> Url: </span><input type="text" :value="banner.url"></label>
            <label><span> Текст:</span> <input type="text" :value='banner.text'></label>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "BannerSlider",
  computed:{
    ...mapGetters([
      'getBanners'
    ]),
  }
};
</script>

<style lang ="scss" scoped>
ul{
  list-style-type: none ;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: inherit;
      margin: 30px;
    }
  }
}
button{
  width: inherit;
  margin-bottom: 30px;
}
label{
  width: inherit;
  display: flex;
  input{
    width: inherit;
  }
  span{
    width: 65px;
  }
}
</style>
