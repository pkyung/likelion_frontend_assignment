$.ajax({
  type: "GET",
  url: "https://api.itbook.store/1.0/new",
  data: {},
  success: function (response) {
    const json_arr = response["books"];
    const Row = 5;
    const Col = 4;
    let movieIndex = 0;

    for (let row = 0; row < Row; row++) {
      const tableRow = $("<tr></tr>");

      for (let col = 0; col < Col; col++) {
        if (movieIndex >= json_arr.length) {
          break;
        }

        const movie = json_arr[movieIndex];
        const url = movie.url;
        const image = movie.image;
        const title = movie.title;
        const price = movie.price;

        const movieHTML = `
            <td>
              <a href="${url}">
                <img src="${image}" alt="${title}"/>
              </a>
              <p class="title">${title}</p>
              <p class="price">${price}</p>
            </td>
          `;

        const $movieElement = $(movieHTML);
        $movieElement.find(".title").click(function () {
          window.location.href = url;
        });

        $movieElement.find(".price").click(function () {
          window.location.href = url;
        });

        tableRow.append($movieElement);
        movieIndex++;
      }

      $("#movies").append(tableRow);
    }
  },
});
