const env = process.env.EMP_ENV || 'dev'
const dev = {
  host: 'localhost',
  port: 6008,
  publicPath: 'http://localhost:6008/',
}
const prod = {
  host: 'localhost',
  port: 6008,
  publicPath: 'http://localhost:6008/',
}
const configs = {dev, prod}
exports.getConfig = env => {
  return configs[env] || {}
}

exports.config = configs[env]
