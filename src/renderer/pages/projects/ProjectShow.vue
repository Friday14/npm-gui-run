<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="card list-height">
                    <div class="card-header pb-0 pl-1">
                        <ul class="nav nav-tabs small">
                            <li class="nav-item" v-for="(tab,key) in tabs">
                                <a
                                        @click="activeTab = key"
                                        :class="{active: key === activeTab}"
                                        class="nav-link"
                                        href="#">
                                    <i class="fa" v-if="tabs[key].icon" :class="tabs[key].icon"></i>
                                    {{ tab.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="list-group list-scroll">
                        <template v-if="tabs[activeTab].list() !== false">
                            <li class="list-group-item"
                                v-for="(version, name) in tabs[activeTab].list()">
                                <div class="row">
                                    <div class="col-md-4">
                                        {{ name }}
                                    </div>
                                    <div class="col-md-4">
                                        <b>{{ version }}</b>
                                    </div>
                                </div>
                            </li>
                        </template>
                        <template v-else>
                            <li v-for="key in tabs[activeTab].keys" class="list-group-item">
                                <div class="row">
                                    <div class="col-md-4">
                                        {{ key.toString() }}
                                    </div>
                                    <div class="col-md-6">
                                        <b> {{ project[key] }}</b>
                                    </div>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <!--
                                        <div class="card-footer" v-if="tabs[activeTab].controls">
                                            <button
                                                    v-for="control in tabs[activeTab].controls"
                                                    :class="control.classes"
                                            >{{ control.title }}
                                            </button>
                                        </div>-->
                </div>
            </div>
            <div class="col-md-6">
                <div class="card list-height">
                    <div class="card-header">
                        <i class="fa fa-file-code-o"></i>
                        Scripts
                        <!--
                        <div class="float-right">
                            <button class="btn btn-sm btn-tool btn-outline-secondary">new command</button>
                        </div>-->
                    </div>
                    <ul class="list-group list-scroll" style="max-height: 237px">
                        <li class="list-group-item command-list-item"
                            v-for="(script,name) in project.scripts"
                            @click="runScript(script)">
                            <div class="row">
                                <div class="col-md-3">
                                    <i class="fa fa-play"></i>
                                    {{ name }}
                                </div>
                                <div class="col-md-7 small">
                                    {{ script }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-4">
                <console :output="out"></console>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Console as ConsoleService} from '../../../services/console'
  import tabsMixin from './mixins/project-tabs'

  import Console from './Console'

  export default {
    mixins: [tabsMixin],
    name: 'ProjectShow',
    components: {Console},
    data () {
      return {
        out: ''
      }
    },
    computed: {
      ...mapGetters('projects', ['projectById']),
      project () {
        return this.projectById(this.$route.params.id)
      }
    },
    methods: {
      runScript (command) {
        const consoleService = new ConsoleService()
        const events = {
          onStdOut: this.onStdOut,
          onStdError: this.onStdError
        }
        consoleService.runTest({folder: this.project.folder, command: command}, events)
        this.out = `> ${command}`
      },
      onStdOut (data) {
        this.out += `<br>${data}`.replace(/\n/g, '<br>')
          .replace(/ /g, '<span style="margin-left: 5px"></span>')
      },
      onStdError (data) {
        this.out += `<span style="color: rgba(233,224,28,0.65)">${data}</span>`
      }
    }
  }
</script>

<style scoped>
    .list-scroll {
        overflow-y: scroll;
        max-height: 250px;
    }

    .command-list-item {
        cursor: pointer;
    }

    .command-list-item:hover {
        background: #e9ecef;
    }

    .list-height {
        height: 277px
    }

    .btn-tool {
        padding: 0.15rem 0.3rem;
    }
</style>