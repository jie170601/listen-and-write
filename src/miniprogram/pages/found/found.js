"use strict";
Page({
    data: {
        list: ""
    },
    onLoad: function () {
    },
    found: function () {
        var list = wx.getStorageSync("words_listen_list");
        if (list.length > 0) {
            var str = "";
            for (var i = 0; i < list.length - 1; i++) {
                str += list[i].word + ',';
            }
            str += list[list.length - 1].word;
            this.setData({
                list: str
            });
            wx.setClipboardData({
                data: str,
                complete: function () {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    });
                }
            });
        }
        else {
            wx.showToast({
                title: "没有找到单词",
                icon: "none"
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFDLEVBQUU7S0FDUjtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsS0FBSyxFQUFMO1FBQ0UsSUFBSSxJQUFJLEdBQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3JELElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDZixJQUFJLEdBQUcsR0FBVSxFQUFFLENBQUE7WUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUM5QixHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUE7YUFDeEI7WUFDRCxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1lBQ2pDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFDLEdBQUc7YUFDVCxDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2xCLElBQUksRUFBQyxHQUFHO2dCQUNSLFFBQVEsRUFBQztvQkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBQyxNQUFNO3dCQUNaLElBQUksRUFBQyxTQUFTO3FCQUNmLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFDLFFBQVE7Z0JBQ2QsSUFBSSxFQUFDLE1BQU07YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsaXN0OlwiXCIgICAgXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgfSxcclxuICBmb3VuZCgpe1xyXG4gICAgbGV0IGxpc3Q6YW55ID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ3b3Jkc19saXN0ZW5fbGlzdFwiKVxyXG4gICAgaWYobGlzdC5sZW5ndGg+MCl7XHJcbiAgICAgIGxldCBzdHI6c3RyaW5nID0gXCJcIlxyXG4gICAgICBmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoLTE7aSsrKXtcclxuICAgICAgICBzdHIgKz0gbGlzdFtpXS53b3JkKycsJ1xyXG4gICAgICB9XHJcbiAgICAgIHN0ciArPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ud29yZFxyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBsaXN0OnN0clxyXG4gICAgICB9KVxyXG4gICAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgICBkYXRhOnN0cixcclxuICAgICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6XCLlpI3liLbmiJDlip9cIixcclxuICAgICAgICAgICAgaWNvbjpcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTpcIuayoeacieaJvuWIsOWNleivjVwiLFxyXG4gICAgICAgIGljb246XCJub25lXCJcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19