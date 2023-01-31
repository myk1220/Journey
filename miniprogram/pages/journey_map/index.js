Page({
    data: {
        mapCtx: null,
        markers: [
            {
                id: 0,
                title: '测试1',
                width: 48,
                height: 48,
                latitude: 39.91988,
                longitude: 116.46153,
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
                  textAlign: 'center'
                },
            },
        ],
    },

    onLoad(e) {},

    onReady() {
        this.mapCtx = wx.createMapContext('JourneyMap')
    },

    tapMap(e) {
        console.log('map',e)
    },
    markerTap(e) {
      console.log('marker',e);
    },
    calloutTap(e) {
      console.log('callout',e);
    }
})
