<template>
  <section class="section">

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">You know who I'm</p>
        <p class="subtitle">Aligned with the right column</p>
        <div class="content">
            <img src="~assets/jurh.png" class="">
        </div>
      </article>
    </div>

     <div class="tile is-parent is-4">
    <article class="tile is-child notification ">
      <div class="content">
        <p class="title">Top headlines</p>
        <div class="content">
            <div class="firsttext">
                <a href="/food">
                    <h4>THESE BAKED GOOD WILL MAKE YOUR GYNECOLOGIST'S MOUTH WATER!!! </h4>
                </a>
            </div>
         <div class="firstpic">
                <img src="~assets/pic1.png" style="height: 200px; width: 500px;">
            </div>

            <div class="secondtext">
                <a href="/fame">
                    <h4>LOCAL MATHS TEACHER
                        OR SECRET SINGING
                         SENSATION?</h4>
                </a>
            </div>

            <div class="secondpic">
                <img src="~assets/pic2.png" style="height: 100px; width: 200px;">
            </div>

            <div class="thirdtext">
                <a href="/relationships">
                    <h4> RELATIONSHIPS, FRIENDS AND FRENEMIES...</h4>
                </a>
            </div>

            <div class="thirdpic">
                <img src="~assets/frene.png" style="height: 100px; width: 200px;">

            </div>
        </div>
      </div>
    </article>
  </div>

  </div>
  

<div class="tile is-ancestor">


  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Side column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <b-carousel>
              <b-carousel-item>
                <figure class="b-image-wrapper image"><img src="~assets/gjh1.jpg" loading="lazy"></figure>
              </b-carousel-item>
              <b-carousel-item>
                        <figure class="b-image-wrapper image"><img src="~assets/gjh2.png" loading="lazy"></figure>

              </b-carousel-item>
              <b-carousel-item>
                          <figure class="b-image-wrapper image"><img src="~assets/gjh3.png" loading="lazy" ></figure>
              </b-carousel-item>
          </b-carousel>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p class="title">Main column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Welcome to the first issue of
The Students Daily. The Students Daily is the
leading GJH digital media company, which
provides only the most relevant juicy scoops
from the school of GJH. Ranging from social relationships
all the way to quizzes the reader can take,
The Students Daily is the pinnacle of good tabloidism.
With new stories coming every day, you ought to find
something that'll catch your eye!</p>

       <p>We operate a multi million dollar company
headquartered in Bratislava, Slovakia. With offices
stationed in nearly every country, we are sure to
receive exclusive stories from all over the world.
But of course, we didn't start with all these perks.
The Students Daily began with two friends in just
your ordinary classroom with one goal they wanted to achieve.
They wanted to share stories with the entirety of GJH.
Two weeks later, their business is booming. #nevergiveup</p>

      </div>
    </article>
  </div>
</div>


  </section>
</template>

<script>
export default {
  name: 'HomePage',
      data(){
        return {
            carousels: [
                { image: 'gjh 1.jpg'},
                { image: 'gjh 2.jpg'},
                { image: 'gjh 4.jpg'}
            ]
        }
    }
}
</script>


host:35093/nuxt-demo/_nuxt/assets/jurh.png