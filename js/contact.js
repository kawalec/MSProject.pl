document.querySelector(".postcard__send").addEventListener("click", () => {
  const title = document.querySelector(".postcard__title").value,
    body = document.querySelector(".postcard__body").value;

  if (title == "" || body == "") {
    alert(`Proszę uzupełnić tytuł i treść wiadomości.`);
  } else {
    document.location.href =
      "mailto:biuro@msproject.pl&cc=kawalec@gmail.com?subject=" +
      encodeURIComponent(title) +
      "&body=" +
      encodeURIComponent(body);
  }
});
