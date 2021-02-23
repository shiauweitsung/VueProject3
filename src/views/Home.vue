<template>
  <div class="home">
    <headers />
    <div class="wrap">
      <div class="content">
        <div class="testcontent">
          <div class="img img1">
            <img src="@/assets/images/index/index1.jpg" alt="" />
          </div>
          <div class="img img2">
            <img src="@/assets/images/index/index2.jpg" alt="" />
          </div>
          <div class="img img3">
            <img src="@/assets/images/index/index3.jpg" alt="" />
          </div>
        </div>
        <div class="testcontent2">
          <h4>123</h4>
        </div>
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import headers from '@/components/header.vue'
import footers from '@/components/footer.vue'
import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default {
  name: 'home',
  components: {
    headers,
    footers
  },
  mounted () {
    const controller = new ScrollMagic.Controller()
    const t1 = new TimelineMax()
      .fromTo('.img1', 4,
        {
          translateX: '-50%',
          scale: '3'
        },
        {
          translateX: '-50%',
          scale: '1'
        }
      )
      .to('.img2', 4, {
        left: '20%'
      })
      .to('.img3', 4, {
        right: '20%'
      }, '-=4')
    new ScrollMagic.Scene({
      triggerElement: '.testcontent',
      triggerHook: 0,
      duration: '150%'
    })
      .setPin('.testcontent')
      .setTween(t1)
      .addTo(controller)
  }
}
</script>
<style scoped lang="scss" >
.home {
  .testcontent {
    height: calc(100vh - 84px);
    width: 100%;
    position: relative;
    background-color: black;
    display: flex;
    position: relative;
    .img {
      position: absolute;
      top: 50%;
    }
    .img1 {
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9;
    }
    .img2 {
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    .img3 {
      right: 50%;
      transform: translate(50%, -50%);
      z-index: 1;
    }
  }
  .testcontent2 {
    background-color: red;
    height: 600px;
    color: white;
  }
}
</style>
