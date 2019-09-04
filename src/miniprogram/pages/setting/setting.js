"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Params_1 = require("../../beans/Params");
var StorageUtil_1 = require("../../utils/StorageUtil");
Page({
    data: {
        params: new Params_1.Params(),
        modeChecked: false,
        pronChecked: false
    },
    onLoad: function () {
    },
    onShow: function () {
        var params = StorageUtil_1.StorageUtil.getParams();
        var modeChecked = false;
        var pronChecked = false;
        if (params.getMode() === Params_1.Mode.RANDOM) {
            modeChecked = true;
        }
        if (params.getPron() === Params_1.Pronunciation.AMERICAN) {
            pronChecked = true;
        }
        this.setData({
            params: params,
            modeChecked: modeChecked,
            pronChecked: pronChecked
        });
    },
    flushParams: function () {
        StorageUtil_1.StorageUtil.setParams(this.data.params);
    },
    speedChange: function (e) {
        var speed = e.detail.value;
        var params = this.data.params;
        params.setSpeed(speed);
        this.setData({
            params: params
        });
        this.flushParams();
    },
    repeatChange: function (e) {
        var repeat = e.detail.value;
        var params = this.data.params;
        params.setRepeat(repeat);
        this.setData({
            params: params
        });
        this.flushParams();
    },
    intervalChange: function (e) {
        var interval = e.detail.value;
        var params = this.data.params;
        params.setInterval(interval);
        this.setData({
            params: params
        });
        this.flushParams();
    },
    pauseChange: function (e) {
        var pause = e.detail.value;
        var params = this.data.params;
        params.setPause(pause);
        this.setData({
            params: params
        });
        this.flushParams();
    },
    modeChange: function () {
        var params = this.data.params;
        var modeChecked = !this.data.modeChecked;
        if (params.getMode() === Params_1.Mode.RANDOM) {
            params.setMode(Params_1.Mode.ORDER);
        }
        else if (params.getMode() === Params_1.Mode.ORDER) {
            params.setMode(Params_1.Mode.RANDOM);
        }
        this.setData({
            params: params,
            modeChecked: modeChecked
        });
        this.flushParams();
    },
    pronChange: function () {
        var params = this.data.params;
        var pronChecked = !this.data.pronChecked;
        if (params.getPron() === Params_1.Pronunciation.AMERICAN) {
            params.setPron(Params_1.Pronunciation.BRITISH);
        }
        else if (params.getPron() === Params_1.Pronunciation.BRITISH) {
            params.setPron(Params_1.Pronunciation.AMERICAN);
        }
        this.setData({
            params: params,
            pronChecked: pronChecked
        });
        this.flushParams();
    },
    question_1: function () {
        wx.navigateTo({
            url: '../found/found',
        });
    },
    question_2: function () {
        wx.navigateTo({
            url: '../test/test',
        });
    },
    question_3: function () {
        wx.navigateTo({
            url: '../warn/warn',
        });
    },
    question_4: function () {
        wx.navigateTo({
            url: '../open/open',
        });
    },
    onShareAppMessage: function () {
        return {
            title: '曾经也讨厌过英语课上听写单词',
            path: '/pages/setting/setting',
            imageUrl: "http://img1.ph.126.net/gtigWEVlA6XbXE9aFrB0ew==/2098114476501923011.jpg"
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBZ0U7QUFDaEUsdURBQXFEO0FBRXJELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxJQUFJLGVBQU0sRUFBRTtRQUNwQixXQUFXLEVBQUMsS0FBSztRQUNqQixXQUFXLEVBQUMsS0FBSztLQUNsQjtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxNQUFNLEdBQVcseUJBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUE7UUFDaEMsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFBO1FBQ2hDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLGFBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsV0FBVyxHQUFHLElBQUksQ0FBQTtTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLHNCQUFhLENBQUMsUUFBUSxFQUFFO1lBQy9DLFdBQVcsR0FBRyxJQUFJLENBQUE7U0FDbkI7UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsV0FBVztZQUN4QixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVztRQUNULHlCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQUs7UUFDZixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNsQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtB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QUUsV0FBVztTQUN6QixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUNELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdCQUFnQjtTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsaUJBQWlCLEVBQUU7UUFDakIsT0FBTztZQUNMLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixRQUFRLEVBQUUseUVBQXlFO1NBQ3BGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFBhcmFtcywgTW9kZSwgUHJvbnVuY2lhdGlvbiB9IGZyb20gJy4uLy4uL2JlYW5zL1BhcmFtcydcclxuaW1wb3J0IHsgU3RvcmFnZVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9TdG9yYWdlVXRpbCdcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHBhcmFtczogbmV3IFBhcmFtcygpLFxyXG4gICAgbW9kZUNoZWNrZWQ6ZmFsc2UsXHJcbiAgICBwcm9uQ2hlY2tlZDpmYWxzZVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgbGV0IHBhcmFtczogUGFyYW1zID0gU3RvcmFnZVV0aWwuZ2V0UGFyYW1zKClcclxuICAgIGxldCBtb2RlQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBsZXQgcHJvbkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgaWYgKHBhcmFtcy5nZXRNb2RlKCkgPT09IE1vZGUuUkFORE9NKSB7XHJcbiAgICAgIG1vZGVDaGVja2VkID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5nZXRQcm9uKCkgPT09IFByb251bmNpYXRpb24uQU1FUklDQU4pIHtcclxuICAgICAgcHJvbkNoZWNrZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgIG1vZGVDaGVja2VkOiBtb2RlQ2hlY2tlZCxcclxuICAgICAgcHJvbkNoZWNrZWQ6IHByb25DaGVja2VkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZmx1c2hQYXJhbXMoKXtcclxuICAgIFN0b3JhZ2VVdGlsLnNldFBhcmFtcyh0aGlzLmRhdGEucGFyYW1zKVxyXG4gIH0sXHJcbiAgc3BlZWRDaGFuZ2UoZTphbnkpe1xyXG4gICAgbGV0IHNwZWVkOiBudW1iZXIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgbGV0IHBhcmFtczogUGFyYW1zID0gdGhpcy5kYXRhLnBhcmFtc1xyXG4gICAgcGFyYW1zLnNldFNwZWVkKHNwZWVkKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczpwYXJhbXNcclxuICAgIH0pXHJcbiAgICB0aGlzLmZsdXNoUGFyYW1zKClcclxuICB9LFxyXG4gIHJlcGVhdENoYW5nZShlOiBhbnkpe1xyXG4gICAgbGV0IHJlcGVhdDogbnVtYmVyID0gZS5kZXRhaWwudmFsdWVcclxuICAgIGxldCBwYXJhbXM6IFBhcmFtcyA9IHRoaXMuZGF0YS5wYXJhbXNcclxuICAgIHBhcmFtcy5zZXRSZXBlYXQocmVwZWF0KVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mbHVzaFBhcmFtcygpXHJcbiAgfSxcclxuICBpbnRlcnZhbENoYW5nZShlOiBhbnkpe1xyXG4gICAgbGV0IGludGVydmFsOiBudW1iZXIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgbGV0IHBhcmFtczogUGFyYW1zID0gdGhpcy5kYXRhLnBhcmFtc1xyXG4gICAgcGFyYW1zLnNldEludGVydmFsKGludGVydmFsKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mbHVzaFBhcmFtcygpXHJcbiAgfSxcclxuICBwYXVzZUNoYW5nZShlOiBhbnkpe1xyXG4gICAgbGV0IHBhdXNlOiBudW1iZXIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgbGV0IHBhcmFtczogUGFyYW1zID0gdGhpcy5kYXRhLnBhcmFtc1xyXG4gICAgcGFyYW1zLnNldFBhdXNlKHBhdXNlKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mbHVzaFBhcmFtcygpXHJcbiAgfSxcclxuICBtb2RlQ2hhbmdlKCkge1xyXG4gICAgbGV0IHBhcmFtczogUGFyYW1zID0gdGhpcy5kYXRhLnBhcmFtc1xyXG4gICAgbGV0IG1vZGVDaGVja2VkOmJvb2xlYW4gPSAhdGhpcy5kYXRhLm1vZGVDaGVja2VkXHJcbiAgICBpZiAocGFyYW1zLmdldE1vZGUoKSA9PT0gTW9kZS5SQU5ET00pIHtcclxuICAgICAgcGFyYW1zLnNldE1vZGUoTW9kZS5PUkRFUilcclxuICAgIH1lbHNlIGlmIChwYXJhbXMuZ2V0TW9kZSgpID09PSBNb2RlLk9SREVSKSB7XHJcbiAgICAgIHBhcmFtcy5zZXRNb2RlKE1vZGUuUkFORE9NKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczpwYXJhbXMsXHJcbiAgICAgIG1vZGVDaGVja2VkOm1vZGVDaGVja2VkXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mbHVzaFBhcmFtcygpXHJcbiAgfSxcclxuICBwcm9uQ2hhbmdlKCl7XHJcbiAgICBsZXQgcGFyYW1zOiBQYXJhbXMgPSB0aGlzLmRhdGEucGFyYW1zXHJcbiAgICBsZXQgcHJvbkNoZWNrZWQ6IGJvb2xlYW4gPSAhdGhpcy5kYXRhLnByb25DaGVja2VkXHJcbiAgICBpZiAocGFyYW1zLmdldFByb24oKSA9PT0gUHJvbnVuY2lhdGlvbi5BTUVSSUNBTikge1xyXG4gICAgICBwYXJhbXMuc2V0UHJvbihQcm9udW5jaWF0aW9uLkJSSVRJU0gpXHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5nZXRQcm9uKCkgPT09IFByb251bmNpYXRpb24uQlJJVElTSCkge1xyXG4gICAgICBwYXJhbXMuc2V0UHJvbihQcm9udW5jaWF0aW9uLkFNRVJJQ0FOKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICBwcm9uQ2hlY2tlZDogcHJvbkNoZWNrZWRcclxuICAgIH0pXHJcbiAgICB0aGlzLmZsdXNoUGFyYW1zKClcclxuICB9LFxyXG4gIHF1ZXN0aW9uXzEoKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9mb3VuZC9mb3VuZCcsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcXVlc3Rpb25fMigpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi90ZXN0L3Rlc3QnLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHF1ZXN0aW9uXzMoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vd2Fybi93YXJuJyxcclxuICAgIH0pXHJcbiAgfSxcclxuICBxdWVzdGlvbl80KCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL29wZW4vb3BlbicsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn5pu+57uP5Lmf6K6o5Y6M6L+H6Iux6K+t6K++5LiK5ZCs5YaZ5Y2V6K+NJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9zZXR0aW5nL3NldHRpbmcnLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwOi8vaW1nMS5waC4xMjYubmV0L2d0aWdXRVZsQTZYYlhFOWFGckIwZXc9PS8yMDk4MTE0NDc2NTAxOTIzMDExLmpwZ1wiXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==