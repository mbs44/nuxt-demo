<template>
  <section class="section">

 <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
               <p class="title">THESE STUDENTS’ FAVOURITE TEACHER WILL LEAVE YOU QUESTIONING YOUR LIFE CHOICES! </p>
 
              <p class="subtitle"> 1/5/2021 4:21 PM CET</p> 
      
            <div class="content">

            <figure class="b-image-wrapper image">
                    <img src="~assets/breaking news .png" style="width:218px; height:36px;">
                  </figure>

      <p>We all know that the teachers at GJH slay! Many students have different favourite teachers, but we’ve all been wondering the same thing – who is the best teacher in GJH?</p>
     <p>We have taken the time to create this pyramid to find who's the most popular teacher of all time. Our pyramid of the most loved teachers will leave you shook! We are spilling all the tea and finally revealing who's the most lit!</p>
 

   <figure class="b-image-wrapper image">
      <img src="~assets/huhuh.png" style="width:504px; height:672px">
    </figure>

    <p>We stan all of these teachers, but we have to congratulate Ms. Trupová for her first-place achievement. Yasss queen!!
      </p>
  
  <figure class="b-image-wrapper image">
      <img src="~assets/school.png" style="width:504px; height:672px">
    </figure>
  
      <p>And if you're salty that you're not on our list, don't be! There's always next time!</p>

      <p>- xoxo, GJH students/the student's daily</p>

   </div>

      </article>
    </div>

     <div class="tile is-parent is-4">
    <article class="tile is-child notification ">
      <div class="content">

          <figure class="b-image-wrapper image">
            <img src="~assets/writtenyumi.png" style="width:150px; height:150px">
          </figure>

              <figure class="b-image-wrapper image">
            <img src="~assets/writtenninka.png" style="width:150px; height:150px">
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
                { image:'ing .png'},
                { image:'nike .png'},
                { image:'dress.png'},
                { image:'rab .png'}
            ]
        }
    }
}
</script>