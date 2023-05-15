const elUrlShortenerForm = document.querySelector('.js-url-shortener-form'),
  elUrlShortenerResults = document.querySelector('.url-shortener__results');

elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault()

  elUrlShortenerResults.classList.add('url-shortener__results--open')
})
