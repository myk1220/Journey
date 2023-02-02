Page({
    data: {
        mapCtx: null,
        addMarker: false,
        removeMarker: false,
        markers: [
            {
                id: 1,
                title: '测试2',
                width: 48,
                height: 48,
                latitude: 39.91788,
                longitude: 116.46253,
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

    onLoad(e) {},

    onReady() {
        this.mapCtx = wx.createMapContext('JourneyMap')
    },
    tapAddMarker() {
      this.setData({
        addMarker: !this.data.addMarker,
        removeMarker: false
      })
    },
    tapRemoveMarker() {
      this.setData({
        removeMarker: !this.data.removeMarker,
        addMarker: false
      })
    },
    tapMap(e) {
        console.log('map', e)
        if(this.data.addMarker) {
          console.log('addMarker to Map');
        }
    },
    markerTap(e) {
        console.log('marker', e)
        if(this.data.removeMarker) {
          console.log('removeMarker to Map');
        }
    },
    calloutTap(e) {
        console.log('callout', e)
    },
})
