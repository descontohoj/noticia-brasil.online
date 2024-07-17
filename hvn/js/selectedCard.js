function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);

    if (starElement) {
        starElement.className = className;
        starElement.style.color = color;
    }
}

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    clickedElement.classList.add('active');

    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            
            break;
        case 'card__grade2':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');

            break;
        case 'card__grade3':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');

            break;
        case 'card__grade4':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');

            break;
        case 'card__grade5':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');

            break;
    }

    if (clickedElement.parentNode.parentNode.parentNode.id == 'pergunta01') {
        if (document.querySelector('.card__grade.active') && document.querySelector('.resposta__grade.resposta1.active') && document.querySelector('.resposta__grade.resposta1-1.active')) {
            document.getElementById('enviarResposta01').removeAttribute('disabled');

            document.getElementById('enviarResposta01').classList.add('active');
        }
    } else if (clickedElement.parentNode.parentNode.parentNode.id == 'pergunta02') {
        if (document.querySelector('.card__grade.active') && document.querySelector('.resposta__grade.resposta2.active') && document.querySelector('.resposta__grade.resposta2-1.active')) {
            document.getElementById('enviarResposta02').removeAttribute('disabled');

            document.getElementById('enviarResposta02').classList.add('active');
        }
    } else if (clickedElement.parentNode.parentNode.parentNode.id == 'pergunta03') {
        if (document.querySelector('.card__grade.active') && document.querySelector('.resposta__grade.resposta3.active') && document.querySelector('.resposta__grade.resposta3-1.active')) {
            document.getElementById('enviarResposta03').removeAttribute('disabled');

            document.getElementById('enviarResposta03').classList.add('active');
        }
    } else if (clickedElement.parentNode.parentNode.parentNode.id == 'pergunta04') {
        if (document.querySelector('.card__grade.active') && document.querySelector('.resposta__grade.resposta4.active') && document.querySelector('.resposta__grade.resposta4-1.active')) {
            document.getElementById('enviarResposta04').removeAttribute('disabled');

            document.getElementById('enviarResposta04').classList.add('active');
        }
    } else if (clickedElement.parentNode.parentNode.parentNode.id == 'pergunta05') {
        if (document.querySelector('.card__grade.active') && document.querySelector('.resposta__grade.resposta5.active') && document.querySelector('.resposta__grade.resposta5-1.active')) {
            document.getElementById('enviarResposta05').removeAttribute('disabled');

            document.getElementById('enviarResposta05').classList.add('active');
        }
    }
}
