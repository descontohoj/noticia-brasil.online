
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.9939222a2c9c712eff53.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/857.latest.pt-BR.bfdcc908b7510e789bcf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6655.latest.pt-BR.2e66baebe20bc5ed0fe5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.latest.pt-BR.03c0b36e91bf756d5735.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.77475c561451a4ce83ca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.latest.pt-BR.7c8f677325d8263eb161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8383.latest.pt-BR.68213c11b0a115555fa3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.latest.pt-BR.eddf96d2cfec72a2522c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4653.latest.pt-BR.560838368915a521ff55.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2990.latest.pt-BR.010941006044a646b042.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8546.latest.pt-BR.8c600f5f0c33012b74c5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8610.latest.pt-BR.32815ada174124124a38.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.latest.pt-BR.05aa66acdf93c5b182d5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.bafdf3d37462f7f29df3.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/857.latest.pt-BR.faa5c8f5c472404f03cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.71184ade77e999e513cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.14532e2108b477e5b681.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  