new Vue({
    el: '.content',
    data: {
       sortedText: "По возрастанию",
       isSorted: 0,
       products: [
          {
             nameProduct: "Картофель",
             priceProduct: 26
          },
          {
             nameProduct: "Лук",
             priceProduct: 34
          },
          {
             nameProduct: "Помидоры",
             priceProduct: 172
          },
          {
             nameProduct: "Огурцы",
             priceProduct: 86
          },
          {
             nameProduct: "Морковь",
             priceProduct: 53
          },
       ]
    },
    methods: {
       sorted: function () {
          this.isSorted = (this.isSorted === 1) ? 2 : 1;
          this.sortedText = (this.isSorted === 1) ? "По убыванию" : "По возрастанию";
       }
    },
    computed: {
       sortedProduct() {
          switch (this.isSorted) {
             case 1: return this.products.sort((d1, d2) => (d1.priceProduct > d2.priceProduct) ? 1 : -1);
             case 2: return this.products.sort((d1, d2) => (d1.priceProduct < d2.priceProduct) ? 1 : -1);
             default: return this.products;
          }
       }
    }
 });