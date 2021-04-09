<template>
  <div class="index">
    <div class="wrap">
      <div class="content">
        <swiper :swiperOption="swiperOption" />
        <h4 class="mt-5 text-center">推薦筆電</h4>
        <div class="index-content-laptop">
          <div class="index-content-laptop-item laptop-item1">
            <router-link to="/products/筆電">
              <div class="index-content-laptop-item-img">
                <img
                  src="@/assets/images/products/laptop/Razer Blade 15 Base Edition - Full HD 120Hz - GeForce GTX 1660 Ti - Black.png"
                  alt=""
                />
              </div>
              <div class="index-content-laptop-item-txt">
                <h4>The New Razer Blade 15</h4>
                <ul>
                  <li>第 10 代 Intel® Core™ i7-10750H 處理器</li>
                  <li>作業系統: Windows 10 家用版</li>
                  <li>15.6" 120Hz Full HD</li>
                  <li>GeForce GTX 1660 Ti</li>
                  <li>16GB RAM, 256GB SSD + Open M.2 Slot</li>
                </ul>
              </div>
            </router-link>
          </div>
          <div class="index-content-laptop-item laptop-item2">
            <router-link to="/products/筆電">
              <div class="index-content-laptop-item-img">
                <img
                  src="@/assets/images/products/laptop/Razer Blade 15 Base Edition - OLED 4K 60Hz - GeForce RTX 2070 Max-Q - Mercury.png"
                  alt=""
                />
              </div>
              <div class="index-content-laptop-item-txt">
                <h4>Razer Blade Studio Edition</h4>
                <ul>
                  <li>第 10 代 Intel® Core™ i7-10750H 處理器</li>
                  <li>作業系統: Windows 10 家用版</li>
                  <li>17.3" 360Hz Full HD</li>
                  <li>GeForce RTX 3060</li>
                  <li>16GB RAM, 512GB SSD</li>
                </ul>
              </div>
            </router-link>
          </div>
          <div class="index-content-laptop-item laptop-item3">
            <router-link to="/products/筆電">
              <div class="index-content-laptop-item-img">
                <img
                  src="@/assets/images/products/laptop/Razer Blade 15 Base Edition - QHD 165Hz - GeForce RTX 3070 - Black.png"
                  alt=""
                />
              </div>
              <div class="index-content-laptop-item-txt">
                <h4>Razer Blade Pro 17</h4>
                <ul>
                  <li>第 10 代 Intel® Core™ i7-10750H 處理器</li>
                  <li>作業系統: Windows 10 家用版</li>
                  <li>15.6" 165Hz QHD</li>
                  <li>GeForce RTX 30700</li>
                  <li>16GB RAM, 512GB SSD</li>
                </ul>
              </div>
            </router-link>
          </div>
        </div>
        <h4 class="mt-5 text-center">推薦滑鼠</h4>
        <div class="index-content-mouse mt">
          <div class="index-content-mouse-item mouse-item1">
            <router-link to="/products/滑鼠">
              <div class="index-content-mouse-item-img">
                <img
                  src="@/assets/images/products/mouse/Razer Basilisk V2.png"
                  alt=""
                />
              </div>
              <div class="index-content-mouse-item-txt">
                <h4>Razer Basilisk V2</h4>
                <ul>
                  <li>11 顆可編程按鍵</li>
                  <li>可自訂滾輪阻力</li>
                  <li>Razer 光學滑鼠按鍵軸</li>
                  <li>Razer Focus+ 光學感測器</li>
                  <li>Razer Speedflex 纜線</li>
                </ul>
              </div>
            </router-link>
          </div>
          <div class="index-content-mouse-item mouse-item2">
            <router-link to="/products/滑鼠">
              <div class="index-content-mouse-item-img">
                <img
                  src="@/assets/images/products/mouse/Razer Mamba Elite.png"
                  alt=""
                />
              </div>
              <div class="index-content-mouse-item-txt">
                <h4>Razer Mamba Elite</h4>
                <ul>
                  <li>Razer 5G 高階光學感測器</li>
                  <li>更大的 Razer Chroma™ 發光區域</li>
                  <li>最高可承受 5000 萬次點擊</li>
                  <li>進階人體工學設計加上經過改良的側握</li>
                  <li>9 顆可編程按鍵</li>
                </ul>
              </div>
            </router-link>
          </div>
          <div class="index-content-mouse-item mouse-item3">
            <router-link to="/products/滑鼠">
              <div class="index-content-mouse-item-img">
                <img
                  src="@/assets/images/products/mouse/Razer Viper 8KHz.png"
                  alt=""
                />
              </div>
              <div class="index-content-mouse-item-txt">
                <h4>Razer Viper 8KHz</h4>
                <ul>
                  <li>Razer™ HyperPolling 技術，帶來最敏捷的反應速度</li>
                  <li>第 2 代 Razer™ 光學滑鼠按鍵軸，失誤零容忍</li>
                  <li>Razer™ Focus+ 光學感測器，提供不同凡響的準確度</li>
                  <li>71 公克輕量設計，使用起來更加流暢不費力</li>
                </ul>
              </div>
            </router-link>
          </div>
          <div class="index-content-mouse-item mouse-item4">
            <router-link to="/products/滑鼠">
              <div class="index-content-mouse-item-img">
                <img
                  src="@/assets/images/products/mouse/Razer DeathAdder V2 Pro.png"
                  alt=""
                />
              </div>
              <div class="index-content-mouse-item-txt">
                <h4>Razer DeathAdder V2 Pro</h4>
                <ul>
                  <li>Razer™ HyperSpeed Wireless 技術，連線速度超越有線滑鼠</li>
                  <li>
                    Razer™ Focus+ 20K DPI 光學感測器，提供不同凡響的準確度
                  </li>
                  <li>第 2 代 Razer™ 光學滑鼠按鍵軸，提供光速般的觸發速度</li>
                </ul>
              </div>
            </router-link>
          </div>
        </div>
        <h4 class="mt-5 text-center">推薦鍵盤</h4>
        <div class="index-content-keyboard">
          <div class="index-content-keyboard-item keyboard-item1">
            <router-link to="/products/鍵盤">
              <div class="index-content-keyboard-item-img">
                <img
                  src="@/assets/images/products/keyboard/Razer BlackWidow Tournament Edition Chroma V2.png"
                  alt=""
                />
              </div>
              <div class="index-content-keyboard-item-txt">
                <h4>Razer BlackWidow</h4>
              </div>
            </router-link>
          </div>
          <div class="index-content-keyboard-item keyboard-item2">
            <router-link to="/products/鍵盤">
              <div class="index-content-keyboard-item-img">
                <img
                  src="@/assets/images/products/keyboard/Razer BlackWidow V3 - Green Switch - US - Quartz.png"
                  alt=""
                />
              </div>
              <div class="index-content-keyboard-item-txt">
                <h4>Razer BlackWidow V3</h4>
              </div>
            </router-link>
          </div>
          <div class="index-content-keyboard-item keyboard-item3">
            <router-link to="/products/鍵盤">
              <div class="index-content-keyboard-item-img">
                <img
                  src="@/assets/images/products/keyboard/Razer Huntsman Elite - Linear Optical Switch - US.png"
                  alt=""
                />
              </div>
              <div class="index-content-mouse-item-txt">
                <h4>Razer Huntsman Elite</h4>
              </div>
            </router-link>
          </div>
        </div>
        <h4 class="mt-5 text-center">推薦耳機</h4>
        <div class="index-content-audio">
          <div class="index-content-audio-item audio-item1">
            <router-link to="/products/耳機">
              <div class="index-content-audio-item-img">
                <img
                  src="@/assets/images/products/audio/Razer Kraken BT Kitty Edition.png"
                  alt=""
                />
              </div>
              <div class="index-content-audio-item-txt">
                <h4>Razer Kraken BT Kitty Edition</h4>
              </div>
            </router-link>
          </div>
          <div class="index-content-audio-item audio-item2">
            <router-link to="/products/耳機">
              <div class="index-content-audio-item-img">
                <img
                  src="@/assets/images/products/audio/Razer Kraken Kitty - Black.png"
                  alt=""
                />
              </div>
              <div class="index-content-audio-item-txt">
                <h4>Razer Kraken Kitty - Black</h4>
              </div>
            </router-link>
          </div>
          <div class="index-content-audio-item audio-item3">
            <router-link to="/products/耳機">
              <div class="index-content-audio-item-img">
                <img
                  src="@/assets/images/products/audio/Razer Nari Ultimate.png"
                  alt=""
                />
              </div>
              <div class="index-content-audio-item-txt">
                <h4>Razer Nari Ultimate</h4>
              </div>
            </router-link>
          </div>
        </div>
        <h4 class="mt-5 text-center">市場調查</h4>
        <div class="index-content-progressbar mt">
          <div class="index-content-progressbar-circle">
            <h4>市佔率</h4>
            <circles :progress="circleOptions" />
          </div>
          <div class="index-content-progressbar-right">
            <div class="index-content-progressbar-right-item">
              <p>使用壽命</p>
              <div class="progress progressbar-item1">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div class="index-content-progressbar-right-item">
              <p>耐用度</p>
              <div class="progress progressbar-item2">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div class="index-content-progressbar-right-item">
              <p>上手度</p>
              <div class="progress progressbar-item3">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  97%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TimelineMax, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import swiper from '@/components/SwiperCarousel'
