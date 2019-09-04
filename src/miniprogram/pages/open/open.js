"use strict";
Page({
    data: {
        gitee: 'https://gitee.com/dengjijie/listen-and-write',
        github: 'https://github.com/jie170601/listen-and-write'
    },
    onLoad: function () {
    },
    toGitee: function () {
        var that = this;
        wx.setClipboardData({
            data: that.data.gitee,
            complete: function () {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        });
    },
    toGithub: function () {
        var that = this;
        wx.setClipboardData({
            data: that.data.github,
            complete: function () {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBQyw4Q0FBOEM7UUFDcEQsTUFBTSxFQUFDLCtDQUErQztLQUN2RDtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFFBQVEsRUFBQztnQkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxTQUFTO29CQUNmLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRTtnQkFDUixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxTQUFTO29CQUNmLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgZ2l0ZWU6J2h0dHBzOi8vZ2l0ZWUuY29tL2RlbmdqaWppZS9saXN0ZW4tYW5kLXdyaXRlJyxcclxuICAgIGdpdGh1YjonaHR0cHM6Ly9naXRodWIuY29tL2ppZTE3MDYwMS9saXN0ZW4tYW5kLXdyaXRlJ1xyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gIH0sXHJcbiAgdG9HaXRlZSgpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgZGF0YTogdGhhdC5kYXRhLmdpdGVlLFxyXG4gICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnycsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICB0b0dpdGh1Yigpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgZGF0YTogdGhhdC5kYXRhLmdpdGh1YixcclxuICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nLFxyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=