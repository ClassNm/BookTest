import axios from 'axios';  // 引入axios
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bf0ee40643497494c87d271';

export const addFn = ({commit},obj)=>{
    commit ('add',obj)
};
// export const addFn = ({context},obj=>{
//     context.commit ('add',obj)
// })


export const getBannerList = ({commit},obj) => {
    return axios.get('/bannerList')
}

// 获取首页列表
export const getHomeList = ({commit},obj) => {
    return axios.get('/homeList')
}

// 获取列表页数据
export const getListDataFn = ({commit},obj)=>{
    axios.get('./listData').then((data)=>{
        commit('getListData',data.data)
    })
}