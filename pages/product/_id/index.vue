<template>
  <div class="container">
    <div class="productPage_mobile_header">
        <label>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L1 8L8 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <input action="action" style="display:none" type="button" value="Back" onclick="window.history.go(-1); return false;" />
        </label>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6667 7.99981V9.33315C10.6667 10.0685 10.0687 10.6665 9.33333 10.6665H6.66666C5.93133 10.6665 5.33333 10.0685 5.33333 9.33315V7.99981H0V13.9998C0 15.1025 0.897333 15.9998 2 15.9998H14C15.1027 15.9998 16 15.1025 16 13.9998V7.99981H10.6667ZM14.6667 13.9998C14.6667 14.3678 14.368 14.6665 14 14.6665H2C1.632 14.6665 1.33333 14.3678 1.33333 13.9998V9.33315H4C4 10.8038 5.196 11.9998 6.66666 11.9998H9.33333C10.804 11.9998 12 10.8038 12 9.33315H14.6667V13.9998ZM5.80466 3.52848L4.862 2.58581L7.05733 0.390477C7.57666 -0.128857 8.42333 -0.128857 8.94266 0.390477L11.138 2.58581L10.1953 3.52848L8.66666 1.99981V7.33314H7.33333V1.99981L5.80466 3.52848Z" fill="#272727"/>
        </svg>
    </div>
    <!-- <Breadcrumb :positions="positions"/> -->
    <div class="productPage" v-if="product">
      <div class="productPage_images">
        <div class="big_image">
          <img v-bind:src="$config.url+'/'+dynamicProduct.images[0]" v-if="dynamicProduct.images.length" alt="">
          <!-- <img v-bind:src="$config.url+'/'+product.images[0].image" v-if="product.images[0].image" alt=""> -->
        </div>
        <div class="small_image" v-if="dynamicProduct.images.length>1">
          <div class="small_image_image active" v-for="(image,i) in dynamicProduct.images" :key="i" @click="imageChange(i)">
            <img v-bind:src="$config.url+'/'+image" v-if="image" alt="">
          </div>
        </div>
      </div>

      <div class="productPage_info" :class="mode">
        <div class="info_price">
          <div class="info_price_new" v-if="dynamicProduct.price"><span>{{dynamicProduct.price}}</span><span>manat</span></div>
          <div class="info_price_old" v-if="dynamicProduct.price_old">{{dynamicProduct.price_old}}manat <span></span></div>
          <div class="info_price_liked">
            <svg v-if="!liked" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2711 0.891479C16.1919 0.908265 15.1363 1.20951 14.2109 1.76478C13.2854 2.32006 12.5229 3.1097 12.0002 4.05398C11.4776 3.1097 10.7151 2.32006 9.78959 1.76478C8.86414 1.20951 7.80854 0.908265 6.72941 0.891479C5.00915 0.966221 3.38838 1.71876 2.2212 2.9847C1.05403 4.25064 0.435317 5.92707 0.500245 7.64773C0.500245 12.0053 5.08683 16.7644 8.93358 19.9911C9.79245 20.7128 10.8784 21.1085 12.0002 21.1085C13.1221 21.1085 14.208 20.7128 15.0669 19.9911C18.9137 16.7644 23.5002 12.0053 23.5002 7.64773C23.5652 5.92707 22.9465 4.25064 21.7793 2.9847C20.6121 1.71876 18.9913 0.966221 17.2711 0.891479ZM13.8354 18.5248C13.3218 18.9574 12.6718 19.1946 12.0002 19.1946C11.3287 19.1946 10.6787 18.9574 10.165 18.5248C5.24112 14.3934 2.41691 10.4298 2.41691 7.64773C2.3514 6.43516 2.76801 5.24589 3.57588 4.33927C4.38376 3.43266 5.51734 2.88227 6.72941 2.80815C7.94148 2.88227 9.07506 3.43266 9.88294 4.33927C10.6908 5.24589 11.1074 6.43516 11.0419 7.64773C11.0419 7.90189 11.1429 8.14565 11.3226 8.32537C11.5023 8.50509 11.7461 8.60606 12.0002 8.60606C12.2544 8.60606 12.4982 8.50509 12.6779 8.32537C12.8576 8.14565 12.9586 7.90189 12.9586 7.64773C12.8931 6.43516 13.3097 5.24589 14.1175 4.33927C14.9254 3.43266 16.059 2.88227 17.2711 2.80815C18.4831 2.88227 19.6167 3.43266 20.4246 4.33927C21.2325 5.24589 21.6491 6.43516 21.5836 7.64773C21.5836 10.4298 18.7594 14.3934 13.8354 18.521V18.5248Z" fill="#616161"/>
            </svg>
            <svg v-else width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2706 0.891602C16.1915 0.908387 15.1359 1.20963 14.2104 1.7649C13.2849 2.32018 12.5224 3.10983 11.9998 4.0541C11.4771 3.10983 10.7146 2.32018 9.78911 1.7649C8.86365 1.20963 7.80805 0.908387 6.72892 0.891602C5.00866 0.966343 3.38789 1.71889 2.22071 2.98482C1.05354 4.25076 0.434829 5.92719 0.499757 7.64785C0.499757 12.0054 5.08634 16.7645 8.93309 19.9912C9.79196 20.7129 10.8779 21.1086 11.9998 21.1086C13.1216 21.1086 14.2075 20.7129 15.0664 19.9912C18.9132 16.7645 23.4998 12.0054 23.4998 7.64785C23.5647 5.92719 22.946 4.25076 21.7788 2.98482C20.6116 1.71889 18.9909 0.966343 17.2706 0.891602Z" fill="#FF141D"/>
            </svg>
            <span>{{product.likeCount}}</span>
          </div>
        </div>

        <div class="info_name">{{product[language.name]}}</div> 

        <div class="info_definition">{{product[language.body]}}</div>

        <div class="info_kind" v-if="product.product_colors.length">
          <div class="info_title">{{$t('kind')}}</div>
          <div class="info_kind_images">
            <img v-for="(color,i) in product.product_colors" :key="i" v-bind:src="$config.url+'/'+color.product_images[0].image" @click="colorChange(i)" alt="">
          </div>
        </div>
        
        <div class="info_size" v-if="dynamicProduct.sizes.length">
          <div class="info_title">{{$t('size')}}</div>
          <div class="info_size_sizes">
            <div class="size" :class="i == 0 ? 'active' : ''" v-for="(size,i) in dynamicProduct.sizes" :key="i" @click="sizeChange(i)">{{size.size}}</div>
          </div>
        </div>

        <div class="info_quantity-totalPrice">
          <div class="top">
            <div class="top_mukdar">
              <div class="top_mukdar_title">{{$t('quantity')}}</div>
              <div class="top_mukdar_count">
                <button @click="quantityChange(1)">-</button>
                <span>{{this.dynamicProduct.quantity}}</span>
                <button @click="quantityChange(2)">+</button>
              </div>
            </div>
            <div class="top_price">
              {{dynamicProduct.totalPrice}}<span>manat</span>
            </div>
          </div>
          <div class="bottom">
            <nuxt-link to="/" class="bottom_home mob">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 7.44772 17.5523 7 17 7C16.4477 7 16 7.44772 16 8H18ZM4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8H4ZM18.2929 10.7071C18.6834 11.0976 19.3166 11.0976 19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L18.2929 10.7071ZM10 1L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893L10 1ZM0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683417 11.0976 1.31658 11.0976 1.70711 10.7071L0.292893 9.29289ZM5 20H15V18H5V20ZM18 17V8H16V17H18ZM4 17V8H2V17H4ZM19.7071 9.29289L10.7071 0.292893L9.29289 1.70711L18.2929 10.7071L19.7071 9.29289ZM9.29289 0.292893L0.292893 9.29289L1.70711 10.7071L10.7071 1.70711L9.29289 0.292893ZM15 20C16.6569 20 18 18.6569 18 17H16C16 17.5523 15.5523 18 15 18V20ZM5 18C4.44772 18 4 17.5523 4 17H2C2 18.6569 3.34315 20 5 20V18Z" fill="#272727"/>
              </svg>
              <span>{{$t('home')}}</span>
            </nuxt-link>
            <div class="bottom_brand" @click="$router.push(`/brand/${product.brand.brand_id}`)">{{$t('brandProducts')}}</div>
            <div class="bottom_like mob" @click="likeFunction">
              <svg v-if="!liked" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7755 0.390625C15.6963 0.40741 14.6407 0.708651 13.7153 1.26393C12.7898 1.8192 12.0273 2.60885 11.5046 3.55312C10.982 2.60885 10.2194 1.8192 9.29399 1.26393C8.36853 0.708651 7.31294 0.40741 6.2338 0.390625C4.51354 0.465366 2.89277 1.21791 1.7256 2.48385C0.558421 3.74978 -0.0602882 5.42621 0.00463939 7.14687C0.00463939 11.5044 4.59122 16.2635 8.43797 19.4902C9.29685 20.212 10.3828 20.6076 11.5046 20.6076C12.6265 20.6076 13.7124 20.212 14.5713 19.4902C18.4181 16.2635 23.0046 11.5044 23.0046 7.14687C23.0696 5.42621 22.4509 3.74978 21.2837 2.48385C20.1165 1.21791 18.4957 0.465366 16.7755 0.390625ZM13.3398 18.024C12.8262 18.4565 12.1762 18.6937 11.5046 18.6937C10.8331 18.6937 10.1831 18.4565 9.66943 18.024C4.74551 13.8926 1.92131 9.92892 1.92131 7.14687C1.85579 5.93431 2.27241 4.74503 3.08028 3.83842C3.88815 2.93181 5.02174 2.38142 6.2338 2.30729C7.44587 2.38142 8.57946 2.93181 9.38733 3.83842C10.1952 4.74503 10.6118 5.93431 10.5463 7.14687C10.5463 7.40104 10.6473 7.6448 10.827 7.82452C11.0067 8.00424 11.2505 8.10521 11.5046 8.10521C11.7588 8.10521 12.0026 8.00424 12.1823 7.82452C12.362 7.6448 12.463 7.40104 12.463 7.14687C12.3975 5.93431 12.8141 4.74503 13.6219 3.83842C14.4298 2.93181 15.5634 2.38142 16.7755 2.30729C17.9875 2.38142 19.1211 2.93181 19.929 3.83842C20.7369 4.74503 21.1535 5.93431 21.088 7.14687C21.088 9.92892 18.2638 13.8926 13.3398 18.0201V18.024Z" fill="#616161"/>
              </svg>
              <svg v-else width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2706 0.891602C16.1915 0.908387 15.1359 1.20963 14.2104 1.7649C13.2849 2.32018 12.5224 3.10983 11.9998 4.0541C11.4771 3.10983 10.7146 2.32018 9.78911 1.7649C8.86365 1.20963 7.80805 0.908387 6.72892 0.891602C5.00866 0.966343 3.38789 1.71889 2.22071 2.98482C1.05354 4.25076 0.434829 5.92719 0.499757 7.64785C0.499757 12.0054 5.08634 16.7645 8.93309 19.9912C9.79196 20.7129 10.8779 21.1086 11.9998 21.1086C13.1216 21.1086 14.2075 20.7129 15.0664 19.9912C18.9132 16.7645 23.4998 12.0054 23.4998 7.64785C23.5647 5.92719 22.946 4.25076 21.7788 2.98482C20.6116 1.71889 18.9909 0.966343 17.2706 0.891602Z" fill="#FF141D"/>
              </svg>
              <span>{{$t('liked')}}</span>
            </div>
            <nuxt-link class="bottom_admin mob" to="/chat">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99935 19.0087C9.42435 19.0087 8.88268 18.717 8.49935 18.2087L7.24935 16.542C7.22435 16.5087 7.12435 16.467 7.08268 16.4587H6.66602C3.19102 16.4587 1.04102 15.517 1.04102 10.8337V6.66699C1.04102 2.98366 2.98268 1.04199 6.66602 1.04199H13.3327C17.016 1.04199 18.9577 2.98366 18.9577 6.66699V10.8337C18.9577 14.517 17.016 16.4587 13.3327 16.4587H12.916C12.8493 16.4587 12.791 16.492 12.7493 16.542L11.4993 18.2087C11.116 18.717 10.5743 19.0087 9.99935 19.0087ZM6.66602 2.29199C3.68268 2.29199 2.29102 3.68366 2.29102 6.66699V10.8337C2.29102 14.6003 3.58268 15.2087 6.66602 15.2087H7.08268C7.50768 15.2087 7.99101 15.4503 8.24935 15.792L9.49935 17.4587C9.79101 17.842 10.2077 17.842 10.4993 17.4587L11.7493 15.792C12.0243 15.4253 12.4577 15.2087 12.916 15.2087H13.3327C16.316 15.2087 17.7077 13.817 17.7077 10.8337V6.66699C17.7077 3.68366 16.316 2.29199 13.3327 2.29199H6.66602Z" fill="#272727"/>
                <path d="M14.1673 7.29199H5.83398C5.49232 7.29199 5.20898 7.00866 5.20898 6.66699C5.20898 6.32533 5.49232 6.04199 5.83398 6.04199H14.1673C14.509 6.04199 14.7923 6.32533 14.7923 6.66699C14.7923 7.00866 14.509 7.29199 14.1673 7.29199Z" fill="#272727"/>
                <path d="M10.834 11.458H5.83398C5.49232 11.458 5.20898 11.1747 5.20898 10.833C5.20898 10.4913 5.49232 10.208 5.83398 10.208H10.834C11.1757 10.208 11.459 10.4913 11.459 10.833C11.459 11.1747 11.1757 11.458 10.834 11.458Z" fill="#272727"/>
              </svg>
              <span>{{$t('chatToAdmin')}}</span>
            </nuxt-link>
            <div class="bottom_addCart desktopAddCart" v-if="!hasCart" @click="addToCart">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1997_15920)">
                <path d="M18.9373 3.8975C18.7029 3.6162 18.4094 3.38996 18.0777 3.23485C17.746 3.07973 17.3843 2.99955 17.0181 3H3.54477L3.50977 2.7075C3.43814 2.09952 3.14592 1.53894 2.68851 1.13206C2.2311 0.725186 1.64029 0.500285 1.0281 0.5L0.843099 0.5C0.622085 0.5 0.410124 0.587797 0.253843 0.744078C0.097563 0.900358 0.00976563 1.11232 0.00976562 1.33333C0.00976563 1.55435 0.097563 1.76631 0.253843 1.92259C0.410124 2.07887 0.622085 2.16667 0.843099 2.16667H1.0281C1.23221 2.16669 1.42921 2.24163 1.58174 2.37726C1.73427 2.5129 1.83172 2.69979 1.8556 2.9025L3.00227 12.6525C3.12131 13.6665 3.6085 14.6015 4.37136 15.28C5.13421 15.9585 6.11964 16.3334 7.1406 16.3333H15.8431C16.0641 16.3333 16.2761 16.2455 16.4324 16.0893C16.5886 15.933 16.6764 15.721 16.6764 15.5C16.6764 15.279 16.5886 15.067 16.4324 14.9107C16.2761 14.7545 16.0641 14.6667 15.8431 14.6667H7.1406C6.62481 14.6652 6.1221 14.5043 5.70138 14.2059C5.28066 13.9075 4.96253 13.4863 4.7906 13H14.7239C15.7008 13.0001 16.6467 12.6569 17.3963 12.0304C18.1459 11.4039 18.6515 10.5339 18.8248 9.5725L19.4789 5.94417C19.5442 5.58417 19.5296 5.21422 19.4359 4.86053C19.3423 4.50684 19.1721 4.17806 18.9373 3.8975ZM17.8431 5.64833L17.1881 9.27667C17.084 9.85417 16.7802 10.3767 16.3297 10.7527C15.8791 11.1287 15.3107 11.3342 14.7239 11.3333H4.5256L3.74143 4.66667H17.0181C17.1405 4.66594 17.2616 4.69218 17.3727 4.74355C17.4838 4.79491 17.5823 4.87012 17.661 4.96384C17.7398 5.05756 17.7969 5.16748 17.8284 5.28578C17.8599 5.40409 17.8649 5.52787 17.8431 5.64833Z" fill="#FAFAFA"/>
                <path d="M5.84245 20.4994C6.76292 20.4994 7.50912 19.7532 7.50912 18.8327C7.50912 17.9122 6.76292 17.166 5.84245 17.166C4.92197 17.166 4.17578 17.9122 4.17578 18.8327C4.17578 19.7532 4.92197 20.4994 5.84245 20.4994Z" fill="#FAFAFA"/>
                <path d="M14.1764 20.4994C15.0969 20.4994 15.8431 19.7532 15.8431 18.8327C15.8431 17.9122 15.0969 17.166 14.1764 17.166C13.256 17.166 12.5098 17.9122 12.5098 18.8327C12.5098 19.7532 13.256 20.4994 14.1764 20.4994Z" fill="#FAFAFA"/>
                </g>
                <defs>
                <clipPath id="clip0_1997_15920">
                <rect width="20" height="20" fill="white" transform="translate(0.00976562 0.5)"/>
                </clipPath>
                </defs>
              </svg>
              <span>{{$t('addCart')}}</span>
            </div>
            <div class="bottom_addCart hasCart desktopAddCart" v-else @click="deleteFromCart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{$t('deleteFromCart')}}</span>
            </div>
            <!-- For mobile -->
            <div class="bottom_addCart" v-if="!hasCart" @click="openMobileInfo">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1997_15920)">
                <path d="M18.9373 3.8975C18.7029 3.6162 18.4094 3.38996 18.0777 3.23485C17.746 3.07973 17.3843 2.99955 17.0181 3H3.54477L3.50977 2.7075C3.43814 2.09952 3.14592 1.53894 2.68851 1.13206C2.2311 0.725186 1.64029 0.500285 1.0281 0.5L0.843099 0.5C0.622085 0.5 0.410124 0.587797 0.253843 0.744078C0.097563 0.900358 0.00976563 1.11232 0.00976562 1.33333C0.00976563 1.55435 0.097563 1.76631 0.253843 1.92259C0.410124 2.07887 0.622085 2.16667 0.843099 2.16667H1.0281C1.23221 2.16669 1.42921 2.24163 1.58174 2.37726C1.73427 2.5129 1.83172 2.69979 1.8556 2.9025L3.00227 12.6525C3.12131 13.6665 3.6085 14.6015 4.37136 15.28C5.13421 15.9585 6.11964 16.3334 7.1406 16.3333H15.8431C16.0641 16.3333 16.2761 16.2455 16.4324 16.0893C16.5886 15.933 16.6764 15.721 16.6764 15.5C16.6764 15.279 16.5886 15.067 16.4324 14.9107C16.2761 14.7545 16.0641 14.6667 15.8431 14.6667H7.1406C6.62481 14.6652 6.1221 14.5043 5.70138 14.2059C5.28066 13.9075 4.96253 13.4863 4.7906 13H14.7239C15.7008 13.0001 16.6467 12.6569 17.3963 12.0304C18.1459 11.4039 18.6515 10.5339 18.8248 9.5725L19.4789 5.94417C19.5442 5.58417 19.5296 5.21422 19.4359 4.86053C19.3423 4.50684 19.1721 4.17806 18.9373 3.8975ZM17.8431 5.64833L17.1881 9.27667C17.084 9.85417 16.7802 10.3767 16.3297 10.7527C15.8791 11.1287 15.3107 11.3342 14.7239 11.3333H4.5256L3.74143 4.66667H17.0181C17.1405 4.66594 17.2616 4.69218 17.3727 4.74355C17.4838 4.79491 17.5823 4.87012 17.661 4.96384C17.7398 5.05756 17.7969 5.16748 17.8284 5.28578C17.8599 5.40409 17.8649 5.52787 17.8431 5.64833Z" fill="#FAFAFA"/>
                <path d="M5.84245 20.4994C6.76292 20.4994 7.50912 19.7532 7.50912 18.8327C7.50912 17.9122 6.76292 17.166 5.84245 17.166C4.92197 17.166 4.17578 17.9122 4.17578 18.8327C4.17578 19.7532 4.92197 20.4994 5.84245 20.4994Z" fill="#FAFAFA"/>
                <path d="M14.1764 20.4994C15.0969 20.4994 15.8431 19.7532 15.8431 18.8327C15.8431 17.9122 15.0969 17.166 14.1764 17.166C13.256 17.166 12.5098 17.9122 12.5098 18.8327C12.5098 19.7532 13.256 20.4994 14.1764 20.4994Z" fill="#FAFAFA"/>
                </g>
                <defs>
                <clipPath id="clip0_1997_15920">
                <rect width="20" height="20" fill="white" transform="translate(0.00976562 0.5)"/>
                </clipPath>
                </defs>
              </svg>
              <span>{{$t('addCart')}}</span>
            </div>
            <div class="bottom_addCart hasCart" v-else @click="deleteFromCart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{$t('deleteFromCart')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="category_header" :class="mode" v-if="recommenendations.products.length>0">
      <div class="category_header_left">
        <div class="name">{{$t('recommendation')}}</div>
      </div>
      <nuxt-link to="/" class="seeAll" :class="mode">{{$t('seeAll')}}</nuxt-link>
    </div>

    <div class="productPage_teklipProducts" v-if="recommenendations.products.length>0">
      <Product v-for="(product,i) in recommenendations.products" :key="i" :product="product"/>
    </div>

    <div class="category_header" v-if="product.details.length">
      <div class="category_header_left">
        <div class="name">{{$t('detail')}}</div>
      </div>
    </div>
    <div class="productPage_detail">
      <img v-for="(image,i) in product.details" :key="i" v-bind:src="$config.url+'/'+image.image"  alt="">
    </div>
    <ProductInfo @close-productInfo="resInfo = false" @color="colorChange" @size="sizeChange" @quantity="quantityChange" :product="product" :dynamicProduct="dynamicProduct" v-show="resInfo"/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb';
