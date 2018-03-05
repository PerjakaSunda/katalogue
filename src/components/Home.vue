<template>
  <section class="bg-body" style="background-image:url(./static/images/bg.svg);">
    <div class="inner-body">
      <div class="inner">
        <div class="inner-main">
          <h1 class="title"><span class="account">{{ $store.state.head.title }}</span></h1>
          <input
            type="email"
            placeholder="Email"
            class="input"
            v-model="$store.state.user.email"
            required
            autofocus
            @keyup.enter="goSignIn()"
          >
          <input
            type="password"
            placeholder="Password"
            class="input"
            v-model="$store.state.user.password"
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
      const _self = this
      if (_self.$store.state.user.email === '') {
        alert('Email is empty')
      } else if (_self.$store.state.user.password === '') {
        alert('Password is empty')
      } else {
        _self.$store.dispatch('Req', { action: 'signIn' }).then(function (res) {
          if (res.status) {
            _self.$router.replace({ name: 'Dashboard' })
          } else {
            alert(res.message)
          }
        })
      }
    }
  }
}
</script>
