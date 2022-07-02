module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://test-starpi-heroku.herokuapp.com/'),
  app: {
    keys: env.array('APP_KEYS')
  },
})


