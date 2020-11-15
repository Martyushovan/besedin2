

let video = document.querySelectorAll('.video'); //тут список всех элементов по которым будем кликать и с помощью черной магией цикла, слушателя событий, и функции будем вставлять в див модал наш айфрейм

for (i = 0; i < video.length; i++) {
  video[i].addEventListener('click', function() {
    let src = this.dataset.src; // получаем значение дата атрибута
    let modal = document.querySelector('.modal'); //определяем куда будем вставлять айфрейм
    let div = '<iframe width="720" height="405" src="' + src + '" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="autoplay" allowfullscreen id="v1"></iframe>' //определяем как будет выглядеть айфрейм на кликнутом элементе
    modal.innerHTML = div; // вставлям в .modal наш ifarme
  });
}