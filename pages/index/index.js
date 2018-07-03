

Page({
  data: {
    str: '正在加载',
    imgUrls: [
      'https://b.vimage1.com/upload/mst/2018/06/25/187/58a38679ea140a3423fa7c9ddbe7f591_604x290_80.jpg',
      'https://a4.vimage1.com/upload/flow/2018/06/20/44/15294792899457.jpg',
      'https://a2.vimage1.com/upload/flow/2018/06/25/94/15299165164451.jpg',
      'https://a2.vimage1.com/upload/flow/2018/06/25/192/15299144105980.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  onLoad(e) {
         console.log(e.title)
         this.setData({
            msgList: [
              { url: "url", title: "公告：风冷变频冰箱，保鲜节能更加节省" },
              { url: "url", title: "公告：微生活的推荐清单" },
              { url: "url", title: "公告：萌宝学爬行，垫子要选好？"
              
             }]
           });
    
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})