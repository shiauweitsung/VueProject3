<template>
  <div class="circle">
    <div class="card">
      <div class="box">
        <div class="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle class="circleBar" cx="70" cy="70" r="70"></circle>
          </svg>
          <div class="number">
            <h2><span class="percentNumber">0</span><span>%</span></h2>
          </div>
        </div>
      </div>
      <div class="input-content">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'
export default {
  name: 'circles',
  mounted () {
    const circle = $('.circleBar')
    let percentData = {
      num: 0
    }
    $('input').on('change', function () {
      let length = $('input').length
      let lengthPercent = (100 / length).toFixed(2)
      let hasPercent = $('input').filter(function () {
        return $(this).val() !== ''
      }).length
      let percent = (hasPercent * lengthPercent)
      console.log(percent)
      TweenMax.to(percentData, 1.5, {
        num: percent,
        ease: 'slow(0.7, 0.7, false)',
        onUpdate: function () {
          if (Number(percent) > 100) {
            $('.percentNumber').html(percentData.num.toFixed(0))
          } else {
            $('.percentNumber').html(percentData.num.toFixed(2))
          }
        }
      })
      circle.css('stroke-dashoffset', `calc(440 - (440 * ${percent}) / 100)`)
    })
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
    stroke: grey;
    stroke-width: 9;
  }
  circle:nth-child(2) {
    stroke: pink;
    stroke-dasharray: 440;
    transition: stroke-dashoffset 1.5s linear;
    stroke-dashoffset: calc(440 - (440 * 0) / 100);
  }
}
.input-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 90%;
  margin: auto;
  input {
    width: 200px;
    margin-top: 20px;
    padding: 5px 8px;
    border-radius: 4px;
  }
}
</style>
