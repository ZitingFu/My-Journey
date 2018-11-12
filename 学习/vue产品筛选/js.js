var datalist = [{
        title: '品牌',
        id: '1',
        list: [{
                text: '苹果'
            },
            {
                text: '三星'
            },
            {
                text: '小米'
            },
            {
                text: '华为'
            },
            {
                text: '中兴'
            },
            {
                text: '联想'
            },
            {
                text: 'oppo'
            },
            {
                text: '360手机'
            },
        ]
    },
    {
        title: '尺寸',
        id: '2',
        list: [{
                text: '3.0寸以下'
            },
            {
                text: '3.0-3.9英寸'
            },
            {
                text: '4.0-4.5英寸'
            },
            {
                text: '4.6-4.9英寸'
            },
            {
                text: '5.0-5.5英寸'
            },
            {
                text: '6.0-6.5英寸'
            },
        ]
    },
    {
        title: '系统',
        id: '3',
        list: [{
                text: 'IOS系统'
            },
            {
                text: 'Android系统'
            },
            {
                text: 'Window系统'
            },
        ]
    },
    {
        title: '网络',
        id: '4',
        list: [{
                text: '联通3G'
            },
            {
                text: '双卡单4G'
            },
            {
                text: '双卡双4G'
            },
            {
                text: '联通4G'
            },
            {
                text: '电信4G'
            },
            {
                text: '移动4G'
            }
        ]
    },
]

var vm = new Vue({
    el: '#app',
    data: {
        date: datalist,
        cont: {},
    },
    methods: {
        addcontent: function(index, con) {
            this.$set(this.cont, con, index)
        },
        remove: function(index, con) {
            this.$(this.cont, con, index)
        }
    }
})