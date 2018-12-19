<template>
    <div class="swiper_box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,i) in dataList' :key="i">
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        props: {
            dataList: {
                type: Array,
                default(){
                    return []
                } 
            },
        },
        mounted() {
            if(this.dataList.length){
                 this.SwiperInit();
            }
        },
        updated() {
            if(this.dataList.length){
                 this.SwiperInit();
            }
        },
        methods:{
            SwiperInit(){
                new Swiper('.swiper-container',{
                autoplay: {
                    autoplay:true,
                    disableOnInteraction: false
                },
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    img{
        width: 100%;
        height: 100%;
    }
    .swiper_box{
        margin-top: 100/@r;
        height: 300/@r;
        background: #ccc;
        .swiper-container{
            height: 100%;
        }
    }
</style>