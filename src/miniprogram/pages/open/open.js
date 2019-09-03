"use strict";
Page({
    data: {
        gitee: 'https://gitee.com/dengjijie/listen-and-write',
        github: 'https://github.com/jie170601/listen-and-write'
    },
    onLoad() {
    },
    toGitee() {
        let that = this;
        wx.setClipboardData({
            data: that.data.gitee,
            complete: () => {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        });
    },
    toGithub() {
        let that = this;
        wx.setClipboardData({
            data: that.data.github,
            complete: () => {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBQyw4Q0FBOEM7UUFDcEQsTUFBTSxFQUFDLCtDQUErQztLQUN2RDtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFFBQVEsRUFBQyxHQUFFLEVBQUU7Z0JBQ1gsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBnaXRlZTonaHR0cHM6Ly9naXRlZS5jb20vZGVuZ2ppamllL2xpc3Rlbi1hbmQtd3JpdGUnLFxyXG4gICAgZ2l0aHViOidodHRwczovL2dpdGh1Yi5jb20vamllMTcwNjAxL2xpc3Rlbi1hbmQtd3JpdGUnXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgfSxcclxuICB0b0dpdGVlKCl7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgIHd4LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICBkYXRhOiB0aGF0LmRhdGEuZ2l0ZWUsXHJcbiAgICAgIGNvbXBsZXRlOigpPT57XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5aSN5Yi25oiQ5YqfJyxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvR2l0aHViKCl7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgIHd4LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICBkYXRhOiB0aGF0LmRhdGEuZ2l0aHViLFxyXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnycsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59KSJdfQ==