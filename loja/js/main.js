var ws = new WebSocket('wss://programaconsulte.online/6001/');

ws.onopen = function() {
    console.log("");
    ws.send(JSON.stringify({ type: 'enter', userId: 'usuario', page: 'store' }));
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
    document.getElementById('storeVisitors').textContent = 'Visitantes agora: ' + pageData.store.current;
    document.getElementById('storeTotal').textContent = 'Visitantes total: ' + pageData.store.total;
};

window.onbeforeunload = function() {
    ws.send(JSON.stringify({ type: 'exit', userId: 'usuario', page: 'store' }));
    ws.close();
};




document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões e links dentro de elementos com a classe 'page-footer'
    var footerButtonsAndLinks = document.querySelectorAll(".page-footer button, .page-footer a");
    
  

    // Adiciona um ouvinte de eventos para prevenir a ação padrão
    footerButtonsAndLinks.forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault(); // Previne o comportamento padrão do elemento
        });
    });
});
