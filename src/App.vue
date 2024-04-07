<template>
  <div class="bigscreen">
    <div class="content" ref="contentRef">
      <div class="left">
        <div class="l1"></div>
        <div class="l2"></div>
        <div class="l3"></div>
      </div>
      <div class="center">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
      <div class="right">
        <div class="r1"></div>
        <div class="r2"></div>
        <div class="r3"></div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue"

onMounted(() => scaleScreen())

const contentRef = ref<HTMLElement | null>(null)

const scaleScreen = () => {
  if (contentRef.value) {
    contentRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
}

const getScale = () => {
  const w = window.innerWidth / 1920
  const h = window.innerHeight / 1080
  return w < h ? w : h
}

window.onresize = () => {
  scaleScreen()
}
</script>

<style lang="scss" scoped>
.bigscreen {
  width: 100vw;
  height: 100vh;
  background: url("./assets/背景.png") no-repeat;
  background-size: 100% 100%;

  .content {
    display: flex;
    position: fixed;
    left: 50%;
    top: 50%;
    transform-origin: left top;
    width: 1920px;
    height: 1080px;


    .left {
      padding-top: 102px;
      width: 488px;

      .l1 {
        height: 309px;
        background: url("./assets/1.png") no-repeat center center;
        background-size: cover;
      }

      .l2 {
        margin: 14px 0;
        height: 290px;
        background: url("./assets/2.png") no-repeat center center;
        background-size: cover;
      }

      .l3 {
        height: 336px;
        background: url("./assets/3.png") no-repeat center center;
        background-size: cover;
      }
    }

    .center {
      padding-top: 102px;
      margin: 0 24px;
      flex: 1;

      .top {
        width: 798px;
        height: 607px;
        background: url("./assets/center.png") no-repeat center center;
        background-size: cover;
      }

      .bottom {
        margin-top: 20px;
        height: 336px;
        background: url("./assets/center-bottom.png") no-repeat center center;
        // background-size: cover;
      }
    }

    .right {
      padding-top: 102px;
      width: 488px;

      .r1 {
        height: 309px;
        background: url("./assets/r1.png") no-repeat center center;
        background-size: cover;
      }

      .r2 {
        margin: 14px 0;
        height: 290px;
        background: url("./assets/r2.png") no-repeat center center;
        background-size: cover;
      }

      .r3 {
        height: 336px;
        background: url("./assets/r3.png") no-repeat center center;
        background-size: cover;
      }
    }
  }
}
</style>