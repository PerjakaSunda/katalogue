<template>
  <section class="bg-body" style="background-image:url(./static/images/bg.svg);">
    <div class="navbar shadow-dark">
      <div class="item">
        <span>{{ $store.state.head.title }}</span>
      </div>
      <div
        class="item right"
        @click="goSignOut()"
      >
        LOGOUT
      </div>
    </div>
    <div class="inner-body dashboard">
      <div class="inner-dashboard-nav">
        <div class="dashboard-list">
          Products
        </div>
        <div class="dashboard-list">
          Add New
        </div>
      </div>
      <div class="inner-dashboard-main">
        <div class="dashboard-content">
          Dashboard
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  methods: {
    goSignOut () {
      this.$router.replace({name: 'Home'})
    }
  }
}
</script>

<style scoped>
</style>
