require.config({
    baseUrl: './',
    paths: {
        buyer: 'js/module1/buyer'
    },
    waitSeconds: 2
});
require(['buyer'], function (buyer) {
    name = 'John Smith';
    console.log(name + " enters the system");
    var result = buyer.buyThing(name);
    console.log("sale success " + result);
});
