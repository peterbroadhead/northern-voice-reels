module.exports = {
  // ... existing config ...
  module: {
    rules: [
      // ... other rules ...
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.json$/,
        type: 'json'
      },
      {
        test: /\.(yaml|yml)$/,
        use: 'yaml-loader'
      }
    ]
  }
  // ... rest of config ...
}; 