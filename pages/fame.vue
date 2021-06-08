<template>
  <section class="section">

 <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
          <p class="title">LOCAL MATHS TEACHER OR SECRET SINGING SENSATION?</p>
              <p class="subtitle">31/5/2021 7:12 PM CET</p> 
      
            <div class="content">

            <figure class="b-image-wrapper image">
                    <img src="~assets/breaking news .png" style="width:218px; height:36px;">
                  </figure>

          <p>GJH maths teacher, Dušan Zorkocy, is well known for his stern look and strict teachings, but who would have known that this devoted educator was also a famous Czech pop star?!</p>
 

   <figure class="b-image-wrapper image">
      <img src="~assets/headlien.png" style="width:504px; height:672px">
    </figure>

<p>Using the stage name “Michal David”, Zorkocy has made his way into the hearts of many Czech fans with his hit songs, such as Non Stop and Discopříběh. He started gaining fame in 1998 and peaked in the early 2000s with his hit singles, which easily earned their place on the billboard charts.</p>  

  
  <figure class="b-image-wrapper image">
      <img src="~assets/assault .png" style="width:504px; height:672px">
    </figure>
    
      <p>When flocked with journos on the 14th of Friday with this information, he lost his cool! The journalists received a tongue-lashing and were left without any juicy scoops.</p>
 
        <p>Whilst the reaction was bad, that will not stop fans from loving their fave pop singer. Don’t worry, Dušan Zorkocy – our support for you is Non Stop!</p>
 
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
                { image:'banger sale .png'},
                { image:'d 55 .png'},
                { image:'alza.png'}
            ]
        }
    }
}
</script>
