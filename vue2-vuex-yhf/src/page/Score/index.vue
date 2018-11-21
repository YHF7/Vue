<template>
    <div class="store">
        <div class="top">
            <span>{{score}}分</span>
            <strong>{{scoreTips}}</strong>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "score",
  computed: mapState(["title_id"]),
  data() {
    return {
      data_d: [3, 7, 11, 15, 19], // 答案
      score: 0, //得分
      scoreTips: "",
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    };
  },
  created() {
    document.body.style.backgroundImage = "url(./static/img/4-1.4c4bb05.jpg)";
    this.title_id.forEach((item, i) => {
      if (item == this.data_d[i]) {
        this.score += 20;
      }
    });
    this.getScoreTip();
  },
  methods: {
      //根据分数显示提示
        getScoreTip: function (){
          let index = Math.ceil(this.score/20)-1;
          if (index<0) {
              index = 0;
          }
          this.scoreTips = this.scoreTipsArr[index];
        }
  }
};
</script>
<style scoped  lang="scss">
.store {
  .top {
    margin: 1rem 0 0 2.7rem;
    width: 11rem;
    height: 11rem;
    text-align: center;
    background-image: url(../../images/4-2.png);
    background-size: 100% 100%;
    span {
      font-size: 2.5rem;
      font-weight: 700;
      color: red;
      display: block;
      padding-top: 4.3rem;
      padding-left: 0.6rem;
      text-shadow:1px 1px 1px #000;
    }
    strong {
        padding-left: .7rem;
        font-size: .8rem;
    }
  }
}
</style>