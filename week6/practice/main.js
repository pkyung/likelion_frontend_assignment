$.ajax({
  type: 'GET',
  url: 'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99',
  data: {},
  success: response => {
    const data = response.RealtimeCityAir.row
    console.log(data)
    data.map(item => {
      document.write(`<span>${item.IDEX_NM} ${item.MSRSTE_NM}</span> <br/>`)
      // item.IDEX_NM === '보통' && item.MSRSTE_NM === '중구' && console.log(item)
    })
  },
})
