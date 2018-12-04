<template>
    <div id="app">

        <sidebar></sidebar>

        <!-- #Main ============================ -->
        <div class="page-container">

            <!-- ### $App Screen Content ### -->
            <main class='main-content bgc-grey-100' >
                <div id='mainContent'>
                        <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
  import './assets/styles/index.scss'

  import Sidebar from './components/partials/Sidebar'
  import FooterComponent from './components/partials/Footer'

  export default {
    name: 'npm-gui',
    components: {Sidebar, FooterComponent}
  }
</script>

<style>
    /* CSS */
</style>
