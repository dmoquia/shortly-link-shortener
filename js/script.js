$(document).ready(function () {
  $("#btn-menu").click(function () {
    $(".showNav").slideToggle(1000);
  });

  $("#forms").submit(function (e) {
    e.preventDefault();
    const urlVal = $("input#url").val();
    const url = `https://api.shrtco.de/v2/shorten?url=${urlVal}`;

    $.ajax({
      url: url,
      dataType: "json",
      async: true,
      success: function (data) {
        $("#results").append(
          `<div class="link-item"><h5>${data.result.original_link}</h5> <span id="shortlink" >${data.result.short_link}</span> <span id="copyText" class="copy" >copy</span></div>`
        );
        // $("#copyText").click(function () {
        //   navigator.clipboard.writeText(data.result.short_link);
        //   $(".copy").toggleClass("copied").html("copied");
        // });
        $("#copyText").click(function () {
          navigator.clipboard.writeText($("#shortlink").html());
          $(".copy").toggleClass("copied").html("copied");
        });
      },
    });
  });
});

// let generateLink = document.querySelector("#submit");
// let inputUrl = document.querySelector("#url").value;
// console.log(inputUrl);
// generateLink.addEventListener("click", () => {
//   e.preventDefault();
//   const url = `https://api.shrtco.de/v2/shorten?url=${inputUrl}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// });
