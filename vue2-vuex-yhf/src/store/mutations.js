const ADD = 'ADD'
const NEXT = "NEXT"
const RESET = "RESET"
export default {
    // 添加答案
    [ADD](state,id){
        state.title_id.push(id);
    },
    // 添加到下一题
    [NEXT](state,n) {
        state.topic += n;
    },
    // 重置内容
    [RESET](state) {
        state.topic = 1;
        state.title_id = [];
    }
}