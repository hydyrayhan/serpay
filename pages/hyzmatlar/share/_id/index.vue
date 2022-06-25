<template>
  <div class="container hyzmatlarCon">
     <div class="hyzmatlar">
        <div class="hyzmatlar_title">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2625 17.3621L8.75 28.7496L15 24.9996L21.25 28.7496L19.7375 17.3496" stroke="#FF141D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 18.75C19.8325 18.75 23.75 14.8325 23.75 10C23.75 5.16751 19.8325 1.25 15 1.25C10.1675 1.25 6.25 5.16751 6.25 10C6.25 14.8325 10.1675 18.75 15 18.75Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{$t('shareAndEarn')}}</span>
        </div>
     </div>

     <div class="shareProduct">
        <div class="shareProduct_images">
          <div class="shareProduct_images_big">
            <img src="~/assets/images/delete/productPage.png" alt="">
          </div>
          <div class="shareProduct_images_smalls">
            <div class="shareProduct_images_smalls_small active" @click="imageChange(0)">
              <img src="~/assets/images/delete/product.png" alt="">
            </div>
            <div class="shareProduct_images_smalls_small"  @click="imageChange(1)">
              <img src="~/assets/images/delete/product3.png" alt="">
            </div>
          </div>
        </div>

        <div class="shareProduct_info">
          <div class="shareProduct_info_name">Beko Wahing Machine</div>
          <div class="shareProduct_info_body">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</div>
          <!-- copy -->
          <div class="product_info_range">
            <div class="range">
              <div class="range_color" v-bind:style="{width:[`${width}%`]}"></div>
              <div class="range_percentage"><span>70%</span></div>
            </div>
            <div class="count">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>123</span>
            </div>
          </div>
          <div class="shareProduct_info_topTitle">
            <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2625 17.3621L8.75 28.7496L15 24.9996L21.25 28.7496L19.7375 17.3496" stroke="#FF141D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 18.75C19.8325 18.75 23.75 14.8325 23.75 10C23.75 5.16751 19.8325 1.25 15 1.25C10.1675 1.25 6.25 5.16751 6.25 10C6.25 14.8325 10.1675 18.75 15 18.75Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="shareProduct_info_topTitle_title">{{$t('top')}}</div>
          </div>
          <div class="shareProduct_info_carts">
            <div class="shareProduct_info_carts_persons">
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
              <div class="person">
                <div class="person_id">1</div>
                <div class="person_image"><img src="~/assets/images/delete/person.png" alt=""></div>
                <div class="person_info">
                  <div class="person_info_name">Lionel Messi</div>
                  <div class="person_info_shared">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="shareProduct_info_carts_counttime">
              <div class="timer">
                <div class="icon">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541607 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9964 9.18589 23.6783 6.00855 21.3349 3.66512C18.9914 1.3217 15.8141 0.00358446 12.5 0V0ZM12.5 22.9167C10.4398 22.9167 8.42583 22.3057 6.71281 21.1611C4.9998 20.0165 3.66467 18.3897 2.87626 16.4863C2.08785 14.5829 1.88156 12.4884 2.28349 10.4678C2.68542 8.44717 3.67751 6.5911 5.13431 5.1343C6.5911 3.67751 8.44718 2.68542 10.4678 2.28349C12.4884 1.88156 14.5829 2.08784 16.4863 2.87625C18.3897 3.66467 20.0165 4.9998 21.1611 6.71281C22.3057 8.42582 22.9167 10.4398 22.9167 12.5C22.9136 15.2617 21.8152 17.9095 19.8623 19.8623C17.9095 21.8152 15.2617 22.9136 12.5 22.9167Z" fill="#272727"/>
                    <path d="M12.9927 6.25C12.7089 6.25 12.4368 6.37405 12.2362 6.59486C12.0356 6.81568 11.9229 7.11516 11.9229 7.42744V12.5199L8.31662 15.0066C8.07545 15.1724 7.90401 15.4369 7.84001 15.7418C7.77601 16.0468 7.8247 16.3672 7.97536 16.6327C8.12601 16.8981 8.3663 17.0868 8.64337 17.1572C8.92043 17.2277 9.21156 17.1741 9.45273 17.0083L13.5607 14.1824C13.7159 14.0754 13.8436 13.9263 13.9314 13.7494C14.0193 13.5725 14.0644 13.3737 14.0624 13.1722V7.42744C14.0624 7.11516 13.9497 6.81568 13.7491 6.59486C13.5485 6.37405 13.2764 6.25 12.9927 6.25Z" fill="#272727"/>
                  </svg>
                </div>
                <div class="timer_time">
                  <span>72h</span>
                  <span>:</span>
                  <span>05m</span>
                </div>
              </div>
              <button @click="openPopup" class="share_button">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3377 1.16107C17.0688 0.888908 16.7342 0.690699 16.3664 0.585592C15.9985 0.480485 15.6097 0.472034 15.2376 0.561054L3.23732 3.08862C2.54624 3.18339 1.89534 3.46923 1.35793 3.91395C0.820517 4.35866 0.417939 4.94458 0.19553 5.60573C-0.0268796 6.26687 -0.0602851 6.97699 0.099075 7.65609C0.258435 8.3352 0.604231 8.95633 1.09752 9.44952L2.38605 10.7373C2.45579 10.807 2.5111 10.8898 2.54881 10.9809C2.58652 11.072 2.60589 11.1697 2.60581 11.2683V13.6444C2.60746 13.9785 2.68437 14.3079 2.83081 14.6082L2.82481 14.6134L2.84431 14.6329C3.06408 15.0748 3.42302 15.4321 3.86584 15.6499L3.88534 15.6694L3.89059 15.6634C4.19087 15.8099 4.52028 15.8868 4.85437 15.8884H7.23042C7.42922 15.8883 7.61994 15.967 7.76069 16.1074L9.04847 17.3952C9.39387 17.7444 9.80497 18.0219 10.2581 18.2115C10.7112 18.4011 11.1974 18.4991 11.6885 18.5C12.0979 18.4995 12.5044 18.4326 12.8923 18.302C13.5474 18.0869 14.1294 17.693 14.5725 17.1648C15.0157 16.6365 15.3024 15.9949 15.4004 15.3124L17.9317 3.28587C18.0253 2.91059 18.0198 2.51742 17.9157 2.14492C17.8115 1.77241 17.6124 1.43338 17.3377 1.16107ZM3.44808 9.67828L2.1588 8.3905C1.85858 8.09751 1.64816 7.72497 1.55225 7.31659C1.45633 6.90821 1.47889 6.48095 1.61728 6.08494C1.75146 5.67867 1.9995 5.31949 2.3319 5.05011C2.6643 4.78073 3.06708 4.6125 3.49233 4.5654L15.3734 2.06409L4.10435 13.3346V11.2683C4.10548 10.9731 4.04807 10.6805 3.93542 10.4076C3.82277 10.1347 3.65713 9.88678 3.44808 9.67828ZM13.9266 15.0559C13.869 15.4702 13.6971 15.8602 13.4302 16.1822C13.1632 16.5042 12.8118 16.7454 12.4154 16.8787C12.019 17.0121 11.5932 17.0323 11.186 16.9371C10.7787 16.842 10.406 16.6352 10.1097 16.3399L8.81971 15.0499C8.61149 14.8405 8.36381 14.6745 8.09101 14.5615C7.81821 14.4485 7.52571 14.3907 7.23042 14.3914H5.16412L16.4347 3.12462L13.9266 15.0559Z" fill="#FAFAFA"/>
                </svg>
                <span>{{$t('share')}}</span>
              </button>
            </div>
          </div>
        </div>
     </div>
     <div class="share">
        <div v-if="shareBackground" @click="shareBackground = false" class="share_background"></div>
        <div v-if="shareBackground" class="share_popup">
          <div class="share_popup_title">{{$t('chooseShareType')}}</div>
          <div class="share_popup_buttons">
            <button>{{$t('forOwn')}}</button>
            <button>{{$t('forFriend')}}</button>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import ShareButton from '~/components/ShareButton';
export default {
  components:{ShareButton},
  data:()=>({
    width:70,
    shareBackground:false,
  }),
  mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.hyzmatlarCon');
    element.style.minHeight = height+'px';
  },
  methods:{
    openPopup(){
      this.shareBackground = true
    },
    imageChange(id){
      const big = document.querySelector('.shareProduct_images_big img');
      const smalls = document.querySelectorAll('.shareProduct_images_smalls_small');
      big.setAttribute('src',smalls[id].querySelector('img').getAttribute('src'))
      for(let i =0; i<smalls.length; i++){
        smalls[i].classList.remove('active');
      }
      smalls[id].classList.add("active");
    }
  }
}
</script>

<style>

</style>