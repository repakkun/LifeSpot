﻿function getReview() {
    let review = {}
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }
    // Сохраним текст отзыва и время
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }
   
    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}