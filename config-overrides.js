const path = require('path');

module.exports = function override(config, env) {
  // 절대 경로 설정
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  };

  return config;
};
