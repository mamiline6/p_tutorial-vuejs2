var app = new Vue ({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'vmSocks-green-onWhite.jpg',
    altText: 'green socks',
    // inventory: 0,
    inStock: false, //インラインスタイルで display:note が付与される
    onSale: true
  }
})