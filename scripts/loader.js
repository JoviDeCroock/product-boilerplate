module.exports = function fastRefreshLoader(source) {
  return `${source}\n${runtime}`;
};

const runtime = String(function() {
  console.log('module.hot', !!module.hot);
  if (module.hot) {
    var pfr = require('./preact-refresh');
    module.hot.dispose(function(data) {
      data.module = module;
    });

    module.hot.accept(__filename, function() {
      const m = module.hot.data && module.hot.data.module && module.hot.data.module;
      if (m) {
        for (let i in module.exports) {
          const fn = module.exports[i];
          if (typeof fn === 'function') {
            if (i in m.exports) {
              pfr.replaceComponent(m.exports[i], fn);
            }
          }
        }
      }
    });
  }
}).replace(/^.*{|}/g,'');
