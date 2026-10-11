
document.querySelector('#toggle_header').addEventListener('click', function () {
  const header = document.querySelector('header');

  if (header.classList.contains('red')) {
    header.classList.toggle('red');
    header.classList.toggle('green');
  } else {
    header.classList.toggle('green');
    header.classList.toggle('red');
  }
});

