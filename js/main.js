var app = new Vue({
    el: "#app",
    data: {
        product:"Носки",
        brand: "Ивановские",
        image: "https://avatars.mds.yandex.net/get-marketpic/239743/market_CHeoFtQoQPyfkF3F2ieYJQ/orig",
        description: "Картинка с носками",
        height: "200",
        inState: true,
        prop: ['удобные','хлопковые','лёгкие'],
        variants: [
            { id: 1234, color: 'black', img: 'https://avatars.mds.yandex.net/get-marketpic/239743/market_CHeoFtQoQPyfkF3F2ieYJQ/orig' },
            { id: 1233, color: 'gray', img: 'https://avatars.mds.yandex.net/get-marketpic/196766/market_duo2OqLZX8r3JIYAoxXigQ/orig' }
        ],
        card: 0
    },
    methods: {
        addToCard(){
            this.card++;
        },
        changeProduct(imgUrl){
            this.image = imgUrl;
        }
    },
    computed: {
        title(){
            return this.brand + " " + this.product;
        }
    }
})