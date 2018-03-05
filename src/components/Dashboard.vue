<template>
  <section class="bg-body" style="background-image:url(./static/images/bg.svg);">
    <div class="navbar shadow-dark">
      <div class="item">
        <span>{{ $store.state.head.title }}</span>
      </div>
      <div
        class="item right"
        @click="$store.dispatch('Req', { action: 'signOut' })"
      >
        SIGNOUT
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

        <div class="clearfix"></div>

      </div>
      <div class="inner-dashboard-main">
        <div class="dashboard-content">
          <div
            class="product-item"
            v-for="(product, index) in $store.state.products"
            :key="index">
            <div class="product-content">
              <div class="image b100" :style="{'background-image': 'url(' + product.image + ')'}"></div>
              <div class="clearfix"></div>
              <div class="content">
                <div class="title">
                  {{ product.nama }}
                </div>
                <div class="price">
                  IDR {{ product.harga }}
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

        </div>
      </div>
    </div>
  </section>
</template>
