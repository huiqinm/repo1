// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    box2:'box2',
    num:20,
    txtValue:'默认值',
    arr1:[10,20,30],
    arr2:[
      {
        id:1,
        name:'张三',
        age:12
      },
      {
        id:2,
        name:'李四',
        age:12
      },
      {
        id:3,
        name:'王五',
        age:12
      }
    ],
    arr3:[
      {
        id:1,
        name:'一班',
        age:12
      },
      {
        id:2,
        name:'二班',
        age:12
      },
      {
        id:3,
        name:'王五',
        age:12
      }
    ]
  },

  hdInput(e){
    let inputVal = e.detail.value
    this.setData({
      txtValue:inputVal
    })
    console.log('hdinpute=====',e.detail.value)
  },

  hdTap(e){
    console.log('e=====',e)
    this.setData({num:this.data.num + e.currentTarget.dataset.val})
    //数组
    let {arr2,num} = this.data;
    arr2.push({
      id:num,
      name:this.data.txtValue,
      age:num
    })
    this.setData({
      arr2:arr2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})