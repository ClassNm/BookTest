<template>
    <div>
        <my-til til='首页'></my-til>
        <mySwiper :dataList = 'bannerList'></mySwiper>
        <hot></hot>
    </div>
</template>

<script>
    import myTil from '@/components/common/title.vue';
    import mySwiper from '@/components/common/swiper.vue';
    import hot from './hot';
    export default {
        data(){
            return{
                bannerList: []
            }
        },
        created() {
            let fn = this.$store.dispatch('getBannerList');
            fn.then((data)=>{
                console.log(data);
                this.bannerList = data.data;
            }).catch((err)=>{
                console.log(err);            
            })
            
        },
        components:{
            myTil,
            mySwiper,
            hot    
        }
    }
</script>

<style scoped>

</style>