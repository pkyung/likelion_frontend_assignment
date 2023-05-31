$.ajax({
    type: "GET",
    url: "https://api.itbook.store/1.0/new",
    data: {},
    success: function (response) {
        const json_row = response["books"];

        const newtr = document.querySelector(".table");

        for (var row = 0; row < 5; row++) {
            const trImage = document.createElement("tr");
            const trTitle = document.createElement("tr");
            // const trSubtitle = document.createElement("tr");
            const trPrice = document.createElement("tr");

            for (var col = 0; col < 4; col++) {
                const i = row * 4 + col;
                const img = json_row[i]["image"];
                const tt = json_row[i]["title"];
                // const subt = json_row[i]["subtitle"];
                const pri = json_row[i]["price"];
                const url = json_row[i]["url"];

                const tdImage = document.createElement("td");
                
                const images = document.createElement("img");
                const hyImages = document.createElement("a");
                hyImages.href = `${url}`;
                images.src = `${img}`;
                hyImages.appendChild(images);
                tdImage.appendChild(hyImages);
                trImage.appendChild(tdImage);
                tdImage.setAttribute("class","dlalwl");
                

                const tdTitle = document.createElement("td");
                const hyTitle = document.createElement("a");
                const title = document.createTextNode(tt);
                hyTitle.href = `${url}`;
                hyTitle.appendChild(title);
                tdTitle.appendChild(hyTitle);
                trTitle.appendChild(tdTitle);
                tdTitle.setAttribute("class","wpahr");

                // const tdSubtitle = document.createElement("td");
                // const subTitle = document.createTextNode(subt);
                // const hySub = document.createElement("a");
                // hySub.href = `${url}`;
                // hySub.appendChild(subTitle);
                // tdSubtitle.appendChild(hySub);
                // trSubtitle.appendChild(tdSubtitle);
                // tdSubtitle.setAttribute("class","qnwpahr");

                const tdPrice = document.createElement("td");
                const price = document.createTextNode(pri);
                const hyPri = document.createElement("a");
                hyPri.href=`${url}`;
                hyPri.appendChild(price);
                tdPrice.appendChild(hyPri);
                trPrice.appendChild(tdPrice);
                tdPrice.setAttribute("class","rkrur");
            }

            newtr.appendChild(trImage);
            newtr.appendChild(trTitle);
            // newtr.appendChild(trSubtitle);
            newtr.appendChild(trPrice);
        }

        console.log(response);
    },
});