import circles from '@/components/progressCircle'
export default {
  name: 'index',
  components: {
    swiper,
    circles
  },
  data () {
    return {
      swiperOption: {
        // swiperData: [
        //   {
        //     img: require('../assets/images/banner/banner1.jpg')
        //   },
        //   {
        //     img: require('../assets/images/banner/banner2.jpg')
        //   },
        //   {
        //     img: require('../assets/images/banner/banner3.jpg')
        //   },
        //   {
        //     img: require('../assets/images/banner/banner4.jpg')
        //   },
        //   {
        //     img: require('../assets/images/banner/banner5.jpg')
        //   }
        // ],
        swiperData: [],
        swiperOptions: {
          spaceBetween: 30,
          centeredSlides: true,
          mousewheel: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // pagination dom
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // navigation dom
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // response setting
          breakpoints: {
            1024: {
              slidesPerView: 1,
              spaceBetween: 50
            }
          }
        },
        swiperWrap: 'swiperWrap',
        swiperClass: 'swiper-index-banner',
        // navigation show
        navigation: {
          prev: true,
          next: true
        },
        // pagination show
        pagination: true
      },
      circleOptions: {
        percent: 90
      },
      num: {
        num: 90
      }
    }
  },
  created () {
    let windowWidth = window.innerWidth
    if (windowWidth > 768) {
      this.swiperOption.swiperData = [
        {
          img: require('../assets/images/banner/banner1.jpg')
        },
        {
          img: require('../assets/images/banner/banner2.jpg')
        },
        {
          img: require('../assets/images/banner/banner3.jpg')
        },
        {
          img: require('../assets/images/banner/banner4.jpg')
        },
        {
          img: require('../assets/images/banner/banner5.jpg')
        }
      ]
    } else {
      this.swiperOption.swiperData = [
        {
          img: require('../assets/images/banner/banner1-mob.jpg')
        },
        {
          img: require('../assets/images/banner/banner2-mob.jpg')
        },
        {
          img: require('../assets/images/banner/banner3-mob.jpg')
        },
        {
          img: require('../assets/images/banner/banner4-mob.jpg')
        },
        {
          img: require('../assets/images/banner/banner5-mob.jpg')
        }
      ]
    }
  },
  mounted () {
    let windowWidth = document.documentElement.clientWidth
    const controller = new ScrollMagic.Controller()
    // 滑鼠
    const t2 = new TimelineMax()
      .staggerFromTo('.index-content-mouse-item', 0.3, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3)
      .staggerFromTo('.index-content-mouse-item-txt', 1, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' }, 0.5)
    new ScrollMagic.Scene({
      triggerElement: '.index-content-mouse',
      triggerHook: 0.4,
      reverse: false
    })
      .setTween(t2)
      .addTo(controller)
    // 鍵盤
    const t3 = new TimelineMax()
      .staggerFromTo('.index-content-keyboard-item', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' }, 0.5)
    new ScrollMagic.Scene({
      triggerElement: '.index-content-keyboard',
      triggerHook: 0.4,
      reverse: false
    })
      .setTween(t3)
      .addTo(controller)
    if (windowWidth > 768) {
      // 筆電
      TweenMax.fromTo('.laptop-item1', 3, { autoAlpha: 0, x: '300' }, { autoAlpha: 1, x: '0', ease: 'Expo.easeInOut' })
      TweenMax.fromTo('.laptop-item2', 3, { autoAlpha: 0, y: '-300' }, { autoAlpha: 1, y: '0', ease: 'Expo.easeInOut' })
      TweenMax.fromTo('.laptop-item3', 3, { autoAlpha: 0, x: '-300' }, { autoAlpha: 1, x: '0', ease: 'Expo.easeInOut' })
      // .addIndicators()
      // .addTo(controller)
      // 耳機
      const t4 = new TimelineMax()
        .fromTo('.audio-item3', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.audio-item2', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.audio-item1', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
      new ScrollMagic.Scene({
        triggerElement: '.index-content-audio',
        triggerHook: 0.4,
        reverse: false
      })
        .setTween(t4)
        .addTo(controller)
      // 進度條
      let circle = $('.circleBar')
      let percentData = {
        num: 0
      }
      const t5 = new TimelineMax()
        .fromTo('.index-content-progressbar-circle', 0.5, { autoAlpha: 0, y: '-200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.index-content-progressbar-right', 0.5, { autoAlpha: 0, x: '200', ease: 'Power0.easeInOut' },
          {
            autoAlpha: 1,
            x: '0'
          })
        .to('.progressbar-item1 .progress-bar', 2, { width: '80%', ease: 'Power4.easeInOut' })
        .to('.progressbar-item2 .progress-bar', 2, { width: '90%', ease: 'Power4.easeInOut' }, '-=2')
        .to('.progressbar-item3 .progress-bar', 2, { width: '97%', ease: 'Power4.easeInOut' }, '-=2')
        .to(percentData, 1, {
          num: this.circleOptions.percent,
          onUpdate: function () {
            circle.css('stroke-dashoffset', `calc(440 - (440 * ${percentData.num}) / 100)`)
          }
        }, '-=1')
        .to(percentData, 3, {
          num: this.circleOptions.percent,
          onUpdate: function () {
            $('.percentNumber').html(percentData.num.toFixed(0))
          }
        }, '-=1')
      new ScrollMagic.Scene({
        triggerElement: '.index-content-progressbar',
        triggerHook: 0.8,
        reverse: false
      })
        .setTween(t5)
        .addTo(controller)
    } else {
      TweenMax.fromTo('.laptop-item1', 3, { autoAlpha: 0, y: '-300' }, { autoAlpha: 1, y: '0', ease: 'Expo.easeInOut' })
      TweenMax.fromTo('.laptop-item2', 3, { autoAlpha: 0, y: '-300' }, { autoAlpha: 1, y: '0', ease: 'Expo.easeInOut' })
      TweenMax.fromTo('.laptop-item3', 3, { autoAlpha: 0, y: '-300' }, { autoAlpha: 1, y: '0', ease: 'Expo.easeInOut' })
      // 耳機
      const t4 = new TimelineMax()
        .fromTo('.audio-item1', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.audio-item2', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.audio-item3', 0.5, { autoAlpha: 0, y: '200' }, { autoAlpha: 1, y: '0' })
      new ScrollMagic.Scene({
        triggerElement: '.index-content-audio',
        triggerHook: 0.4,
        reverse: false
      })
        .setTween(t4)
        .addTo(controller)
      let circle = $('.circleBar')
      let percentData = {
        num: 0
      }
      const t10 = new TimelineMax()
        .fromTo('.index-content-progressbar-circle', 0.5, { autoAlpha: 0, y: '-200' }, { autoAlpha: 1, y: '0' })
        .fromTo('.index-content-progressbar-right', 0.5, { autoAlpha: 0, x: '200', ease: 'Power0.easeInOut' },
          {
            autoAlpha: 1,
            x: '0'
          })
        .to('.progressbar-item1 .progress-bar', 2, { width: '80%', ease: 'Power4.easeInOut' })
        .to('.progressbar-item2 .progress-bar', 2, { width: '90%', ease: 'Power4.easeInOut' }, '-=2')
        .to('.progressbar-item3 .progress-bar', 2, { width: '97%', ease: 'Power4.easeInOut' }, '-=2')
        .to(percentData, 1, {
          num: this.circleOptions.percent,
          onUpdate: function () {
            circle.css('stroke-dashoffset', `calc(440 - (440 * ${percentData.num}) / 100)`)
          }
        }, '-=1')
        .to(percentData, 3, {
          num: this.circleOptions.percent,
          onUpdate: function () {
            $('.percentNumber').html(percentData.num.toFixed(0))
          }
        }, '-=1')
      new ScrollMagic.Scene({
        triggerElement: '.index-content-progressbar',
        triggerHook: 0.8,
        reverse: false
      })
        .setTween(t10)
        .addTo(controller)
    }
  }
}
</script>
<style scope lang="scss" >
.swiper-index-banner {
  background-color: #000 !important;
  height: auto !important;
}
</style>
