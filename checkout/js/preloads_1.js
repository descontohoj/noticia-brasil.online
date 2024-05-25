
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.a45640526af0becafcca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.latest.en.afd8074425d101afc0b5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2307.latest.en.81503ae9ef057f1823b6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.latest.en.03c0b36e91bf756d5735.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.4f8e05c92e6bbc14ac31.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.latest.en.7c8f677325d8263eb161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8383.latest.en.650e4663e61705d98908.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.latest.en.eddf96d2cfec72a2522c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4768.latest.en.60201df6f2f1375e5780.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2978.latest.en.2ec1a578a5e1637a01b9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6117.latest.en.4302e1e4b67f32db0223.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3678.latest.en.612a65a1eb0a166b8f04.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8156.latest.en.49661b3e7f6b116918c7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.47b9baf0036c1651a13a.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.latest.en.a27a3ad9b23acef02fb4.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.2e0eaac22a5cb50aa5d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.2e09285a536b15d91085.css"];
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
  