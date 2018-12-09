<template>
  <div class="searchcity">
        <mt-search
        :autofocus="autofocus"
        v-model="value"
        :cancel-text="homelanguageset.cancelText"
        :placeholder="homelanguageset.searchText">
            <div  @click="gotohome(item)" style="text-align:left" v-for="(item,index) in querylist(result)" :key="index">
                <mt-cell :title="item.title"></mt-cell>
            </div>
        </mt-search>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import ChinaCityDatas from 'static/js/China_min.js'
import AmericaCityDatas from 'static/js/America_min.js'
import JapanCityDatas from 'static/js/Japan_min.js'
import Languageset from 'static/js/Languageset.js'

export default {
    name: 'searchcity',
    props: [],
    data() {
        return {
            homelanguageset:Languageset.Chineseset,//中文
            autofocus:true,
            value:"",
            result:[],
            chinarr:[]
        }
    },
    created() {

    },
    activated(){
        let languagename = this.$route.query.language;
        let country = this.$route.query.country;
        if(languagename=="英文"||languagename=="English"){
            this.homelanguageset = Languageset.Englishset;
        }else{
            this.homelanguageset = Languageset.Chineseset;
        }
        //根据不同国家展示列表资源
        this.showlistsource(country);
    },
    methods: {
        querylist(list){
            if(this.value!=''){
                this.value = this.value.trim();
            }
            return list.filter((item)=>{
                if(item.title.indexOf(this.value) != -1){
                    return item;
                }
            })
        },
        //返还页面
        gotohome(item){
            this.value = "";
            this.$router.push({name:"home",params:{inteladdress:item.value}});
        },
        showlistsource(country){
            let chinarr = [];
            let china = "中国";
            let america = "America";
            let japan = "日本";
            switch(country){
                case "中国":
                    //中国
                    ChinaCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:china+"/"+item1.text,value:china+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:china+"/"+item1.text+"/"+item2.text,value:china+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                            //三级
                            item2.children&&item2.children.forEach(item3 => {
                                let obj3 = {title:china+"/"+item1.text+"/"+item2.text+"/"+item3.text,value:china+"/"+item1.text+"/"+item2.text+"/"+item3.text};
                                chinarr.push(obj3);
                            });
                        });
                    });
                break;
                case "China":
                    //中国
                    ChinaCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:china+"/"+item1.text,value:china+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:china+"/"+item1.text+"/"+item2.text,value:china+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                            //三级
                            item2.children&&item2.children.forEach(item3 => {
                                let obj3 = {title:china+"/"+item1.text+"/"+item2.text+"/"+item3.text,value:china+"/"+item1.text+"/"+item2.text+"/"+item3.text};
                                chinarr.push(obj3);
                            });
                        });
                    });
                break;
                case "美国":
                    //美国
                    AmericaCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:america+"/"+item1.text,value:america+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:america+"/"+item1.text+"/"+item2.text,value:america+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                        });
                    });
                break;
                case "America":
                    //美国
                    AmericaCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:america+"/"+item1.text,value:america+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:america+"/"+item1.text+"/"+item2.text,value:america+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                        });
                    });
                break;
                case "日本":
                    //日本
                    JapanCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:japan+"/"+item1.text,value:japan+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:japan+"/"+item1.text+"/"+item2.text,value:japan+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                        });
                    });
                break;
                case "Japan":
                    //日本
                    JapanCityDatas.forEach(item1 => {
                        //一级
                        let obj1 = {title:japan+"/"+item1.text,value:japan+"/"+item1.text};
                        chinarr.push(obj1);
                        //二级
                        item1.children&&item1.children.forEach(item2 => {
                            let obj2 = {title:japan+"/"+item1.text+"/"+item2.text,value:japan+"/"+item1.text+"/"+item2.text};
                            chinarr.push(obj2);
                        });
                    });
                break;
            }
            this.result = chinarr;
        }
    },
    mounted() {


    }
}

</script>

<style lang="scss" scoped>
.searchcity {
    .mint-popup-bottom {
        width: 100%;
    }
    background-color:$gray3;
}
</style>
