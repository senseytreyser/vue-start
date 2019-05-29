var app = new Vue({
    el: "#app",
    data: {
        product:"Носки",
        image: "https://avatars.mds.yandex.net/get-marketpic/239743/market_CHeoFtQoQPyfkF3F2ieYJQ/orig",
        description: "Картинка с носками",
        height: "200",
        inState: false,
        prop: ['удобные','хлопковые','лёгкие'],
        variants: [
            { id: 1234, color: 'чёрный' },
            { id: 1233, color: 'белый' }
        ] 
    }
})