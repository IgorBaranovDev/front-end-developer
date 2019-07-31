$(function () {
  document.getElementById('form-send').addEventListener('submit', function (evt) {
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php", true);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        console.log('send');

        if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function () {
      alert('Ошибка, попробуйте еще раз');
    };
    http.send(new FormData(f));
  }, false);

});
