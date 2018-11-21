<template>
    <section>
        <header class="top">
            <span class="top-con" v-if="con == 'home'">{{week}}</span>
            <span class="top-con" v-if="con == 'item'">题目{{topic}}</span>
        </header>
        <div v-if="con == 'home'">
            <div class="home-con home-con-home"></div>
            <router-link to='item' class="home-click"></router-link>
        </div>
        <div v-if="con == 'item'">
            <div class='home-con item-con-item'>
              <div class="home-con-con">
                <header class="item_header">{{subject[topic-1].title}}</header>
                <ul>
                  <li v-for="(item,i) in subject[topic-1].subject_t" :key="i" class="item_title" @click="update(i,item.sub_id)">
                    <span class="option_style" :class="{'xz':title_n==i}">{{px(i)}}</span>
                    <span class="option_detail">{{item.title_name}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <span class="add" @click="add" v-if="topic<subject.length"></span>
            <span class="tj" @click="tj" v-else></span>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "con",
  data() {
    return {
      title_id: null,
      title_n: null
    };
  },
  props: ["con"],
  methods: {
    ...mapActions(["addNum","rest"]),
    px: type => {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    update(i, id) {
      this.title_n = i;
      this.title_id = id;
    },
    add() {
      if (this.title_n!==null) {
        this.title_n = null;
        this.addNum(this.title_id);
      }else {
        alert('还没有选择答案');
      }
    },
    tj() {
      if (this.title_n!==null) {
        this.addNum(this.title_id);
        this.$router.push("score");
      }else {
        alert('还没有选择答案');
      }
    }
  },
  computed: mapState(["week", "topic", "subject", "abc"]),
  created() {
    document.body.style.backgroundImage = "url(./static/img/1-1.a92218b.jpg)"
    if (this.con == 'home') {
      this.rest();
    }
  }
};
</script>
<style scoped lang="scss">
section {
  .top {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .top-con {
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: "黑体";
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .home-con {
    width: 13.15rem;
    height: 11.625rem;
    position: absolute;
    top: 5.1rem;
    left: 1.3rem;
    background-repeat: no-repeat;
    .home-con-con {
      position: absolute;
      top: 1.5rem;
      left: 4rem;
    }
  }
  .home-con-home {
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .home-click,
  .add,
  .tj {
    position: absolute;
    display: inline-block;
    width: 5rem;
    height: 2rem;
    top: 17rem;
    left: 5.5rem;
    background-image: url(../images/1-4.png);
    background-size: 100% 100%;
  }
  .item-con-item {
    background-image: url(../images/2-1.png);
    background-size: 13.142rem 100%;
    background-position: right center;
    .item_header {
      font-size: 0.65rem;
      color: #fff;
      line-height: 0.7rem;
    }
    .item_title {
      font-size: 0;
      margin-top: 0.4rem;
      width: 10rem;
      span {
        display: inline-block;
        color: #fff;
        font-size: 0.6rem;
        vertical-align: middle;
      }
      .option_style {
        height: 0.725rem;
        width: 0.725rem;
        border: 1px solid #fff;
        border-radius: 50%;
        line-height: 0.725rem;
        text-align: center;
        margin-right: 0.3rem;
        font-size: 0.5rem;
        font-family: "Arial";
      }
      .option_detail {
        width: 7.5rem;
      }
      .xz {
        background-color: #ffd400;
        color: #575757;
        border-color: #ffd400;
      }
    }
  }
  .add {
    background-image: url(../images/2-2.png);
  }
  .tj {
    background-image: url(../images/3-1.png);
  }
}
</style>