<template>
  <div class="wifilist">
      <mt-popup
        v-model="wifilistpopup"
        position="top">
            <div class="listitem" v-for="(item,index) in list" :key="index" @click="gowifinput(item)">
                <div class="box" v-if="item.signal==4">
                    <div class="rss4"></div>
                    <div class="rss3"></div>
                    <div class="rss2"></div>
                    <div class="rss1"></div>
                </div>
                <div class="box" v-else-if="item.signal==3">
                    <div class="rss4_1"></div>
                    <div class="rss3"></div>
                    <div class="rss2"></div>
                    <div class="rss1"></div>
                </div>
                <div class="box" v-else-if="item.signal==2">
                    <div class="rss4_1"></div>
                    <div class="rss3_1"></div>
                    <div class="rss2"></div>
                    <div class="rss1"></div>
                </div>
                <div class="box" v-else-if="item.signal==1">
                    <div class="rss4_1"></div>
                    <div class="rss3_1"></div>
                    <div class="rss2_1"></div>
                    <div class="rss1"></div>
                </div>
                <div class="box" v-else-if="item.signal==0">
                    <div class="rss4_1"></div>
                    <div class="rss3_1"></div>
                    <div class="rss2_1"></div>
                    <div class="rss1_1"></div>
                </div>
                <div class="name">{{item.name}}</div>
            </div>
       </mt-popup>
  </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'wifilist',
    props: [],
    data() {
        return {
            wifilistpopup: false,
            list: [
                { name: "JD-access", signal: 0 },
                { name: "JD", signal: 1 },
                { name: "JD_guest", signal: 2 },
                { name: "你打不过我吧", signal: 3 },
                { name: "でゃ営業え", signal: 4 }
            ]
        }
    },
    created() {

    },
    methods: {
        showlist() {
            this.wifilistpopup = true;
        },
        gowifinput(item){
            this.wifilistpopup = false;
            this.$emit('showifinfo',item);
        }
    },
    mounted() {

    }
}

</script>


<style lang="scss" scoped>
.wifilist {
    .mint-popup-top {
        width: 100%;
    }
    .listitem:active{
        background-color: #f0f0f0;
    }
    .listitem {
        position: relative;
        height:4rem;
        border-bottom: 1px solid $gray3;
        margin-left:1rem;
        >div{
            position: absolute;
        }
        .name{
            left:4rem;
            top:1.2rem;
            font-size:1.6rem;
        }
        .box {
            top:1.2rem;
            >div{
               position: absolute;
            }
            .rss4 {
                width:2.5rem;
                height:2.5rem;
                border:0.2rem solid $gray;
                border-radius:100%;
                border-color: $gray transparent transparent;
            }
            .rss4_1 {
                width:2.5rem;
                height:2.5rem;
                border:0.2rem solid $wifi;
                border-radius:100%;
                border-color: $wifi transparent transparent;
            }
            .rss3 {
                top: 0.4rem;
                left: 0.43rem;
                width: 1.7rem;
                height: 1.7rem;
                border: 0.2rem solid $gray;
                border-radius: 100%;
                border-color: $gray transparent transparent;
            }
            .rss3_1 {
                top: 0.4rem;
                left: 0.43rem;
                width: 1.7rem;
                height: 1.7rem;
                border: 0.2rem solid $wifi;
                border-radius: 100%;
                border-color: $wifi transparent transparent;
            }
            .rss2 {
                top: 0.8rem;
                left: 0.8rem;
                width: 0.92rem;
                height: 0.92rem;
                border: 0.2rem solid $gray;
                border-radius: 100%;
                border-color: $gray transparent transparent;
            }
            .rss2_1 {
                top: 0.8rem;
                left: 0.8rem;
                width: 0.92rem;
                height: 0.92rem;
                border: 0.2rem solid $wifi;
                border-radius: 100%;
                border-color: $wifi transparent transparent;
            }
            .rss1 {
                top: 1.15rem;
                left: 1.16rem;
                width: 0rem;
                height: 1rem;
                border: 0.3rem solid $gray;
                border-radius: 100%;
                border-color: $gray transparent transparent;
            }
            .rss1_1 {
                top: 1.15rem;
                left: 1.16rem;
                width: 0rem;
                height: 1rem;
                border: 0.3rem solid $wifi;
                border-radius: 100%;
                border-color: $wifi transparent transparent;
            }
        }


    }
}
</style>
