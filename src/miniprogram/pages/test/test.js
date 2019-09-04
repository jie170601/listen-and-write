"use strict";
var audio = wx.createInnerAudioContext();
Page({
    data: { mp3: 'https://gitee.com/dengjijie/tingxie/raw/master/%E9%9F%B3%E9%A2%91/dictvoice%20.mpeg',
        pause: true
    },
    onLoad: function () {
        audio.src = this.data.mp3;
        audio.autoplay = false;
    },
    test: function () {
        var that = this;
        if (audio.pause) {
            audio.play();
            this.setData({
                pause: false
            });
            audio.onEnded(function () {
                that.setData({
                    pause: true
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBQ3hDLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFlLEdBQUcsRUFBQyxxRkFBcUY7UUFDNUcsS0FBSyxFQUFDLElBQUk7S0FDWDtJQUNELE1BQU07UUFDSixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ3pCLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFDRCxJQUFJLEVBQUo7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDWixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLEtBQUssRUFBQyxLQUFLO2FBQ1osQ0FBQyxDQUFBO1lBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLEtBQUssRUFBQyxJQUFJO2lCQUNYLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGF1ZGlvID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG5QYWdlKHtcclxuICBkYXRhOiB7ICAgICAgICAgICAgICBtcDM6J2h0dHBzOi8vZ2l0ZWUuY29tL2RlbmdqaWppZS90aW5neGllL3Jhdy9tYXN0ZXIvJUU5JTlGJUIzJUU5JUEyJTkxL2RpY3R2b2ljZSUyMC5tcGVnJyxcclxuICAgIHBhdXNlOnRydWVcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGF1ZGlvLnNyYyA9IHRoaXMuZGF0YS5tcDNcclxuICAgIGF1ZGlvLmF1dG9wbGF5ID0gZmFsc2VcclxuICB9LFxyXG4gIHRlc3QoKXtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKGF1ZGlvLnBhdXNlKSB7XHJcbiAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBwYXVzZTpmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBhdWRpby5vbkVuZGVkKCgpPT57XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICBwYXVzZTp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19