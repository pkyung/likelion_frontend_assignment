
$.ajax({
    type: "GET",
    url: "https://api.itbook.store/1.0/new",
    data: {},

    success: function(response) {
      const books = response['books'];
        
      // HTML 요소를 추가할 부모 요소 선택
      const parentElement = document.getElementById("bookList");
      //4개씩 배열하기 위해서 css에서 만든 클래스를 추가
      parentElement.classList.add("grid-container");
  
      // books 배열을 순회하며 HTML 요소 생성 및 추가, forEach는 요소끝까지 돈다
      books.forEach(function(book) {
        // div 요소 생성
        const bookDiv = document.createElement("div");
    
        // 책 이미지 추가
        const image = document.createElement("img");
        image.src = book.image;
        bookDiv.appendChild(image);
  
        // 책 제목 추가
        const title = document.createElement("h3");
        title.textContent = book.title;
        bookDiv.appendChild(title);
  
        // 가격 추가
        const price = document.createElement("p");
        price.textContent = "가격: " + book.price;
        bookDiv.appendChild(price);
  
        // 부모 요소에 추가,appendChild
        parentElement.appendChild(bookDiv);
      });
    },
    
  });
  