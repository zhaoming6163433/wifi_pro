<template>
  <div class="country">
      <mt-actionsheet
        :actions="country"
        cancelText=""
        v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import Languageset from 'static/js/Languageset.js'
export default {
    name: 'country',
    props: [],
    data() {
        return {
            sheetVisible: false,
            country: [{
                name: Languageset.Chineseset.china,
                method: this.changecountry
            }, {
                name: Languageset.Chineseset.america,
                method: this.changecountry
            }, {
                name: Languageset.Chineseset.japan,
                method: this.changecountry
            }],
            countryc: [{
                name: Languageset.Chineseset.china,
                method: this.changecountry
            }, {
                name: Languageset.Chineseset.america,
                method: this.changecountry
            }, {
                name: Languageset.Chineseset.japan,
                method: this.changecountry
            }],
            countrya: [{
                name: Languageset.Englishset.china,
                method: this.changecountry
            }, {
                name: Languageset.Englishset.america,
                method: this.changecountry
            }, {
                name: Languageset.Englishset.japan,
                method: this.changecountry
            }],
        }
    },
    created() {

    },
    activated(){

    },
    methods: {
        showcountry(){
            this.sheetVisible = true;
        },
        changecountry(val){
            this.$emit('changecountry', val);
        },
        //切换语言方法
        switchlanguage(val){
            if(val=="E"){
                this.country = this.countrya;
            }else{
                this.country = this.countryc;
            }
        }
    },
    mounted() {

    }
}

</script>

<style lang="scss" scoped>
.country {

}
</style>
