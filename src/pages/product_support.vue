<template>
  <div class="wrap">
    <div class="search-banner">
      <h3>產品支援頁</h3>
      <div class="search-input">
        <input type="text" placeholder="Search Support" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="search-btn"
          >
            <g>
              <g>
                <path
                  d="M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z     M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667    S302.646,384,202.667,384z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="content">
      <h4 class="text-center mt-5">請選擇支援產品</h4>
      <div class="product-support-cont">
        <div class="product-support-cont-item">
          <router-link to="">
            <img
              src="~@/assets/images/products/laptop/Razer Blade Pro 17 - QHD 165Hz - GeForce RTX 3060 - Black.png"
              alt=""
            />
          </router-link>
          筆電
        </div>
        <div class="product-support-cont-item">
          <router-link to="">
            <img
              src="~@/assets/images/products/keyboard/Razer BlackWidow Tournament Edition Chroma V2.png"
              alt=""
            />
          </router-link>
          鍵盤
        </div>
        <div class="product-support-cont-item">
          <router-link to="">
            <img
              src="~@/assets/images/products/mouse/Razer Viper Ultimate.png"
              alt=""
            />
          </router-link>
          滑鼠
        </div>
        <div class="product-support-cont-item">
          <router-link to="">
            <img
              src="~@/assets/images/products/audio/Razer Nari Ultimate.png"
              alt=""
            />
          </router-link>
          耳機
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '~@/assets/all.scss';
.search-banner {
  background: url(~@/assets/images/banner/search-banner2.jpg);
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.search-input {
  margin-top: 15px;
  display: flex;
  position: relative;
  width: 800px;
  @media (max-width: 768px) {
    width: 90%;
  }
  & > input {
    width: 100%;
    padding: 10px;
  }
  & > button {
    @media (max-width: 768px) {
      position: absolute;
      right: -10px;
    }
  }
}
.search-btn {
  position: absolute;
  right: 20px;
  top: 12px;
  fill: black;
  width: 20px;
  height: 20px;
  transition: all 0.5s;
  &:hover {
    fill: map-get($color, main);
  }
}
.product-support-cont {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  &-item {
    width: 200px;
    text-align: center;
    & > a {
      & > img {
        width: 100%;
      }
    }
  }
}
</style>
