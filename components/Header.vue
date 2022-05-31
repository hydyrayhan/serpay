<template>
  <div class="container" style="position:relative">
     <div class="header">
       <nuxt-link to="/" class="header_logo">
         <img src="~/assets/images/logo.svg" alt="">
       </nuxt-link>
       <div class="header_category" @click="categoryOpen" v-click-outside="categoryClose">
         <div class="header_category_icon">
           <img v-if="category" src="~/assets/images/icons/x.svg" alt="headerCategory">
           <img v-else src="~/assets/images/icons/headerCategory.svg" alt="headerCategory">
          </div>
         <!-- <div class="header_category_icon"><img src="~/assets/images/icons/x.svg" alt="x"></div> -->
         <div class="header_category_text">{{$t('category')}}</div>

         <div class="header_category_con" v-if="category">
           <div class="hidden_categories">
             <div class="hidden_category" @click="categoryChange(i)" :class="whitchCategory === i ? 'active' : ''" v-for="(category , i) in categories" :key="i">{{category[language.name]}}</div>
           </div>
           <div class="hidden_subcategories">
             <span @click="categoryClose" v-for="(sub, i) in categories[whitchCategory].subCategories" :key="i">
              <nuxt-link to="/category/1" class="hidden_subcategory" >
                <div class="icon"><img :src="sub.image" alt=""></div>
                <div class="text">{{sub[language.name]}}</div>
              </nuxt-link>
             </span>
           </div>
         </div>
       </div>
       <label class="header_search" v-click-outside="searchOutlineNone">
         <input type="text" @focus="searchOutline"  @keyup="startSearch">
         <img src="~/assets/images/icons/headerSearch.svg" alt="headerSearch">

         <div class="header_search_history" v-if="search">
           <div class="history_title">{{$t('history')}}</div>
           <div class="historyCon">
            <div class="history_history" v-for="i in 4" :key="i">
              <div class="icon"><img src="~/assets/images/icons/headerHistory.svg" alt="headerHistory"></div>
              <div class="text">iphone</div>
            </div>
           </div>
           <div class="history_title">{{$t('recommendation')}}</div>
           <div class="historyCon">
            <div class="history_history" v-for="i in 4" :key="i">
              <div class="text">myska</div>
            </div>
           </div>
         </div>
         <div class="searched_result" v-if="searchStart">
           <div class="list" v-for="i in 5" :key="i">
             <div class="icon">
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12.5L10.1046 9.60457M10.1046 9.60457C11.0697 8.63943 11.6667 7.30609 11.6667 5.83333C11.6667 2.88781 9.27885 0.5 6.33333 0.5C3.38781 0.5 1 2.88781 1 5.83333C1 8.77885 3.38781 11.1667 6.33333 11.1667C7.80609 11.1667 9.13943 10.5697 10.1046 9.60457Z" stroke="#474747" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             </div>
             <div class="name">iphone</div>
           </div>
         </div>
       </label>
       <div class="header_buttons">
         <div class="header_buttons_mode btn">
           <div class="header_buttons_mode_dark mode">
             <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33966 15.5C6.31232 15.4992 5.29655 15.2782 4.35792 14.8513C3.41929 14.4243 2.57865 13.801 1.89025 13.0214C1.19665 12.2408 0.673338 11.3185 0.355036 10.3154C0.0367341 9.31239 -0.0692814 8.25161 0.0440236 7.20349C0.226692 5.57232 0.922751 4.04596 2.02741 2.85422C3.13206 1.66247 4.58552 0.869839 6.16896 0.59566C7.19259 0.434027 8.2372 0.477542 9.24457 0.72378C9.50835 0.793063 9.74923 0.933148 9.94228 1.12954C10.1353 1.32593 10.2735 1.57149 10.3426 1.84081C10.4117 2.11013 10.4091 2.39342 10.3351 2.66138C10.2612 2.92934 10.1185 3.17223 9.92193 3.36491C7.13425 5.96855 7.37634 10.0171 10.4153 12.3708C10.6301 12.5432 10.7959 12.7713 10.8953 13.0314C10.9946 13.2915 11.024 13.5741 10.9803 13.8497C10.9366 14.1254 10.8215 14.384 10.6468 14.5988C10.4722 14.8135 10.2445 14.9764 9.98734 15.0706C9.13258 15.3561 8.23889 15.5011 7.33966 15.5ZM7.38612 1.75061C7.04289 1.74977 6.70011 1.7763 6.36092 1.82998C5.04259 2.05792 3.83236 2.71747 2.9124 3.70935C1.99244 4.70124 1.41253 5.97178 1.25996 7.32973C1.1646 8.20472 1.25249 9.09044 1.51779 9.92803C1.78309 10.7656 2.21973 11.5359 2.79869 12.1876C3.6462 13.1124 4.73801 13.7658 5.94165 14.0687C7.1453 14.3715 8.40905 14.3108 9.57958 13.8938C9.63004 13.8745 9.6746 13.8419 9.70876 13.7993C9.74292 13.7567 9.76545 13.7056 9.77407 13.6512C9.7827 13.5968 9.77711 13.5411 9.75788 13.4897C9.73865 13.4382 9.70645 13.3929 9.66456 13.3582C6.03997 10.5596 5.75203 5.55481 9.08502 2.45308C9.12326 2.41677 9.15085 2.37029 9.16467 2.31884C9.17849 2.26739 9.17801 2.21302 9.16327 2.16184C9.15056 2.10752 9.12357 2.05779 9.08521 2.01802C9.04685 1.97825 8.99858 1.94997 8.94563 1.93623C8.43502 1.81031 7.91138 1.74799 7.38612 1.75061Z" fill="#AEAEAE"/>
            </svg>
           </div>
           <div class="header_buttons_mode_light mode">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.375 7.375H11.825C11.7763 7.03065 11.6863 6.69343 11.5569 6.37062L13.7612 5.09312C13.8349 5.05348 13.8999 4.99944 13.9523 4.93423C14.0047 4.86901 14.0435 4.79393 14.0663 4.71345C14.0892 4.63297 14.0956 4.54872 14.0853 4.46569C14.075 4.38267 14.0481 4.30256 14.0063 4.23012C13.9644 4.15767 13.9084 4.09437 13.8417 4.04396C13.7749 3.99355 13.6987 3.95705 13.6176 3.93664C13.5364 3.91623 13.452 3.91232 13.3693 3.92513C13.2867 3.93795 13.2074 3.96723 13.1362 4.01125L10.93 5.29063C10.7191 5.0242 10.4781 4.78302 10.2119 4.57188L11.4906 2.365C11.5676 2.22191 11.5859 2.05445 11.5415 1.89813C11.4971 1.74181 11.3936 1.60892 11.2529 1.52764C11.1122 1.44635 10.9454 1.42306 10.7878 1.46271C10.6302 1.50235 10.4942 1.60181 10.4087 1.74L9.12938 3.94312C8.80662 3.81358 8.46938 3.72355 8.125 3.675V1.125C8.125 0.95924 8.05915 0.800269 7.94194 0.683058C7.82473 0.565848 7.66576 0.5 7.5 0.5C7.33424 0.5 7.17527 0.565848 7.05806 0.683058C6.94085 0.800269 6.875 0.95924 6.875 1.125V3.675C6.53062 3.72355 6.19338 3.81358 5.87062 3.94312L4.59312 1.73875C4.50763 1.60056 4.37168 1.5011 4.2141 1.46146C4.05651 1.42181 3.88968 1.4451 3.74898 1.52639C3.60827 1.60767 3.50476 1.74056 3.46038 1.89688C3.416 2.0532 3.43425 2.22066 3.51125 2.36375L4.79 4.57188C4.52376 4.78302 4.28278 5.0242 4.07188 5.29063L1.86562 4.01125C1.79448 3.96723 1.71522 3.93795 1.63254 3.92513C1.54987 3.91232 1.46546 3.91623 1.38432 3.93664C1.30319 3.95705 1.22698 3.99355 1.16021 4.04396C1.09344 4.09437 1.03747 4.15767 0.995618 4.23012C0.953768 4.30256 0.926888 4.38267 0.916571 4.46569C0.906255 4.54872 0.912713 4.63297 0.935562 4.71345C0.958411 4.79393 0.997185 4.86901 1.04959 4.93423C1.10199 4.99944 1.16695 5.05348 1.24063 5.09312L3.44312 6.37062C3.31372 6.69343 3.22369 7.03065 3.175 7.375H0.625C0.45924 7.375 0.300269 7.44085 0.183058 7.55806C0.065848 7.67527 0 7.83424 0 8C0 8.16576 0.065848 8.32473 0.183058 8.44194C0.300269 8.55915 0.45924 8.625 0.625 8.625H3.175C3.22369 8.96935 3.31372 9.30657 3.44312 9.62938L1.23875 10.9069C1.16508 10.9465 1.10011 11.0006 1.04771 11.0658C0.99531 11.131 0.956536 11.2061 0.933687 11.2866C0.910838 11.367 0.90438 11.4513 0.914696 11.5343C0.925013 11.6173 0.951893 11.6974 0.993743 11.7699C1.03559 11.8423 1.09156 11.9056 1.15833 11.956C1.2251 12.0065 1.30131 12.0429 1.38245 12.0634C1.46358 12.0838 1.54799 12.0877 1.63067 12.0749C1.71334 12.0621 1.7926 12.0328 1.86375 11.9888L4.07 10.7094C4.28091 10.9758 4.52188 11.217 4.78813 11.4281L3.51125 13.635C3.43425 13.7781 3.416 13.9455 3.46038 14.1019C3.50476 14.2582 3.60827 14.3911 3.74898 14.4724C3.88968 14.5536 4.05651 14.5769 4.2141 14.5373C4.37168 14.4976 4.50763 14.3982 4.59312 14.26L5.87062 12.0556C6.19342 12.1853 6.53063 12.2758 6.875 12.325V14.875C6.875 15.0408 6.94085 15.1997 7.05806 15.3169C7.17527 15.4342 7.33424 15.5 7.5 15.5C7.66576 15.5 7.82473 15.4342 7.94194 15.3169C8.05915 15.1997 8.125 15.0408 8.125 14.875V12.325C8.46932 12.2762 8.80653 12.1862 9.12938 12.0569L10.4069 14.2612C10.4924 14.3994 10.6283 14.4989 10.7859 14.5385C10.9435 14.5782 11.1103 14.5549 11.251 14.4736C11.3917 14.3923 11.4952 14.2594 11.5396 14.1031C11.584 13.9468 11.5658 13.7793 11.4888 13.6362L10.21 11.4294C10.4762 11.2182 10.7172 10.9771 10.9281 10.7106L13.1344 11.99C13.2055 12.034 13.2848 12.0633 13.3675 12.0761C13.4501 12.0889 13.5345 12.085 13.6157 12.0646C13.6968 12.0442 13.773 12.0077 13.8398 11.9573C13.9066 11.9069 13.9625 11.8436 14.0044 11.7711C14.0462 11.6987 14.0731 11.6186 14.0834 11.5356C14.0937 11.4525 14.0873 11.3683 14.0644 11.2878C14.0416 11.2073 14.0028 11.1322 13.9504 11.067C13.898 11.0018 13.833 10.9478 13.7594 10.9081L11.555 9.63062C11.6851 9.30751 11.7758 8.96985 11.825 8.625H14.375C14.5408 8.625 14.6997 8.55915 14.8169 8.44194C14.9342 8.32473 15 8.16576 15 8C15 7.83424 14.9342 7.67527 14.8169 7.55806C14.6997 7.44085 14.5408 7.375 14.375 7.375ZM7.5 11.125C3.37 10.9937 3.37125 5.00562 7.5 4.875C11.63 5.00625 11.6287 10.9944 7.5 11.125Z" fill="#FFC700"/>
            </svg>
           </div>
         </div>
         <div class="header_buttons_location btn" @click="openLocation" v-click-outside="closeLocation">
           <div class="icon">
            <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4596 23.0077L9.79161 22.4351C8.87067 21.664 0.829346 14.7192 0.829346 9.63922C0.829346 4.32056 5.14099 0.00891113 10.4596 0.00891113C15.7783 0.00891113 20.0899 4.32056 20.0899 9.63922C20.0899 14.7192 12.0486 21.664 11.1315 22.4389L10.4596 23.0077ZM10.4596 2.09126C6.29301 2.09598 2.91646 5.47254 2.91174 9.63917C2.91174 12.8305 7.85907 17.9286 10.4596 20.262C13.0603 17.9277 18.0075 12.8267 18.0075 9.63917C18.0028 5.47254 14.6263 2.09603 10.4596 2.09126Z" fill="#AEAEAE"/>
              <path d="M10.4597 13.4566C8.35143 13.4566 6.64233 11.7475 6.64233 9.63927C6.64233 7.531 8.35143 5.8219 10.4597 5.8219C12.568 5.8219 14.2771 7.531 14.2771 9.63927C14.2771 11.7475 12.568 13.4566 10.4597 13.4566ZM10.4597 7.73054C9.40557 7.73054 8.55102 8.58509 8.55102 9.63923C8.55102 10.6934 9.40557 11.5479 10.4597 11.5479C11.5138 11.5479 12.3684 10.6934 12.3684 9.63923C12.3684 8.58509 11.5139 7.73054 10.4597 7.73054Z" fill="#AEAEAE"/>
            </svg>
           </div>
           <div class="text">Aşgabat</div>
           <div class="header_location_ul" v-if="location">
             <div class="list active">{{$t('ashgabat')}}</div>
             <div class="list">{{$t('ahal')}}</div>
             <div class="list">{{$t('lebap')}}</div>
             <div class="list">{{$t('balkan')}}</div>
             <div class="list">{{$t('mary')}}</div>
             <div class="list">{{$t('dashoguz')}}</div>
           </div>
         </div>
         <div class="header_buttons_like btn" @click="$router.push('/favorite')">
           <div class="icon">
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7706 0.837158C15.6915 0.853943 14.6359 1.15518 13.7104 1.71046C12.7849 2.26573 12.0224 3.05538 11.4998 3.99966C10.9771 3.05538 10.2146 2.26573 9.28911 1.71046C8.36365 1.15518 7.30805 0.853943 6.22892 0.837158C4.50866 0.911899 2.88789 1.66444 1.72071 2.93038C0.553538 4.19632 -0.065171 5.87274 -0.000243423 7.59341C-0.000243423 11.9509 4.58634 16.71 8.43309 19.9367C9.29196 20.6585 10.3779 21.0542 11.4998 21.0542C12.6216 21.0542 13.7075 20.6585 14.5664 19.9367C18.4132 16.71 22.9998 11.9509 22.9998 7.59341C23.0647 5.87274 22.446 4.19632 21.2788 2.93038C20.1116 1.66444 18.4909 0.911899 16.7706 0.837158ZM13.335 18.4705C12.8213 18.9031 12.1713 19.1403 11.4998 19.1403C10.8282 19.1403 10.1782 18.9031 9.66455 18.4705C4.74063 14.3391 1.91642 10.3754 1.91642 7.59341C1.85091 6.38084 2.26752 5.19157 3.0754 4.28495C3.88327 3.37834 5.01685 2.82795 6.22892 2.75382C7.44099 2.82795 8.57458 3.37834 9.38245 4.28495C10.1903 5.19157 10.6069 6.38084 10.5414 7.59341C10.5414 7.84757 10.6424 8.09133 10.8221 8.27105C11.0018 8.45077 11.2456 8.55174 11.4998 8.55174C11.7539 8.55174 11.9977 8.45077 12.1774 8.27105C12.3571 8.09133 12.4581 7.84757 12.4581 7.59341C12.3926 6.38084 12.8092 5.19157 13.6171 4.28495C14.4249 3.37834 15.5585 2.82795 16.7706 2.75382C17.9827 2.82795 19.1162 3.37834 19.9241 4.28495C20.732 5.19157 21.1486 6.38084 21.0831 7.59341C21.0831 10.3754 18.2589 14.3391 13.335 18.4667V18.4705Z" fill="#AEAEAE"/>
            </svg>
           </div>
           <div class="text">{{$t('liked')}}</div>
         </div>
         <div class="header_buttons_cart btn" @click="$router.push('/sebet')">
           <div class="icon">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_659_1232)">
              <path d="M21.7666 3.90713C21.4971 3.58363 21.1596 3.32345 20.7781 3.14507C20.3967 2.96669 19.9807 2.87449 19.5596 2.875H4.06525L4.025 2.53863C3.94263 1.83944 3.60658 1.19479 3.08055 0.726875C2.55453 0.258964 1.8751 0.000327552 1.17108 0L0.958333 0C0.704168 0 0.460412 0.100967 0.280689 0.280689C0.100967 0.460412 0 0.704168 0 0.958333C0 1.2125 0.100967 1.45626 0.280689 1.63598C0.460412 1.8157 0.704168 1.91667 0.958333 1.91667H1.17108C1.40581 1.9167 1.63236 2.00288 1.80777 2.15885C1.98318 2.31483 2.09525 2.52976 2.12271 2.76288L3.44138 13.9754C3.57827 15.1415 4.13854 16.2167 5.01583 16.997C5.89312 17.7773 7.02636 18.2084 8.20046 18.2083H18.2083C18.4625 18.2083 18.7063 18.1074 18.886 17.9276C19.0657 17.7479 19.1667 17.5042 19.1667 17.25C19.1667 16.9958 19.0657 16.7521 18.886 16.5724C18.7063 16.3926 18.4625 16.2917 18.2083 16.2917H8.20046C7.6073 16.29 7.02918 16.1049 6.54535 15.7618C6.06153 15.4186 5.69567 14.9342 5.49796 14.375H16.9213C18.0447 14.3751 19.1325 13.9804 19.9945 13.2599C20.8565 12.5395 21.4379 11.539 21.6372 10.4334L22.3895 6.26079C22.4646 5.8468 22.4478 5.42136 22.3401 5.01461C22.2325 4.60787 22.0367 4.22977 21.7666 3.90713V3.90713ZM20.5083 5.92058L19.7551 10.0932C19.6354 10.7573 19.2859 11.3582 18.7679 11.7906C18.2498 12.223 17.5961 12.4594 16.9213 12.4583H5.19321L4.29142 4.79167H19.5596C19.7004 4.79083 19.8396 4.82101 19.9674 4.88008C20.0952 4.93914 20.2084 5.02564 20.299 5.13342C20.3895 5.24119 20.4553 5.3676 20.4914 5.50365C20.5276 5.6397 20.5334 5.78205 20.5083 5.92058V5.92058Z" fill="#AEAEAE"/>
              <path d="M6.70817 23C7.76672 23 8.62484 22.1419 8.62484 21.0833C8.62484 20.0248 7.76672 19.1666 6.70817 19.1666C5.64962 19.1666 4.7915 20.0248 4.7915 21.0833C4.7915 22.1419 5.64962 23 6.70817 23Z" fill="#AEAEAE"/>
              <path d="M16.2917 23C17.3502 23 18.2083 22.1419 18.2083 21.0833C18.2083 20.0248 17.3502 19.1666 16.2917 19.1666C15.2331 19.1666 14.375 20.0248 14.375 21.0833C14.375 22.1419 15.2331 23 16.2917 23Z" fill="#AEAEAE"/>
              </g>
              <defs>
              <clipPath id="clip0_659_1232">
              <rect width="23" height="23" fill="white"/>
              </clipPath>
              </defs>
            </svg>
           </div>
           <div class="text">{{$t('cart')}}</div>
         </div>
         <div class="header_buttons_login btn" @click="openProfile" v-click-outside="closeProfile">
           <div class="icon">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H7C5.93913 15 4.92172 15.4214 4.17157 16.1716C3.42143 16.9217 3 17.9391 3 19V21" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 11C13.2091 11 15 9.20914 15 7C15 4.79086 13.2091 3 11 3C8.79086 3 7 4.79086 7 7C7 9.20914 8.79086 11 11 11Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           </div>
           <div class="text">{{$t('profile')}}</div>

           <div class="header_login_ul" v-if="profile">
             <div class="list">
               <div class="icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>
               <div class="text">{{$t('profile')}}</div>
             </div>
             <div class="list">
               <div class="icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>
               <div class="text">{{$t('liked')}}</div>
             </div>
             <div class="list">
               <div class="icon">
                 <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7706 0.837158C15.6915 0.853943 14.6359 1.15518 13.7104 1.71046C12.7849 2.26573 12.0224 3.05538 11.4998 3.99966C10.9771 3.05538 10.2146 2.26573 9.28911 1.71046C8.36365 1.15518 7.30805 0.853943 6.22892 0.837158C4.50866 0.911899 2.88789 1.66444 1.72071 2.93038C0.553538 4.19632 -0.065171 5.87274 -0.000243423 7.59341C-0.000243423 11.9509 4.58634 16.71 8.43309 19.9367C9.29196 20.6585 10.3779 21.0542 11.4998 21.0542C12.6216 21.0542 13.7075 20.6585 14.5664 19.9367C18.4132 16.71 22.9998 11.9509 22.9998 7.59341C23.0647 5.87274 22.446 4.19632 21.2788 2.93038C20.1116 1.66444 18.4909 0.911899 16.7706 0.837158ZM13.335 18.4705C12.8213 18.9031 12.1713 19.1403 11.4998 19.1403C10.8282 19.1403 10.1782 18.9031 9.66455 18.4705C4.74063 14.3391 1.91642 10.3754 1.91642 7.59341C1.85091 6.38084 2.26752 5.19157 3.0754 4.28495C3.88327 3.37834 5.01685 2.82795 6.22892 2.75382C7.44099 2.82795 8.57458 3.37834 9.38245 4.28495C10.1903 5.19157 10.6069 6.38084 10.5414 7.59341C10.5414 7.84757 10.6424 8.09133 10.8221 8.27105C11.0018 8.45077 11.2456 8.55174 11.4998 8.55174C11.7539 8.55174 11.9977 8.45077 12.1774 8.27105C12.3571 8.09133 12.4581 7.84757 12.4581 7.59341C12.3926 6.38084 12.8092 5.19157 13.6171 4.28495C14.4249 3.37834 15.5585 2.82795 16.7706 2.75382C17.9827 2.82795 19.1162 3.37834 19.9241 4.28495C20.732 5.19157 21.1486 6.38084 21.0831 7.59341C21.0831 10.3754 18.2589 14.3391 13.335 18.4667V18.4705Z" fill="#414141"/>
                </svg>
               </div>
               <div class="text">{{$t('historyOrder')}}</div>
             </div>
             <div class="list">
               <div class="icon">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0455 0.85783H12.4621C12.208 0.85783 11.9642 0.958797 11.7845 1.13852C11.6048 1.31824 11.5038 1.562 11.5038 1.81616V4.94992L9.2038 0.963246C9.03596 0.670546 8.79383 0.427339 8.50188 0.258204C8.20993 0.0890684 7.8785 0 7.54109 0C7.20369 0 6.87226 0.0890684 6.58031 0.258204C6.28836 0.427339 6.04622 0.670546 5.87839 0.963246L0.128392 10.9203C0.044281 11.066 0 11.2313 0 11.3995C0 11.5677 0.044281 11.733 0.128392 11.8787C0.212825 12.0249 0.334403 12.1463 0.480815 12.2304C0.627227 12.3145 0.793274 12.3585 0.962141 12.3578H5.07339C4.88732 12.9797 4.79368 13.6255 4.79547 14.2745C4.79547 16.0537 5.50224 17.76 6.76029 19.018C8.01835 20.2761 9.72464 20.9829 11.5038 20.9829C13.283 20.9829 14.9892 20.2761 16.2473 19.018C17.5054 17.76 18.2121 16.0537 18.2121 14.2745C18.2139 13.6255 18.1203 12.9797 17.9342 12.3578H22.0455C22.2996 12.3578 22.5434 12.2569 22.7231 12.0772C22.9028 11.8974 23.0038 11.6537 23.0038 11.3995V1.81616C23.0038 1.562 22.9028 1.31824 22.7231 1.13852C22.5434 0.958797 22.2996 0.85783 22.0455 0.85783ZM2.62006 10.4412L7.5363 1.92158L10.8234 7.56617C9.86498 7.67283 8.94084 7.98486 8.11395 8.481C7.28705 8.97714 6.57684 9.64572 6.03172 10.4412H2.62006ZM11.5038 19.0662C10.5561 19.0662 9.62968 18.7852 8.84169 18.2586C8.05371 17.7321 7.43955 16.9838 7.07688 16.1082C6.71421 15.2326 6.61932 14.2692 6.80421 13.3397C6.98909 12.4102 7.44546 11.5564 8.11558 10.8863C8.78571 10.2162 9.6395 9.7598 10.569 9.57491C11.4985 9.39002 12.4619 9.48491 13.3375 9.84758C14.213 10.2103 14.9614 10.8244 15.4879 11.6124C16.0144 12.4004 16.2955 13.3268 16.2955 14.2745C16.2955 15.5453 15.7906 16.7641 14.892 17.6627C13.9934 18.5613 12.7746 19.0662 11.5038 19.0662ZM21.0871 10.4412H17.0046C16.1343 9.19865 14.8722 8.28413 13.4205 7.84409V2.7745H21.0871V10.4412Z" fill="#414141"/>
                </svg>
               </div>
               <div class="text">{{$t('services')}}</div>
             </div>
             <div class="list">
               <div class="icon">
                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13.9829C19 14.5133 18.7893 15.0221 18.4142 15.3971C18.0391 15.7722 17.5304 15.9829 17 15.9829H5L1 19.9829V3.98291C1 3.45248 1.21071 2.94377 1.58579 2.5687C1.96086 2.19362 2.46957 1.98291 3 1.98291H17C17.5304 1.98291 18.0391 2.19362 18.4142 2.5687C18.7893 2.94377 19 3.45248 19 3.98291V13.9829Z" stroke="#414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>
               <div class="text">{{$t('chatToAdmin')}}</div>
             </div>
             <div class="language">
               <span :class="currentLanguage.code === 'tm' ? 'active':''" @click="changeLanguage($i18n.locales[0].code)">TM</span>
               <span :class="currentLanguage.code === 'ru' ? 'active':''" @click="changeLanguage($i18n.locales[1].code)">RU</span>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="header_search_background" v-if="searchBackground"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data(){
    return{
      search:false,
      searchBackground:false,
      location:false,
      profile:false,
      searchStart:false,
      category:false,
      whitchCategory:0,

      categories:[
        {
          name_tm : 'Phones & accessories',
          name_ru : 'Telefon & accessories',
          subCategories : [
            {
              name_tm : "All",
              name_ru : "Hemmesi",
              link : "/",
              image : require("~/assets/images/delete/sub.png")
            },
            {
              name_tm : "Xiaomi",
              name_ru : "Redmi",
              link : "/",
              image : require("~/assets/images/delete/sub2.png")
            },
            {
              name_tm : "Apple",
              name_ru : "Macbook",
              link : "/",
              image : require("~/assets/images/delete/sub3.png")
            },
          ]
        },
        {
          name_tm : 'Clothing for Men',
          name_ru : 'Oglanlar ucin eshikler',
          subCategories : [
            {
              name_tm : "All",
              name_ru : "Hemmesi",
              link : "/",
              image : require("~/assets/images/delete/sub.png")
            },
            {
              name_tm : "Smartphones",
              name_ru : "Telefonlar",
              link : "/",
              image : require("~/assets/images/delete/sub3.png")
            },
            {
              name_tm : "Xiaomi",
              name_ru : "Redmi",
              link : "/",
              image : require("~/assets/images/delete/sub2.png")
            },
            {
              name_tm : "Apple",
              name_ru : "Macbook",
              link : "/",
              image : require("~/assets/images/delete/sub.png")
            },
          ]
        }
      ]
    }
  },
  watch: {
    $route () {
      if('/favorite' == this.$route.path){
        document.querySelector(".header_buttons_like path").style.fill = '#FF141D'
        document.querySelector(".header_buttons_like .text").style.color = '#FF141D'
      }else{
        document.querySelector(".header_buttons_like path").style.fill = '#AEAEAE'
        document.querySelector(".header_buttons_like .text").style.color = '#AEAEAE'
      }
      if('/sebet' == this.$route.path){
        document.querySelectorAll(".header_buttons_cart path")[0].style.fill = '#FF141D'
        document.querySelectorAll(".header_buttons_cart path")[1].style.fill = '#FF141D'
        document.querySelectorAll(".header_buttons_cart path")[2].style.fill = '#FF141D'
        document.querySelector(".header_buttons_cart .text").style.color = '#FF141D'
      }else{
        document.querySelectorAll(".header_buttons_cart path")[0].style.fill = '#AEAEAE'
        document.querySelectorAll(".header_buttons_cart path")[1].style.fill = '#AEAEAE'
        document.querySelectorAll(".header_buttons_cart path")[2].style.fill = '#AEAEAE'
        document.querySelector(".header_buttons_cart .text").style.color = '#AEAEAE'
      }
    }
  },
  computed:{
    currentLanguage() {
        return this.$i18n.locales.find(
            (locale) => locale.code === this.$i18n.locale
        )
    },
    ...mapGetters({
      language: 'dynamicLang/language',
    }),
  },
  methods:{
    ...mapActions({
        changeLanguage: 'languages/changeLanguage',
    }),
    searchOutline(){
      const el = document.querySelector(".header_search");
      el.style.border = '1px solid #FF141D'
      this.search = true;
      this.searchBackground = true;
      document.querySelector("body").style.overflow = 'hidden';

    },
    searchOutlineNone(){
      const el = document.querySelector(".header_search");
      el.style.border = 'none'
      this.search = false;
      this.searchBackground = false;
      document.querySelector("body").style.overflowX = 'hidden';
      document.querySelector("body").style.overflowY = 'auto';
    },
    startSearch(){
      this.search = false;
      this.searchStart = true;
    },
    openLocation(){
      this.location = true;
    },
    closeLocation(){
      this.location = false;
    },
    openProfile(){
      this.profile = true;
    },
    closeProfile(){ 
      this.profile = false;
    },
    categoryOpen(){
      this.category = true;
    },
    categoryClose(){
      this.category = false;
    },
    categoryChange(id){
      this.whitchCategory = Number(id);
    }
  }
}
</script>

<style>

</style>