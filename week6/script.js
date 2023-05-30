$.ajax({
  type: "GET",
  url: "https://api.itbook.store/1.0/new",
  data: {},
  dataType: "json",
  success: (response) => {
    console.log(response);
  },
});
