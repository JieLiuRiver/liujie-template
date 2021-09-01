module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '项目名称'
    },
    description: {
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'A mpx project'
    },
    author: {
      type: 'string',
      message: '作者'
    },
    tsSupport: {
      message: '是否需要使用TS？',
      type: 'confirm',
      default: false
    },
    babel7Support: {
      message: '是否需要使用Babel7？',
      type: 'confirm',
      default: true
    },
    needEslint: {
      type: 'confirm',
      message: '是否需要ESlint',
      default: true
    },
    needDll: {
      type: 'confirm',
      message: '是否需要配置Dll',
      default: false
    },
  },
  filters: {
    'tsconfig.json': 'tsSupport',
    '**/*.ts': 'tsSupport',
    '.babelrc': '!babel7Support',
    'babel.config.json': 'babel7Support',
    'build/buildDll.js': 'needDll',
    'config/dll.conf.js': 'needDll',
    'build/getDllEntries.js': 'needDll',
    'build/getDllManifests.js': 'needDll',
    'src/lib/dll.js': 'needDll',
    '.eslintrc.js': 'needEslint'
  },
  complete: function (data, { chalk }) {
    const green = chalk.green
    console.log(green('complete!'))
  }
}
