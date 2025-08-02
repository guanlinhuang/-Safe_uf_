<template>
  <div class="home">
    <div class="container">
      <h3 class="text-center my-4 text-danger">蝦皮購物快速領券</h3>
      <div class="row row-cols-1 w-75 mx-auto mt-4">
        <div class="col px-0">
          <a href="https://s.shopee.tw/5VI2lgm0ob" class="btn btn-danger w-100"
            >直播活動券預先領</a
          >
        </div>
        <div class="col d-flex justify-content-center pt-2">
          <img src="https://meee.com.tw/VIb9Idp.png" alt="" class="w-100" />
        </div>
      </div>
      <div class="pt-5">
        <p class="text-center text-danger fw-bolde" style="font-size: 13px">
          * 序號於點擊時已經<span class="fw-bolder" style="font-size: 15px"
            >自動複製</span
          >了喲 *
        </p>
        <p class="text-center text-warning-emphasis">
          點擊後至「優惠代碼區」直接「貼上」
        </p>
        <h6 class="text-center mb-0 pt-4 pb-2">此由ㄚㄋㄚˋ直播主彙整</h6>
        <div class="d-flex justify-content-center">
          <img src="https://meee.com.tw/87SskOK.png" alt="" class="w-75" />
        </div>
      </div>
      <div class="mt-4">
        <h3 class="text-center mb-0" style="color: #004b97">
          四大超商取件滿$299-$30
        </h3>
        <div class="row row-cols-1 g-3 pt-2">
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('SPSV6')"
            >
              全站 711
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('FMSP')"
            >
              全站 全家
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('APSEVEN6')"
            >
              商城 711
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('APP618FM')"
            >
              商城 全家
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('HLAPP6')"
            >
              商城 萊爾富
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning w-75"
              style="color: #004b97"
              @click="copyCuponCode('OK6APP')"
            >
              商城 OK
            </button>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 w-75 mx-auto g-3 mt-5">
        <div class="col px-0">
          <a href="https://s.shopee.tw/5putAIkk8h" class="btn btn-warning w-100"
            >免運店家免運資訊</a
          >
          <img
            src="https://meee.com.tw/FwTpEOG.png"
            alt=""
            class="w-100 pt-3"
          />
        </div>
      </div>
      <div class="row row-cols-1 w-75 mx-auto g-3 mt-5">
        <div class="col px-0">
          <a
            href="https://s.shopee.tw/8zueMOmrGW"
            class="btn btn-primary w-100 text-dark"
            style="--bs-btn-bg: #0080ff"
            >短影音每日簽到</a
          >
        </div>
        <div class="col px-0">
          <a
            href="https://s.shopee.tw/AKQ1wvMihG"
            class="btn btn-primary w-100 text-dark"
            style="--bs-btn-bg: #0080ff"
            >短影音領券</a
          >
        </div>
        <div class="col px-0">
          <a
            href="https://wooo.tw/E2pZ2qt"
            class="btn btn-primary w-100 text-dark"
            style="--bs-btn-bg: #0080ff"
            >短影音一起同樂 密碼打數字<span class="text-danger fs-5">
              11</span
            ></a
          >
        </div>
        <img src="https://meee.com.tw/j3nCYq8.png" alt="" class="w-100 pb-5" />
      </div>
    </div>
    <div
      class="follow d-flex justify-content-center py-3 bg-black align-items-center"
    >
      <a
        href="https://line.me/ti/g2/k1kiK4DJwQGfW95nzVYao-iKk3hGneEHfmr_Qw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
        ><i class="bi bi-line text-white mx-2" style="font-size: 30px"></i
      ></a>
      <a
        href="https://www.instagram.com/safe_uf_?igsh=NmJ1emJqNDZ3M3d0&utm_source=qr"
        ><i class="bi bi-instagram text-white mx-2" style="font-size: 30px"></i
      ></a>
      <p class="text-white mb-0">@Safe_uf_</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyCuponCode (text) {
      navigator.clipboard.writeText(text).then(() => {
        window.location.href = 'https://s.shopee.tw/1LTxyg3hCb'
      })
    }
  }
}
</script>
