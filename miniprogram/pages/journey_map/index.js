let MapCtx = null

Page({
  data: {
    markers: [
      {
        id: 1,
        title: '测试1',
        width: 48,
        height: 48,
        latitude: 39.91788,
        longitude: 116.46253,
        iconPath: '../../assets/image/trace.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
      {
        id: 2,
        title: '测试2',
        width: 48,
        height: 48,
        latitude: 39.91688,
        longitude: 116.46353,
        iconPath: '../../assets/image/trace.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
      {
        id: 3,
        title: '测试3',
        width: 48,
        height: 48,
        latitude: 39.91748,
        longitude: 116.42253,
        iconPath: '../../assets/image/trace.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
      {
        id: 4,
        title: '测试4',
        width: 48,
        height: 48,
        latitude: 39.92788,
        longitude: 116.43253,
        iconPath: '../../assets/image/position.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
      {
        id: 5,
        title: '测试5',
        width: 48,
        height: 48,
        latitude: 39.92788,
        longitude: 116.46233,
        iconPath: '../../assets/image/position.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
      {
        id: 6,
        title: '测试6',
        width: 48,
        height: 48,
        latitude: 39.91188,
        longitude: 116.46653,
        iconPath: '../../assets/image/position.png',
        joinCluster: true,
        callout: {
          content: '文本内容',
          color: '#ff0000',
          fontSize: 14,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#000000',
          bgColor: '#fff',
          padding: 5,
          display: 'BYCLICK',
          textAlign: 'center',
        },
      },
    ],
  },

  onLoad(e) {
    this.mapCtx = wx.createMapContext('ELTBZ-4CHKD-UFT4A-HWU6R-GOW5H-KPB7J', this)
  },

  tapSelfPosition() {

  },

  tapShowAll() {
    const points = this.data.markers.map(item => {
      return {
        latitude: item.latitude,
        longitude: item.longitude
      }
    })
    this.mapCtx.includePoints({
      points: points,
      padding: [100, 100, 100, 100],
      success: function (e) {
        console.log(e)
      }
    })
  },

  tapAddMarker() {

  },

  tapRemoveMarker() {

  },

  tapMap(e) {
    console.log('map', e)
    if (this.data.addMarker) {
      console.log('addMarker to Map');
    }
  },

  markerTap(e) {
    console.log('marker', e)
    if (this.data.removeMarker) {
      console.log('removeMarker to Map');
    }
  },

  calloutTap(e) {
    console.log('callout', e)
  },
})