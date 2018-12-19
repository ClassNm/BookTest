export const add = (state,obj) => {
    state.count++;
};

export const getListData = (state,obj) => {
    state.listData = obj;  // 修改store中的数据
}

// 删除数据中某项数据
export const remove = (state,obj) => {
    //obj 是要删除的那一项数据
    state.listData = state.listData.filter((item)=>{
        return item !== obj;
    })
}

// 添加列表页 的数据
export const addList = (state,obj) => {
    state.listData.unshift(obj);
}

// 收藏列表数据 添加内容
export const addCollect = (state,obj) => {
    state.collectData.push(obj);
}

// 收藏列表数据 删除内容
export const removeCollect = (state,obj) => {
    state.collectData = state.collectData.filter((item)=>{
        return item !== obj;
    })
}