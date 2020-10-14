// pages/works/works.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"认识城院",
        isActive:true
      },
      {
        id:1,
        value:"科学研究",
        isActive:false
      },
      {
        id:2,
        value:"人才培养",
        isActive:false
      },
      {
        id:3,
        value:"新闻报道",
        isActive:false
      },
      {
        id:4,
        value:"综合服务",
        isActive:false
      },
      {
        id:5,
        value:"师资队伍",
        isActive:false
      },
      {
        id:6,
        value:"走进校园",
        isActive:false
      },
      {
        id:7,
        value:"招生咨询",
        isActive:false
      },
    ]
  },

  handleTap(e){
    const{index}=e.currentTarget.dataset;
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  handleTapID(e){
    var id = e;
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===id?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id==null){
      this.handleTapID(0)
    }
    else{
      this.handleTapID(parseInt(options.id))
    }

    // this.handleTapID(id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})