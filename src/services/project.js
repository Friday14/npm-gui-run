const fs = require('fs')

export class Project {
  parse (folder) {
    try {
      console.log(`~~~`, folder)
      let packageFile = fs.readdirSync(folder).find(f => f === 'package.json')
      if (!packageFile) {
        return {
          error: 'Package.json not found'
        }
      }
      console.log(`${folder}/package.json`)
      let file = fs.readFileSync(`${folder}/package.json`, 'utf8')
      return JSON.parse(file)
    } catch (e) {
      console.log(e)
      return {
        error: e.message
      }
    }
  }
}