import Product from '~/components/Product';
import ProductInfo from '~/components/responsive/ProductInfo';
import Loading from '~/components/Loading';
import { mapGetters } from 'vuex';
export default {
  components:{Breadcrumb,Product,ProductInfo},
  data(){
    return{
      liked:false,
      resInfo:false, 
      gallery:[],
      hasCart:false,
      globalColor:0,
      globalSize:0,
      globalOrderProductId:'',
      dynamicProduct:{
        quantity:1,
        sizeId:'',
        price:0,
        price_old:0,
        totalPrice:0,
        images:[],
        sizes:[]
      }
    }
  },
  async asyncData({ $axios, route , store}) {
    const user = store.state.user.user;
    let globalUser = 'public';
    if(user){
      globalUser = 'users';
      try {
        await $axios.post("/users/history",{product_id:route.params.id});
      } catch ({response}) {
        console.log(response.data.message);
      }
    }
    try {
      const productId = route.params.id;
      let { data } = await $axios.get(`/${globalUser}/products/${productId}`);
      const product = data.product.oneProduct;
      const {recommenendations} = data.product;
      return { product, recommenendations }
    } catch (err) {
      console.log(err)
    }
  },
  async mounted(){
    this.createDynamicProduct(0,0);
    this.colorChange(0);
    this.liked = this.product.isLiked;    
  },
  computed:{
    ...mapGetters({
      mode: 'mode/mode',
      language:'dynamicLang/language',
      user:"user/user",
    }),
  },
  methods:{
    async likeFunction(){
      if(this.user){
        const product_id = this.$route.params.id;
        if(!this.liked){
          try {
            this.$nuxt.$emit('loading')
            const res = await this.$axios.post("/users/like",{product_id})
            if(res.status = 200){
              this.liked = true;
              this.product.likeCount+=1;
              this.$nuxt.$emit('loading')
            }
          } catch ({response}) {
            console.log(response.data.message)
          }
        }else{
          try {
            this.$nuxt.$emit('loading')
            const res = await this.$axios.delete(`/users/like/${product_id}`)
            if(res.status = 200){
              this.liked = false;
              this.product.likeCount-=1;
              this.$nuxt.$emit('loading')
            }
          } catch ({response}) {
            console.log(response.data.message)
          }
        }
      }else{
        this.$toast.success(this.$t('firstlyRegister'))
      }
    },
    imageChange(id){
      const big = document.querySelector('.big_image img');
      const smalls = document.querySelectorAll('.small_image_image');
      big.setAttribute('src',smalls[id].querySelector('img').getAttribute('src'))
      for(let i =0; i<smalls.length; i++){
        smalls[i].classList.remove('active');
      }
      smalls[id].classList.add("active");
    },
    colorChange(id){
      this.globalColor = id;
      if(this.product.product_colors.length){
        this.globalSize = 0;
        this.createDynamicProduct(id,0);
        const colors = document.querySelectorAll(".info_kind_images img");
        for(let i = 0; i<colors.length; i++){
          colors[i].classList.remove("active");
        }
        colors[id].classList.add("active");

        let sizes = document.querySelectorAll(".size");
        for(let i = 0; i<sizes.length; i++){
          sizes[i].classList.remove('active');
        }
        sizes.length ? sizes[0].classList.add('active') : '';
      }else{
        this.createDynamicProduct(id,0);
      }
    },
    sizeChange(id){
      this.globalSize = id;
      if(this.dynamicProduct.sizes.length){
        this.createDynamicProduct(this.globalColor,id);
        let sizes = document.querySelectorAll(".size");
        for(let i = 0; i<sizes.length; i++){
          sizes[i].classList.remove('active');
        }
        sizes[id].classList.add('active');
      }
    },
    async quantityChange(id){
      if(id == 1){
        this.dynamicProduct.quantity -=1;
      }else if(id == 2){
        this.dynamicProduct.quantity +=1;
      }
      this.dynamicProduct.totalPrice = this.dynamicProduct.quantity * this.dynamicProduct.price;
      if(this.hasCart){
        try {
          this.$nuxt.$emit('loading')
          const res = await this.$axios.patch(`/users/my-cart/${this.globalOrderProductId}`,{quantity:this.dynamicProduct.quantity});
          if(res.status == 200){
            this.$nuxt.$emit('loading')
          }
        } catch ({response}) {
          console.log(response.data.message);
        }
      }
    },
    async addToCart(){
      if(this.user){
        try {
          this.$nuxt.$emit('loading')
          const res = await this.$axios.post(`/users/to-my-cart`,{product_id:this.$route.params.id,quantity:this.dynamicProduct.quantity,product_size_id:this.dynamicProduct.sizeId});
          if(res.status == 201){
            this.globalOrderProductId = res.data.orderproduct_id;
            this.hasCart = true;
            this.$nuxt.$emit('loading')
          }
        } catch ({response}) {
          console.log(response.data.message);
        }
      }else{
        this.$toast.success(this.$t('firstlyRegister'));
      }
    },
    async deleteFromCart(){
      try {
        this.$nuxt.$emit('loading')
        const {status} = await this.$axios.delete(`/users/not-ordered/${this.$route.params.id}`);
        if(status == 200){
          this.hasCart = false;
          this.$nuxt.$emit('loading')
        }      
      } catch ({response}) {
        console.log(response.data.message);
      }
    },
    async createDynamicProduct(colorId,sizeId){
      if(this.user){
        try {
          let size=''
          if(this.product.product_colors.length){
            size = this.product.product_colors[colorId].product_sizes[sizeId].product_size_id
          }else if(this.product.product_sizes.length){
            size = this.product.product_sizes[sizeId].product_size_id
          }
          this.$nuxt.$emit('loading');
          const res = await this.$axios.get(`/users/is-ordered?product_id=${this.product.product_id}&product_size_id=${size}`);
          if(res.data.status == 1){
            this.globalOrderProductId = res.data.order_product.orderproduct_id;
            this.hasCart = true;
            this.dynamicProduct.quantity = res.data.order_product.quantity;
            this.dynamicProduct.totalPrice = res.data.order_product.total_price;
            this.dynamicProduct.price = res.data.order_product.price;
          }else{
            this.hasCart = false;
            this.dynamicProduct.quantity = 1;
            if(this.product.product_colors.length){
              this.dynamicProduct.sizeId = this.product.product_colors[this.globalColor].product_sizes[sizeId].product_size_id;
              this.dynamicProduct.totalPrice = this.product.product_colors[this.globalColor].product_sizes[sizeId].price;
              this.dynamicProduct.price = this.product.product_colors[this.globalColor].product_sizes[sizeId].price;
            }else if(this.product.product_sizes.length){
              this.dynamicProduct.sizeId = this.product.product_sizes[sizeId].product_size_id;
              this.dynamicProduct.totalPrice = this.product.product_sizes[sizeId].price;
              this.dynamicProduct.price = this.product.product_sizes[sizeId].price;
              
            }
          }
          this.$nuxt.$emit('loading');
        } catch ({response}) {
          console.log(response.data.message);
        }
      }else{
        if(this.product.product_colors.length){
          if(this.product.product_colors[this.globalColor].product_sizes.length){
            this.dynamicProduct.price = this.product.product_colors[this.globalColor].product_sizes[this.globalSize].price;
            this.dynamicProduct.totalPrice = this.dynamicProduct.quantity * this.product.product_colors[this.globalColor].product_sizes[this.globalSize].price;
          }else{
            this.dynamicProduct.price = this.product.price;
            this.dynamicProduct.totalPrice = this.product.price;
          }
        }else{
          if(this.product.product_sizes.length){
            this.dynamicProduct.price = this.product.product_sizes[this.globalSize].price;
            this.dynamicProduct.totalPrice = this.product.product_sizes[this.globalSize].price;
          }else{
            this.dynamicProduct.price = this.product.price;
            this.dynamicProduct.totalPrice = this.product.price;
          }
        }
      }
      this.dynamicProduct.images = []
      this.dynamicProduct.sizes = []
      if(this.product.product_colors.length){
        for(let i =0; i<this.product.product_colors[colorId].product_images.length; i++){
          this.dynamicProduct.images.push(this.product.product_colors[colorId].product_images[i].image);
        }
        if(this.product.product_sizes.length){
          for(let i =0; i<this.product.product_colors[colorId].product_sizes.length; i++){
            this.dynamicProduct.sizes.push(this.product.product_colors[colorId].product_sizes[i])
          }
        }
      }else{
        if(this.product.product_sizes.length){
          for(let i = 0; i<this.product.images.length; i++){
            this.dynamicProduct.images.push(this.product.images[i].image);
          }
          for(let i =0; i<this.product.product_sizes.length; i++){
            this.dynamicProduct.sizes.push(this.product.product_sizes[i])
          }
        }else{
          for(let i = 0; i<this.product.images.length; i++){
            this.dynamicProduct.images.push(this.product.images[i].image);
          }
        }
      } 
    },
    openMobileInfo(){
      if(!this.resInfo){
        this.resInfo = true;
      }else{
        this.addToCart();
      }
    }
  }
}
</script>

<style>

</style>