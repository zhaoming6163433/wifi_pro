<template>
  <div class="citypicker">
      <mt-popup
        v-model="citypopup"
        position="bottom"
    >
       <mt-picker :slots="slots" @change="onValuesChange1" value-key="text" ></mt-picker>
      </mt-popup>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import ChinaCityDatas from 'static/js/China_min.js'
import AmericaCityDatas from 'static/js/America_min.js'
import JapanCityDatas from 'static/js/Japan_min.js'
import Languageset from 'static/js/Languageset.js'

export default {
    name: 'citypicker',
    props: [],
    data() {
        return {
            homelanguageset:Languageset.Chineseset,//中文
            selected: "1",
            citypopup: false,//展示城市
            slots:[
                {
                    flex: 1,
                    values: ChinaCityDatas,
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ChinaCityDatas[0].children,
                    className: 'slot3',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot4'
                }, {
                    flex: 1,
                    values: ChinaCityDatas[0].children[0].children,
                    className: 'slot5',
                    textAlign: 'center'
                }
            ],
            slots1: [
                {
                    flex: 1,
                    values: ChinaCityDatas,
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ChinaCityDatas[0].children,
                    className: 'slot3',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot4'
                }, {
                    flex: 1,
                    values: ChinaCityDatas[0].children[0].children,
                    className: 'slot5',
                    textAlign: 'center'
                }
            ],
            slots2: [
                {
                    flex: 1,
                    values: AmericaCityDatas,
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: AmericaCityDatas[0].children,
                    className: 'slot3',
                    textAlign: 'center'
                }
            ],
            slots3: [
                {
                    flex: 1,
                    values: JapanCityDatas,
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: JapanCityDatas[0].children,
                    className: 'slot3',
                    textAlign: 'center'
                }
            ],
            picker:"",
            selvalues1: [],//选择的值
            selvalues2: [],
            selvalues3: []
        }
    },
    created() {

    },
    watch: {
        citypopup(val) {
            if (val == false) {
                switch (this.selected) {
                    case "1":
                        this.$emit('showcity', this.selvalues1,this.selected);
                        break;
                    case "2":
                        if (this.selvalues2.length == 0) {
                            this.selvalues2 = [
                                { text: AmericaCityDatas[0].text },
                                { text: AmericaCityDatas[0].children[0].text }
                            ]
                        }
                        this.$emit('showcity', this.selvalues2,this.selected);
                        break;
                    case "3":
                        if (this.selvalues3.length == 0) {
                            this.selvalues3 = [
                                { text: JapanCityDatas[0].text },
                                { text: JapanCityDatas[0].children[0].text }
                            ]
                        }
                        this.$emit('showcity', this.selvalues3,this.selected);
                        break;
                }
            }
        }
    },
    methods: {
        //三级选择
        onValuesChange1(picker, values) {
            this.picker = picker;
            if (this.selected == "1") {
                picker.setSlotValues(1, values[0].children);
                if(values[1].children){
                    picker.setSlotValues(2, values[1].children);
                }else{
                    picker.setSlotValues(2, "");
                }
                this.selvalues1 = values;
            }
            if (this.selected == "2") {
                picker.setSlotValues(1, values[0].children);
                this.selvalues2 = values;
            }
            if (this.selected == "3") {
                picker.setSlotValues(1, values[0].children);
                this.selvalues3 = values;
            }
        },
        //展示成
        selcity(country,flag) {
            if(flag!=true){
                this.citypopup = true;
            }
            switch(country){
                case "中国":
                    this.slots = this.slots1;
                    this.selected = "1";
                    break;
                case "China":
                    this.slots = this.slots1;
                    this.selected = "1";
                    break;
                case "美国":
                    this.slots = this.slots2;
                    this.selected = "2";
                    break;
                case "America":
                    this.slots = this.slots2;
                    this.selected = "2";
                    break;
                case "日本":
                    this.slots = this.slots3;
                    this.selected = "3";
                    break;
                case "Japan":
                    this.slots = this.slots3;
                    this.selected = "3";
                    break;
            }
        },
        //切换语言方法
        switchlanguage(val){
            this.homelanguageset = val;
        },
        //给当前赋初始值
        setdefaultvalue(val){
            if(val){
                let arr = val.split("/");
                let country = arr[0];
                if(country=="中国"||country=="China"){
                    var index1 = 0;
                    var index2 = 0;
                    var index3 = 0;
                    for(var i=1;i<arr.length;i++){
                        var str = arr[i];
                        if(i==1){
                            for(var k1=0;k1<this.slots1[0].values.length;k1++){
                                if(str == this.slots1[0].values[k1].text){
                                    index1 = k1;
                                    break;
                                }
                            }
                        }
                        if(i==2&&this.slots1[0].values[index1]){
                            var arr1 = this.slots1[0].values[index1].children;
                            for(var k2=0;k2<arr1.length;k2++){
                                if(str == arr1[k2].text){
                                    index2 = k2;
                                    break;
                                }
                            }
                        }
                        if(i==3){
                            var arr2 = this.slots1[0].values[index1].children[index2].children;
                            for(var k3=0;k3<arr2.length;k3++){
                                if(str == arr2[k3].text){
                                    index3 = k3;
                                    break;
                                }
                            }
                        }
                    }
                    var len = arr.length;
                    if(len>1) this.picker.setSlotValue(0, this.slots1[0].values[index1]);
                    if(len>2) this.picker.setSlotValue(1, this.slots1[0].values[index1].children[index2]);
                    if(len>3) this.picker.setSlotValue(2, this.slots1[0].values[index1].children[index2].children[index3]);
                }
                if(country=="美国"||country=="America"){

                    var index1 = 0;
                    var index2 = 0;
                    for(var i=1;i<arr.length;i++){
                        var str = arr[i];
                        if(i==1){
                            for(var k1=0;k1<this.slots2[0].values.length;k1++){
                                if(str == this.slots2[0].values[k1].text){
                                    index1 = k1;
                                    break;
                                }
                            }
                        }
                        if(i==2&&this.slots2[0].values[index1]){
                            var arr1 = this.slots2[0].values[index1].children;
                            for(var k2=0;k2<arr1.length;k2++){
                                if(str == arr1[k2].text){
                                    index2 = k2;
                                    break;
                                }
                            }
                        }
                    }
                    var len = arr.length;
                    if(len>1) this.picker.setSlotValue(0, this.slots2[0].values[index1]);
                    if(len>2) this.picker.setSlotValue(1, this.slots2[0].values[index1].children[index2]);
                }
                if(country=="日本"||country=="Japan"){

                    var index1 = 0;
                    var index2 = 0;
                    for(var i=1;i<arr.length;i++){
                        var str = arr[i];
                        if(i==1){
                            for(var k1=0;k1<this.slots3[0].values.length;k1++){
                                if(str == this.slots3[0].values[k1].text){
                                    index1 = k1;
                                    break;
                                }
                            }
                        }
                        if(i==2&&this.slots3[0].values[index1]){
                            var arr1 = this.slots3[0].values[index1].children;
                            for(var k2=0;k2<arr1.length;k2++){
                                if(str == arr1[k2].text){
                                    index2 = k2;
                                    break;
                                }
                            }
                        }
                    }
                    var len = arr.length;
                    if(len>1) {
                        this.picker.setSlotValue(0, this.slots3[0].values[index1]);
                        }
                    if(len>2) {
                        this.picker.setSlotValue(1, this.slots3[0].values[index1].children[index2]);
                    }
                }

            }
        }
    },
    mounted() {

    }
}

</script>

<style lang="scss" scoped>
.citypicker {
    .mint-popup-bottom {
        width: 100%;
    }
    .country {
        font-size: 18px;
    }
}
</style>
