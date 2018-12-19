<template>
    <div class="hot_box">
        <h2>热门图书</h2>
        <div class="book_box">
            <book v-for='(item,i) in list' :data='item' :key="i"></book>
        </div>
    </div>
</template>

<script>
    import book from './book.vue'
    export default {
        data(){
            return{
                list:[]
            }
        },
        created() {
            this.$store.dispatch('getHomeList').then((data)=>{
                this.list = data.data;
            })
        },
        components:{
            book
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .hot_box{
        margin-bottom: 140/@r;
        h2{
            height: 80/@r;
            width: 100%;
            line-height: 80/@r;
            text-align: left;
            box-sizing: border-box;
            padding: 0 30/@r;
        }
    }
    .book_box{
        overflow: hidden;
    }
</style>