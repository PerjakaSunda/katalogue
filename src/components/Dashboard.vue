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
        <div class="dashboard-list active">
          Products
        </div>
        <div class="dashboard-list">
          Add New
        </div>
      </div>
      <div class="inner-dashboard-main">
        <div class="dashboard-content">
          <div class="product-item">
            <div class="product-content">
              <div class="image b100"></div>
              <div class="clearfix"></div>
              <div class="content">
                <div class="title">
                  Para Mocup Suede
                </div>
                <div class="price">
                  IDR 250,000
                </div>
              </div>
            </div>
          </div>
          <div class="product-item">
            <div class="product-content">
              <div class="image b100"></div>
              <div class="clearfix"></div>
              <div class="content">
                <div class="title">
                  Para Mocup Suede
                </div>
                <div class="price">
                  IDR 250,000
                </div>
              </div>
            </div>
          </div>
          <div class="product-item">
            <div class="product-content">
              <div class="image b100"></div>
              <div class="clearfix"></div>
              <div class="content">
                <div class="title">
                  Para Mocup Suede
                </div>
                <div class="price">
                  IDR 250,000
                </div>
              </div>
            </div>
          </div>
          <div class="product-item">
            <div class="product-content">
              <div class="image b100"></div>
              <div class="clearfix"></div>
              <div class="content">
                <div class="title">
                  Para Mocup Suede
                </div>
                <div class="price">
                  IDR 250,000
                </div>
              </div>
            </div>
          </div>
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
