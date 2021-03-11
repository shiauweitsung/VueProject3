<template>
  <div class="circle">
    <div class="box">
      <div class="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle class="circleBar" cx="70" cy="70" r="70"></circle>
        </svg>
        <div class="number">
          <h2>
            <span class="percentNumber">{{ progress.percent }}</span
            ><span>%</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'
export default {
  name: 'circles',
  props: ['progress'],
  mounted () {
    const circle = $('.circleBar')
    let percentData = {
      num: 0
    }
    const t1 = new TimelineMax()
    t1.to(percentData, 1, {
      num: 90,
      onUpdate: function () {
        circle.css('stroke-dashoffset', `calc(440 - (440 * ${percentData.num}) / 100)`)
      }
    })
    t1.to(percentData, 3, {
      num: 90,
      onUpdate: function () {
        $('.percentNumber').html(percentData.num.toFixed(0))
      }
    }, '-=1')
  }
}
</script>
<style lang="scss" scoped>
svg {
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: none;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }
  circle:nth-child(1) {
    stroke: #bdbebf;
    stroke-width: 9;
  }
  circle:nth-child(2) {
    stroke: #34e89e;
    stroke-dasharray: 440;
    transition: stroke-dashoffset 1.5s linear;
    stroke-dashoffset: calc(440 - (440 * 0) / 100);
  }
}
</style>
