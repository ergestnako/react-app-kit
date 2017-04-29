function buildConfig(env) {
  return require('./webpack/webpack.' + env + '.config.js')(env)
}

module.exports = buildConfig
