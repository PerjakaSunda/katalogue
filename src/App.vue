<template>
  <div id="app">
    <transition name="fade">
      <div class="loader-wrapper" v-if="$store.state.loading">
        <div id="loader"></div>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
