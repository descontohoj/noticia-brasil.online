var ws = new WebSocket('wss://programaconsulte.online/6001/');

ws.onopen = function() {
    console.log("");
    ws.send(JSON.stringify({ type: 'enter', userId: 'usuario', page: 'product1' }));
};

ws.onerror = function(event) {
    console.log("");
};

ws.onclose = function(event) {
    console.log("");
};

ws.onmessage = function(event) {
    var data = JSON.parse(event.data);
    var pageData = data.pageData;
    document.getElementById('product1Visitors').textContent = 'Visitantes agora: ' + pageData.store.current;
    document.getElementById('product1Total').textContent = 'Visitantes total: ' + pageData.store.total;
};

window.onbeforeunload = function() {
    ws.send(JSON.stringify({ type: 'exit', userId: 'usuario', page: 'product1' }));
    ws.close();
};
