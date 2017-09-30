angular.module('BookApp', [])
    .controller("MenuController", function($scope) {
        $scope.name = '';
        $scope.menuTitles = ['招牌','果汁','茶饮','刨冰','沙拉','水果'];
        $scope.products =  [
            {name:"冰柠檬红茶",price:5,unit:"杯"},
            {name:"百花罗汉果茶",price:5,unit:"杯"},
            {name:"青柠檬茉莉花茶",price:5,unit:"杯"},
            {name:"蜂蜜枸杞茶",price:18,unit:"杯"},
            {name:"生姜茶",price:10,unit:"杯"},
            {name:"原味奶茶",price:22,unit:"杯"},
            {name:"红豆奶茶",price:25,unit:"杯"},
            {name:"招牌咖啡",price:20,unit:"杯"},
            {name:"菠萝香蕉奶昔",price:18,unit:"杯"},
            {name:"木瓜酸奶奶昔",price:18,unit:"杯"},
            {name:"蓝莓冰沙",price:18,unit:"杯"},
            {name:"菠萝香蕉冰沙",price:18,unit:"杯"},
            {name:"西柚水蜜桃冰沙",price:18,unit:"杯"},
            {name:"哈密瓜冰淇淋",price:10,unit:"杯"},
            {name:"香芋冰淇淋",price:10,unit:"杯"},
            {name:"巧克力冰淇淋",price:10,unit:"杯"}
        ];

        $scope.goTop = function(){
            $('html, body').animate({scrollTop: 0}, 1000);
        };


        $(window).scroll(function() {
            if ($(window).scrollTop() > 100)
                $('#go-top').show('slow');
            else
                $('#go-top').hide('slow');
        });

        $(function() {

            $("#info").mmenu({
                extensions 	: [ "fullscreen", "theme-black", "listview-large", "fx-panels-slide-up", "fx-listitems-drop", "border-offset" ],
                offCanvas	: {
                    position 	: "bottom",
                    zposition	: "front"
                },
                navbar 		: {
                    title 		: ""
                },
                navbars		: [{
                    height 	: 2,
                    content : [
                        '<a href="#/" class="fa fa-phone"></a>',
                        '<img src="img/avatar.jpg" class="img-circle" />',
                        '<a href="#/" class="fa fa-envelope"></a>'
                    ]
                }, {
                    content : ["prev","title"]
                }]}, { });

            $("#menu").mmenu({
                extensions 	: [ "shadow-panels", "fx-panels-slide-100", "border-none", "theme-black" ],
                offCanvas	: {
                    //	position 	: "right"
                },
                navbars		: {
                    content : [ "prev" ],
                    height 	: 0
                },
                setSelected: true
            }, { });

            $(".mh-head.mm-sticky").mhead({
                scroll: {
                    show: 200
                }
            });
            $(".mh-head:not(.mm-sticky)").mhead({
                scroll: false
            });
        });

    });