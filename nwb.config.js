module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ResponsiveDrawer',
      externals: {
        react: 'React'
      }
    }
  }
}
