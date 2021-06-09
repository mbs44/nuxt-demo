<template>
  <div> 
    <nav
      class="navbar header has-shadow"
      role="navigation"
      aria-label="main navigation"
      style="background-color: green"
    >
      <div class="navbar-brand">
        <figure class="image is-128x128">
             <NuxtLink to="/"><img src="~assets/gjh logo.png" alt="Gjh Logo" /></NuxtLink>
        </figure>

        <section class="hero is-success" style="background-color: green">
          <div class="hero-body">
            <p class="title">
              THE STUDENTS DAILY
            </p>
            <p class="subtitle">
              ČASOPIS GJH. TEN NAJLEPŠÍ ČASOPIS NA GJH
            </p>
          </div>
        </section>
   
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Your menu
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>

    </section>

    <footer class="footer">

  <section class="section">
    <div class="columns is-2">
      <card
        title="Nina Barabasova"
        href="https://www.instagram.com/nina_barabasova14/"
      >
         <p> Hello! My name Nina Barabasova <br> I'm the second half of The Students Daily <br> and I loved writing all these articles and bringing you all the deets. <br> xoxo. -The Students Dialy Editors <br>
            </p>
      </card>

          <card
        title="Yumi Bezekova"
        href="https://www.instagram.com/drawingwithyumi/"
      >
        <p> Hello! My name is Yumi Bezekova. <br> I'm the second half of The Students Daily <br> and I really enjoyed creating this tabloid. <br> We hope you enjoy reading our work of art /hj <br>
            </p>
      </card>
    </div>
  </section>
            <h4>Created by Yumi Bezeková and Nina Barabásová©</h4>
    </footer>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
    components: {
    Card
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'News',
          icon: 'newspaper',
          to: { name: 'news' }
        },
        {
          title: 'Relationships',
          icon: 'heart',
          to: { name: 'relationships' }
        },
        {
          title: 'Fame',
          icon: 'star',
          to: { name: 'fame' }
        },
        {
          title: 'Food',
          icon: 'food',
          to: { name: 'food' }
        },
        {
          title: 'Quizzes',
          icon: 'check',
          to: { name: 'quizzes' }
        },
        {
          title: 'Surveys',
          icon: 'lightbulb',
          to: { name: 'surveys' }
        }
      ]
    }
  }
}
</script>
