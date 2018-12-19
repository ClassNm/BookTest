<template>
    <div>
        <myTil til='添加页'></myTil>
        <div class="inp_box">
            <label>书名</label>
            <input type="text" v-model="name">
            <label>书的信息</label>
            <input type="text" v-model="desc">
            <label>书的价格</label>
            <input type="text" v-model="price">
            <label>书的封面</label>
            <input type="text" v-model="img">
            <button @click="add">添加</button>
        </div>
    </div>
</template>

<script>
     import myTil from '@/components/common/title.vue'
    export default {
        data() {
            return {
                name: '',
                desc: '',
                price: '',
                img: ''
            }
        },
        components:{
            myTil
        },
        methods: {
            add(){
                let obj = {
                    bookName:this.name,
                    bookInfo:this.desc,
                    bookPrice:this.price,
                    bookCover:this.img,
                    bookId:new Date().getTime()
                };
                this.$store.commit('addList',obj);
                this.$router.push('/list');
                this.name = '';
                this.desc = '';
                this.price = '';
                this.img = '';
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .inp_box{
        margin: 100/@r 0 200/@r 0;
        text-align: center;
        label,input,button{
            display: block;
            margin: 30/@r auto;
            font-size: 40/@r;
        }
        input{
            width: 80%;
            height: 100/@r;
            border: 1px solid #ccc;
        }
        button{
            width: 300/@r;
            height: 100/@r;
        }
    }
</style>