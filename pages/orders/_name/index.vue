<template>
  <div class="orders">
    <div class="container">
      <div class="orders_header">
        <div class="pageName">Order history</div>
        <div class="privateButton" v-if="privateButton">Private</div>
        <div class="orders_header_buttons" v-else>
           <button class="cancel">{{$t('cancel')}}</button>
           <button class="delete">{{$t('delete')}}</button>
           <button class="selectAll">
             <span>
               <svg class="passive" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#E5E5E5" stroke-width="2"/>
                </svg>
             </span>
             <span>
               <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
                  <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
                </svg>
             </span>
           </button>
        </div>
      </div>
    </div>
    <hr>
      
  </div>  
</template>

<script>
export default {
  data(){
    return{
      privateButton:false,
    }
  }
}
</script>

<style>

</style>