
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.dfd57b993cfff8763345.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.pt-BR.e5ff89574164dba66805.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/925.latest.pt-BR.d019642a5daae94c0c42.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.pt-BR.937e5ec759b2d2f0918e.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.1520c4758ea663d4728e.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.pt-BR.c93e6a6b8624ef406214.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.c31ce01f90133ff4b630.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.pt-BR.93037259d77deea16aa3.js","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.pt-BR.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.75e3942cafc0757d63a5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.pt-BR.8965c8e2b3c5beee1394.css","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.5e52d9ec000e6dcd2cd6.css","../../../../../cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.pt-BR.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.pt-BR.fd9ccb57c0b1b4785b24.css"];
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
          xhr.open('GET.html', url, true);
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
  