<template>
  <section class="bg-body" style="background-image:url(./static/images/bg.svg);">
    <div class="inner-body">
      <div class="inner">
        <div class="inner-main">
          <h1 class="title"><span class="account">KATALOGUE</span></h1>
          <input
            type="text"
            placeholder="Username"
            class="input"
            required
            autofocus
            @keyup.enter="goSignIn()"
          >
          <input
            type="password"
            placeholder="Password"
            class="input"
            required
            @keyup.enter="goSignIn()"
          >
          <input
            type="button"
            class="btn"
            value="Sign In"
            @click="goSignIn()"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    goSignIn () {
      this.$router.push({name: 'Dashboard'})
    }
  }
}
</script>
