export default {
  data () {
    return {
      activeTab: 'info',
      tabs: {
        info: {
          icon: 'fa-info-circle',
          title: 'Information',
          list: () => false,
          keys: [
            'name',
            'description',
            'author',
            'version',
            'license'
          ]
        },
        dependencies: {
          icon: 'fa-cog',
          title: 'Dependencies',
          list: () => {
            return this.project.dependencies
          },
          controls: {
            checkUpdate: {
              title: 'check update',
              classes: ['btn', 'btn-sm', 'btn-primary']
            }
          }
        },
        devDependencies: {
          icon: 'fa-cogs',
          title: 'Dev Dependencies',
          list: () => {
            return this.project.devDependencies
          }
        }
      }
    }
  }
}
