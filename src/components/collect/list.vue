<template>
    <div class="list_box">
        <div class="img_box">
            <img :src="data.bookCover">
        </div>
        <div class="content">
            <h2>{{data.bookName}}</h2>
            <p class="desc">{{data.bookInfo}}</p>
            <div class="price">{{data.bookPrice | money}}</div>
            <div class="btn_box">
                <button @click="remove">删除</button>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        props:['data'],
        methods:{
            remove(){
                this.$store.commit('removeCollect',this.data)
            }
        }
    }
</script>

<style scoped lang="less">
    @r:75rem;
    .list_box{
        text-align: left;
        overflow: hidden;
        display: flex;
        border-bottom: 1px solid #ccc;
        .img_box{
            width: 200/@r;
            height: 200/@r;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .content{
            flex: 1;
            box-sizing: border-box;
            padding-left: 20/@r;
            h2{
                font-size: 45/@r;
            }
            p{
                font-size: 35/@r;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 540/@r;

            }
            .price{
                color: red;
                font-size: 25/@r;
            }
            .btn_box{
                button{
                    outline: none;
                    border: none;
                    padding: 0 20/@r;
                    //border: 1px solid #ccc;
                    border-radius: 20/@r;
                    background: orange;
                    color: white;
                    font-size: 35/@r;
                }
            }
        }
    }

</style>