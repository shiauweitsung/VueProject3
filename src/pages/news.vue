<template>
  <div class="wrap">
    <div class="banner">
      <img
        src="~@/assets/images/banner/banner11.jpg"
        alt=""
        style="width: 100%; height: 430px"
      />
      <p>全新世代，全新科技，最上手的產品</p>
    </div>
    <div class="content">
      <div class="news-cont">
        <div class="news-cont-item">
          <div class="news-cont-item-newpro">
            <div class="news-cont-item-newpro-pic">
              <img src="~@/assets/images/news/news1.jpg" alt="" />
            </div>
            <div class="news-cont-item-newpro-info">
              <h4>最新穎高科技螢幕</h4>
              <ul>
                <li>完美UI介面</li>
                <li>絢麗RGB色彩</li>
                <li>自動化亮度，保護眼睛</li>
                <li>眼球追焦感應</li>
              </ul>
              <div class="mt-5">
                <button class="commingSoon">Comming Soon</button>
              </div>
            </div>
          </div>
        </div>
        <h4 class="text-center m-3">搶先查看現有科技</h4>
        <div class="news-cont-item">
          <div class="news-cont-item-pro">
            <div class="news-cont-item-pro-1 news-cont-item-pro-list">
              <router-link
                :to="{ name: 'products', params: { category: '筆電' } }"
              >
                <img
                  src="@/assets/images/products/laptop/Razer Blade 15 Base Edition - OLED 4K 60Hz - GeForce RTX 2070 Max-Q - Mercury.png"
                  alt=""
                />
                <p>Razer Blade 15 Base Edition</p>
                <p>Watch Now</p>
              </router-link>
            </div>
            <div class="news-cont-item-pro-2 news-cont-item-pro-list">
              <router-link
                :to="{ name: 'products', params: { category: '滑鼠' } }"
              >
                <img
                  src="@/assets/images/products/mouse/Razer Mamba Elite.png"
                  alt=""
                />
                <p>Razer Mamba Elite</p>
                <p>Watch Now</p>
              </router-link>
            </div>
            <div class="news-cont-item-pro-3 news-cont-item-pro-list">
              <router-link
                :to="{ name: 'products', params: { category: '鍵盤' } }"
              >
                <img
                  src="@/assets/images/products/keyboard/Razer BlackWidow V3 - Green Switch - US - Quartz.png"
                  alt=""
                />
                <p>Razer BlackWidow V3 - Green Switch - US - Quartz</p>
                <p>Watch Now</p>
              </router-link>
            </div>
            <div class="news-cont-item-pro-4 news-cont-item-pro-list">
              <router-link
                :to="{ name: 'products', params: { category: '筆電' } }"
              >
                <img
                  src="@/assets/images/products/audio/Razer Kraken Kitty - Black.png"
                  alt=""
                />
                <p>Razer Kraken Kitty - Black</p>
                <p>Watch Now</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="news-cont-comming">
          <h4 class="mb-4">超強掌握度、極致靈敏按鍵、超高速散熱</h4>
          <button class="commingSoon">Comming Soon...</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '~@/assets/all.scss';
.news-cont {
  &-item {
    &-newpro {
      display: flex;
      width: 80%;
      margin: auto;
      max-width: 1200px;
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 576px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
      &-pic {
        width: 40%;
        & > img {
          width: 100%;
        }
        @media (max-width: 576px) {
          width: 80%;
          margin-bottom: 15px;
        }
      }
      &-info {
        width: 60%;
        padding-left: 70px;
        @media (max-width: 576px) {
          padding-left: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        & > h4 {
          margin-bottom: 15px;
        }
        & > ul {
          & > li {
            margin-bottom: 5px;
            list-style: disc;
          }
        }
      }
    }
    &-pro {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      &-list {
        max-width: 35%;
        flex-basis: 35%;
        border: 1px solid map-get($color, bgcolor);
        border-radius: 3px;
        transform: all 0.4s;
        margin: 1%;
        &:hover {
          border: 1px solid map-get($color, second);
        }
        & > a {
          display: block;
          text-align: center;
          color: map-get($color, three);
          padding-bottom: 10px;
          & > img {
            @media (max-width: 1100px) {
              width: 100%;
            }
          }
        }
      }
    }
  }
  &-comming {
    margin-top: 30px;
    height: 210px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > button {
      color: map-get($color, three);
      display: inline-block;
    }
  }
}
.commingSoon {
  border: 2px solid;
  margin: 0.5em;
  padding: 1em 2em;
  color: white;
  transition: 0.25s;
  position: relative;
  animation: pulse 1s infinite;
  border-radius: 20px;
  box-shadow: 0 0 0 1em rgba(#fff, 0);
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1em rgba(#fff, 0);
    animation-name: pulse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 map-get($color, main);
  }
}
</style>
