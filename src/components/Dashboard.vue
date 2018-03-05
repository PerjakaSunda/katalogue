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
        <div
          class="dashboard-list new"
          @click="$store.state.products_new_popup = !$store.state.products_new_popup"
        >
          Add New
        </div>
        <div class="popup-add-product" v-show="$store.state.products_new_popup">
          <input type="text" class="add-product" placeholder="Name" v-model="$store.state.products_new.nama">
          <input type="text" class="add-product" placeholder="Price" v-model="$store.state.products_new.harga">
          <input type="number" class="add-product" placeholder="Stock" v-model="$store.state.products_new.stock">
          <select type="text" class="add-product" v-model="$store.state.products_new.jenis">
            <option value="" disabled>Select Type</option>
            <option value="Shoes">Shoes</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
          </select>
          <input type="file" class="add-product" placeholder="Stock">
          <input type="button" class="btn" value="Add product" @click="addNewProduct()">
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

<script>
export default {
  name: 'Dashboard',
  methods: {
    addNewProduct () {
      const _self = this
      if (_self.$store.state.products_new.nama === '') {
        alert('Product name is empty')
      } else if (parseInt(_self.$store.state.products_new.harga) <= 1000) {
        alert('Invalid price')
      } else if (parseInt(_self.$store.state.products_new.stock) <= 0) {
        alert('Add stock')
      } else if (_self.$store.state.products_new.jenis === '') {
        alert('Select product type')
      } else if (_self.$store.state.products_new.image === '') {
        alert('Add product photo')
      } else {
        _self.$store.dispatch('Req', { action: 'productAdd' })
        _self.$store.state.products_new_popup = false
      }
    }
  }
}
</script>
