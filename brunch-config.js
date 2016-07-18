module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    elmBrunch: {
      mainModules: ["app/src/Clock.elm"],
      outputFolder: "public/"
    },
    babel: {presets: ['es2015']}
  }
};
