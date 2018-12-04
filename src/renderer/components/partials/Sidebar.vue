<template>

    <div class="sidebar">
        <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="index.html">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img src="~@/assets/images/logo.png" style="width: 70px">
                                    </div>
                                </div>
                                <div class="peer peer-greed">
                                    <h5 class="lh-1 mB-0 logo-text">Npm run</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n">
                                <i class="ti-arrow-circle-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
                <li class="nav-item mT-30 active">
                    <a class="sidebar-link" href="#" @click.prevent="$router.push('/')">
                        <span class="icon-holder">
                          <i class="c-blue-500 ti-home"></i>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class='sidebar-link' href="#" @click.prevent="newProject">
                        <span class="icon-holder">
                          <i class="c-brown-500 ti-plus"></i>
                        </span>
                        <span class="title">Add Project</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'Sidebar',
    methods: {
      ...mapActions('projects', ['addProject']),
      async newProject () {
        const folder = await this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]
        this.addProject(folder)
      }
    }
  }
</script>

<style scoped>

</style>