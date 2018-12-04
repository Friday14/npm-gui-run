const util = require('util')
const exec = util.promisify(require('child_process').exec)

const {spawn} = require('child_process')

export class Console {
  async run ({folder, command}) {
    let commandDir = null
    if (folder) {
      commandDir = `cd ${folder} &&`
    }

    console.log(folder)
    command = commandDir + command
    console.log(command)
    const {stdout, stderr} = await exec(command)

    console.log(stdout, stderr)
  }

  async runTest ({folder, command}, {onStdOut, onStdError}) {
    this.commandParse(command).map(cmdChunk => {
      const {command, args} = cmdChunk
      console.log(`run ${command} args:`, args)
      const cmd = spawn(command, args, {
        cwd: folder
      })

      cmd.on('error', (data) => {
        onStdError(data)
        console.log(data)
      })
      cmd.stdout.on('error', (err) => {
        onStdError(err)
        console.log(err)
      })
      cmd.stdout.on('data', (data) => {
        onStdOut(data)
        console.log(`stdout: ${data}`)
      })
      cmd.stderr.on('data', (data) => {
        onStdError(data)
        console.log(`stderr: ${data}`)
      })
      cmd.on('close', (code) => {
        onStdOut(`child process exited with code ${code}`)
        console.log(`child process exited with code ${code}`)
      })
    })
  }

  commandParse (commands) {
    const chunks = commands.split(' && ')
    return chunks.map(chunk => {
      const c = chunk.trim().split(' ')

      return {
        command: c[0],
        args: c.slice(1)
      }
    })
  }
}
