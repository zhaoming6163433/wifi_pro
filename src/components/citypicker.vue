<template>
  <div class="citypicker">
      <mt-popup
        v-model="citypopup"
        position="bottom"
    >
       <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="country">{{homelanguageset.china}}</span></mt-tab-item>
        <mt-tab-item id="2"><span class="country">{{homelanguageset.america}}</span></mt-tab-item>
        <mt-tab-item id="3"><span class="country">{{homelanguageset.japan}}</span></mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-picker :slots="slots1" @change="onValuesChange1" value-key="text" ></mt-picker>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-picker :slots="slots2" @change="onValuesChange2" value-key="text" ></mt-picker>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-picker :slots="slots3" @change="onValuesChange3" value-key="text" ></mt-picker>
        </mt-tab-container-item>
        </mt-tab-container>

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
            if (this.selected == "1") {
                picker.setSlotValues(1, values[0].children);
                picker.setSlotValues(2, values[1].children);
                this.selvalues1 = values;
            }
        },
        onValuesChange2(picker, values) {
            if (this.selected == "2") {
                picker.setSlotValues(1, values[0].children);
                this.selvalues2 = values;
            }
        },
        onValuesChange3(picker, values) {
            if (this.selected == "3") {
                picker.setSlotValues(1, values[0].children);
                this.selvalues3 = values;
            }
        },
        //展示成
        selcity() {
            this.citypopup = true;
        },
        //切换语言方法
        switchlanguage(val){
            this.homelanguageset = val;
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
