<template>
  <section class="section">
 <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
          <p class="title">THE DARK ORIGINS OF THE SCHOOL GJH!</p>
              <p class="subtitle">28/5/2021 6:20 AM CET</p> 
      
            <div class="content">

            <figure class="b-image-wrapper image">
                    <img src="~assets/breaking news .png" style="width:218px; height:36px;">
                  </figure>
  
    <figure class="b-image-wrapper image">
      <img src="~assets/20210521_085136.jpg" style="width:504px; height:672px">
    </figure>

      <p>Many have viewed Gymnázium Jura Hronca as a simply elite school. It has a high reputation to uphold. However, recent investigations have suggested that GJH might not be the dream school everyone so dearly loves!</p>
 
      <p>Detective Pierre Elliot Emmanuel Porter, also known as Detective PEEP, has snooped through the school, lowkey suspecting some dark secrets were yet to be revealed. He said that: “The rooms are bland AF to be school rooms and there’s a sickening feeling in my stomach. This isn’t a coincidence.”
      </p>
   

   <figure class="b-image-wrapper image">
      <img src="~assets/20210521_085336.jpg" style="width:504px; height:672px">
    </figure>


      <p>His suspicions only grew larger when he discovered the not so hidden bunker underneath the school. “That was the moment I knew,” Porter continued, his voice serious, “That the school was originally an abandoned hospital.”
      </p>

      <p>In fact, Porter had suspected that the hospital may have been a replica of Bezrucova Hospital, which was founded in 1937, but then rebuilt as a school. “The crumbling walls, the leaking radiators – it all makes sense now. It was all sus, but the knife in the bunker was the tipping point.”</p>
  
  <figure class="b-image-wrapper image">
      <img src="~assets/20210521_085326.jpg" style="width:504px; height:672px">
    </figure>

      <p>If you’re considering sending your child to GJH, you should 100% do your research, as Porter's findings are enough to make us say Bye Felicia! </p>

   </div>

      </article>
    </div>

     <div class="tile is-parent is-4">
    <article class="tile is-child notification ">
      <div class="content">


          <figure class="b-image-wrapper image">
            <img src="~assets/writtenyumi.png" style="width:300px; height:300px">
          </figure>
          
        <b-carousel>
            <b-carousel-item v-for="(advert, i) in adverts" :key="i">
                  <b-image class="image" :src="require(`~/assets/${advert.image}`)" loading="lazy"></b-image>
                </b-carousel-item>
          </b-carousel>
  
      </div>
    </article>
  </div>

  </div>

  </section>
</template>
<script>
export default {

      data(){
        return {
            adverts: [
                { image:'ad 1.png'},
                { image:'nike .png'},
                { image:'smoothie.png'},
                { image:'d 55 .png'}
            ]
        }
    }
}
</script>