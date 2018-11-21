import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  week: '第一周', //活动周数
  topic: 1, // 第几题
  subject: [{
    title: '题目一',
    id: 1,
    subject_t: [{
        id: 1,
        sub_id: 1,
        title_name: "答案aaaaaaaa"
      },
      {
        id: 1,
        sub_id: 2,
        title_name: "答案bbbbbbb"
      },
      {
        id: 1,
        sub_id: 3,
        title_name: "正确"
      },
      {
        id: 1,
        sub_id: 4,
        title_name: "答案dddddd"
      }
    ]
  }, {
    title: '题目二',
    id: 1,
    subject_t: [{
        id: 1,
        sub_id: 5,
        title_name: "答案a"
      },
      {
        id: 1,
        sub_id: 6,
        title_name: "答案b"
      },
      {
        id: 1,
        sub_id: 7,
        title_name: "正确"
      },
      {
        id: 1,
        sub_id: 8,
        title_name: "答案d"
      }
    ]
  }, {
    title: '题目三',
    id: 1,
    subject_t: [{
        id: 1,
        sub_id: 9,
        title_name: "答案a"
      },
      {
        id: 1,
        sub_id: 10,
        title_name: "答案b"
      },
      {
        id: 1,
        sub_id: 11,
        title_name: "正确"
      },
      {
        id: 1,
        sub_id: 12,
        title_name: "答案d"
      }
    ]
  }, {
    title: '题目四',
    id: 1,
    subject_t: [{
        id: 1,
        sub_id: 13,
        title_name: "答案a"
      },
      {
        id: 1,
        sub_id: 14,
        title_name: "答案b"
      },
      {
        id: 1,
        sub_id: 15,
        title_name: "正确"
      },
      {
        id: 1,
        sub_id: 16,
        title_name: "答案d"
      }
    ]
  }, {
    title: '题目五',
    id: 1,
    subject_t: [{
        id: 1,
        sub_id: 17,
        title_name: "答案a"
      },
      {
        id: 1,
        sub_id: 18,
        title_name: "答案b"
      },
      {
        id: 1,
        sub_id: 19,
        title_name: "正确"
      },
      {
        id: 1,
        sub_id: 20,
        title_name: "答案d"
      }
    ]
  }],
  title_id:[]
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
