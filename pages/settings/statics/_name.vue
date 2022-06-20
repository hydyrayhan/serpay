<template>
  <div class="container">
    <div class="settings_statics">
      <div class="settings_statics_title">{{$t($route.params.name)}}</div>
      <div class="settings_statics_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto temporibus accusantium excepturi animi minima maxime reprehenderit consequuntur dignissimos illum natus voluptatibus blanditiis, praesentium maiores repellendus similique, quo quos quae.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias quisquam commodi explicabo amet repellendus eos necessitatibus, ipsa facilis odit aliquam qui ab laboriosam ex quam. Sapiente aperiam possimus adipisci doloribus maiores nostrum, ab, cum magni fugiat corporis labore dicta blanditiis a provident voluptate. Quasi quia vel repellat incidunt culpa explicabo sint soluta voluptatem assumenda porro quae saepe dolore, sed aperiam cum quibusdam tempore suscipit! Eligendi modi voluptatum animi, itaque officia tenetur deserunt recusandae odit velit quos sequi cupiditate aspernatur dolorem corporis dolore blanditiis unde. Veritatis facere cum quisquam, a necessitatibus soluta maxime voluptas amet vero cumque. Adipisci assumenda officiis earum numquam perferendis accusamus omnis vero, quas reiciendis accusantium libero iusto. Dolor vero tempore non omnis eos quia eveniet ut? Distinctio est eos ad et dolores sapiente sit! Dolor, saepe sed placeat ullam odit ab hic inventore rerum quos repellat impedit quas sunt modi maiores vitae debitis quia itaque? Deserunt aperiam voluptate quae est dicta rem unde ea, nostrum beatae modi explicabo et repellendus iusto distinctio repudiandae ullam animi eius veniam, nulla voluptatum, rerum natus quam debitis? Perspiciatis, vero. Quas, sequi quibusdam saepe magnam tenetur eaque debitis tempore illum deleniti vel autem quaerat aliquid quasi veritatis eligendi ex, reprehenderit error odit! Aspernatur minus dolore tempore officiis repellendus ducimus fuga quae nemo in reiciendis voluptatum officia iusto minima, laboriosam molestias perferendis amet eveniet molestiae temporibus dignissimos enim eaque ipsum illum necessitatibus. Cupiditate aspernatur eum recusandae natus voluptates numquam debitis qui dignissimos! Rem, dolores, laudantium perspiciatis itaque amet, repellat eum necessitatibus repellendus doloremque hic vero? Assumenda et, provident dolorem facilis illum quae, autem aliquid doloribus fugiat esse praesentium quis corporis blanditiis natus dicta qui nulla, neque itaque adipisci. Aperiam quia omnis quis est eaque eos cumque ab quos tempore voluptatibus consectetur, sit molestias, possimus minima aliquam provident dolore ipsum temporibus quam esse.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.name)
    const height = window.innerHeight-299;
    const element = document.querySelector('.settings_statics');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-299;
      const element = document.querySelector('.settings_statics');
      element.style.minHeight = height+'px';
    })
  },
}
</script>

<style>

</style>