<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
        <div class="content has-text-centered">
              <a :href="href">
                    <img src="~/assets/instagram 1.png" style="width:40px; height:40px;">
              </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>
