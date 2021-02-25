<template>
  <div class="home">
    <headers />
    <div class="wrap">
      <div class="content">
        <div class="testcontent">
          <div class="img img1">
            <img src="@/assets/images/index/index11.png" alt="" />
          </div>
          <div class="img img2">
            <img src="@/assets/images/index/index22.png" alt="" />
          </div>
          <div class="img img3">
            <img src="@/assets/images/index/index33.png" alt="" />
          </div>
        </div>
        <div class="testcontent2">
          <div class="img4">
            <img src="@/assets/images/index/images/mouse1.png" alt="" />
          </div>
          <div class="img5">
            <img src="@/assets/images/index/images/mouse2.png" alt="" />
          </div>
          <div class="img6">
            <img src="@/assets/images/index/images/mouse3.png" alt="" />
          </div>
        </div>
        <div class="testcontent3">
          <div class="img7">
            <img src="@/assets/images/index/images/keyboard1.png" alt="" />
          </div>
          <div class="img8">
            <img src="@/assets/images/index/images/keyboard2.png" alt="" />
          </div>
        </div>
        <div class="testcontent4">
          <div>
            <p class="test4txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              nostrum asperiores ducimus molestias laboriosam consequuntur enim
              quam atque id accusamus porro inventore magnam repellendus,
              veritatis repudiandae quisquam esse placeat ut.
            </p>
            <p class="test4txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              nostrum asperiores ducimus molestias laboriosam consequuntur enim
              quam atque id accusamus porro inventore magnam repellendus,
              veritatis repudiandae quisquam esse placeat ut.
            </p>
            <p class="test4txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              nostrum asperiores ducimus molestias laboriosam consequuntur enim
              quam atque id accusamus porro inventore magnam repellendus,
              veritatis repudiandae quisquam esse placeat ut.
            </p>
          </div>
        </div>
        <div class="testcontent5">
          <div>
            <img
              class="img9"
              src="@/assets/images/index/images/mobile.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="img10"
              src="@/assets/images/index/images/mobile2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="img11"
              src="@/assets/images/index/images/mobile3.jpg"
              alt=""
            />
          </div>
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
      .fromTo('.img1 img', 4, {
        scale: '2'
      }, {
        scale: '1'
      })
      .to('.img2', 4, {
        left: '20%'
      })
      .to('.img3', 4, {
        right: '20%'
      }, '-=4')
    new ScrollMagic.Scene({
      triggerElement: '.testcontent',
      triggerHook: 0,
      duration: '100%'
    })
      .setPin('.testcontent')
      .addIndicators()
      .setTween(t1)
      .addTo(controller)
    const t2 = new TimelineMax()
      .to('.img4 img', 4, {
        autoAlpha: 1
      })
      .to('.img5 img', 4, {
        autoAlpha: 1
      })
      .to('.img6 img', 4, {
        autoAlpha: 1
      })
    new ScrollMagic.Scene({
      triggerElement: '.testcontent2',
      triggerHook: 0.5,
      duration: '300'
    })
      .setTween(t2)
      .addIndicators()
      .addTo(controller)
    const t3 = new TimelineMax()
      .to('.img7 img', 4, {
        top: '0%',
        autoAlpha: 1
      })
      .to('.img8 img', 4, {
        top: '0%',
        autoAlpha: 1
      }, '-=2')
    new ScrollMagic.Scene({
      triggerElement: '.testcontent3',
      triggerHook: 0.7,
      duration: '200',
      offset: '100'
    })
      .setTween(t3)
      .addIndicators()
      .addTo(controller)
    $('.test4txt').each(function () {
      const t4 = new TimelineMax()
        .to(this, 4, {
          autoAlpha: 1,
          y: '0%'
        })
      new ScrollMagic.Scene({
        triggerElement: '.testcontent4',
        triggerHook: 0.7,
        duration: '100'
      })
        // .setClassToggle('.test4txt', 'testcontent4-fadein')
        .setTween(t4)
        .addIndicators()
        .addTo(controller)
    })
    const t5 = new TimelineMax()
      .to('.img9', 0.5, {
        autoAlpha: 1,
        y: '0'
      })
      .to('.img10', 0.5, {
        autoAlpha: 1,
        y: 50
      })
      .to('.img11', 0.5, {
        autoAlpha: 1,
        y: 100
      })
    new ScrollMagic.Scene({
      triggerElement: '.testcontent5',
      triggerHook: 0.8
    })
      .setTween(t5)
      .addIndicators()
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
    justify-content: center;
    position: relative;
    .img {
      position: relative;
      & > img {
        width: 400px;
        height: 266px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }
    .img.img1 {
      & > img {
        width: 650px;
        height: 500px;
        z-index: 9;
      }
    }
  }

  .testcontent2 {
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
    & > div {
      & > img {
        opacity: 0;
        width: 300px;
      }
    }
  }
  .testcontent3 {
    display: flex;
    justify-content: center;
    margin: auto;
    position: relative;
    height: 300px;

    & > div {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;

      & > img {
        position: absolute;
        top: 50%;
        opacity: 0;
      }
    }
  }
  .testcontent4 {
    color: white;
    height: 300px;
    & > div {
      position: relative;

      & > p {
        margin-top: 60px;
        opacity: 0;
        transition: ease-in-out 0.5s;
        // position: absolute;
        transform: translateY(200px);
      }
    }

    &-fadein {
      transform: translateY(0px) !important;
    }
  }
  .testcontent5 {
    display: flex;
    justify-content: center;
    height: 100%;
    & > div {
      & > img {
        width: 300px;
        opacity: 0;
        transform: translateY(300px);
      }
    }
  }
}
</style>
