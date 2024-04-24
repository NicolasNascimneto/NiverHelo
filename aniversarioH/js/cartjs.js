const birthdayCard = document.querySelector('.birthdayCard');

birthdayCard.addEventListener('click', function() {
  this.classList.toggle('opened');
});