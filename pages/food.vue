<template>
  <section class="section">
 <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
          <p class="title">THESE BAKED GOODS WILL MAKE YOUR GYNECOLOGIST’S MOUTH WATER!!!</p>
              <p class="subtitle">13/3/2021 11:32 AM CET</p> 
      
            <div class="content">

            <figure class="b-image-wrapper image">
                    <img src="~assets/breaking news .png" style="width:218px; height:36px;">
                  </figure>

  
    <figure class="b-image-wrapper image">
      <img src="~assets/20210518_095602.jpg" style="width:504px; height:672px">
    </figure>

      <p>Everyone loves desserts. The sweet taste of whipped cream melting on your tongue is simply delish! Luckily for GJH students, our beloved buffet was revamped and looks better than ever!</p>
  
      <p>Now called Bufet Lienka 1, the buffet is filled with a wide variety of pastries, sandwiches and snacks. This scrumptious sanctuary can be found in the vestibule of the school. Its muffin and sandwich stickers make it impossible to miss.</p>
        <p>Bufet Lienka 1 has a wide ranging selection of foods. If you’re feeling zesty, you are bound to like the one of many baguette variants. Their flavours span from tuna to chicken – all under two euros each!</p>


   <figure class="b-image-wrapper image">
      <img src="~assets/20210518_095621.jpg" style="width:504px; height:672px">
    </figure>

    <p>If you have a big sweet tooth, the pasties are to die for. Packed with eye-popping donuts and an array of different sweets, chocolate bars and biscuits, you are sure to find something you like. Not to mention all the different drinks worth a snag!</p>
   
   <figure class="b-image-wrapper image">
      <img src="~assets/20210518_095639.jpg" style="width:504px; height:672px">
    </figure>

    <p>So come on over to your local Bufet Lienka 1 and take your taste buds on an out worldly experience you’re not to forget!</p>
 
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

  <!--     
          <figure class="b-image-wrapper image">
      <img src="~assets/diamant.png" style="height: 518px; width: 290px;">
    </figure>

        <figure class="b-image-wrapper image">
      <img src="~assets/ifled .png" style="Width:290px; height:290px;">
    </figure>

          <figure class="b-image-wrapper image">
      <img src="~assets/stolicka .png" style="width:290px; height:290px;">
    </figure>
       <figure class="b-image-wrapper image">
      <img src="~assets/adver .png" style="width:290px; height:290px;">
    </figure> -->
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
                { image:'diamant.png'},
                { image:'ifled .png'},
                { image:'stolicka .png'},
                { image:'adver .png'}
            ]
        }
    }
}
</script>