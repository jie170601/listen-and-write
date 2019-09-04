"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = require("./promise/lib/Promise");
var innerAudioContext = wx.createInnerAudioContext();
var AudioUtil = (function () {
    function AudioUtil(params) {
        this.paths = [];
        this.cur = 1;
        this.paused = true;
        this.proccess = function () { };
        this.error = function () { };
        this.end = function () { };
        this.repeat = params.getRepeat();
        this.pause = params.getPause();
        this.interval = params.getInterval();
    }
    AudioUtil.prototype.updateParams = function (params) {
        this.repeat = params.getRepeat();
        this.pause = params.getPause();
        this.interval = params.getInterval();
    };
    AudioUtil.prototype.setPaths = function (paths) {
        this.paths = paths;
    };
    AudioUtil.prototype.setProccess = function (proccess) {
        this.proccess = proccess;
    };
    AudioUtil.prototype.setError = function (error) {
        this.error = error;
    };
    AudioUtil.prototype.setEnd = function (end) {
        this.end = end;
    };
    AudioUtil.prototype.ready = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var i, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cur = 1;
                        console.log(this.repeat);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.paths.length)) return [3, 9];
                        this.proccess(this.cur++);
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < this.repeat)) return [3, 6];
                        return [4, this.playSync(this.paths[i])];
                    case 3:
                        if (!(_a.sent())) {
                            innerAudioContext.destroy();
                            innerAudioContext = wx.createInnerAudioContext();
                            this.error();
                            return [2];
                        }
                        if (!(j < this.repeat - 1)) return [3, 5];
                        return [4, this.delay(this.interval * 1000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        j++;
                        return [3, 2];
                    case 6:
                        if (!(i < this.paths.length - 1)) return [3, 8];
                        return [4, this.delay(this.pause * 1000)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3, 1];
                    case 9:
                        this.stop();
                        return [2];
                }
            });
        }); })();
    };
    AudioUtil.prototype.playOrPause = function () {
        if (this.paused) {
            innerAudioContext.play();
            this.paused = false;
        }
        else {
            innerAudioContext.pause();
            this.paused = true;
        }
    };
    AudioUtil.prototype.stop = function () {
        innerAudioContext.stop();
        this.paused = true;
        this.end();
    };
    AudioUtil.prototype.playSync = function (path) {
        var that = this;
        return new Promise_1.Promise(function (resolve) {
            innerAudioContext.autoplay = true;
            innerAudioContext.src = path;
            innerAudioContext.play();
            innerAudioContext.onCanplay(function () {
                if (that.paused) {
                    innerAudioContext.pause();
                }
            });
            innerAudioContext.onEnded(function () {
                resolve(true);
            });
            innerAudioContext.onError(function () {
                resolve(false);
            });
        });
    };
    AudioUtil.prototype.delay = function (time) {
        return new Promise_1.Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    };
    return AudioUtil;
}());
exports.AudioUtil = AudioUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpREFBNkM7QUFFN0MsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQTtBQUVwRDtJQXdCRSxtQkFBbUIsTUFBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUtNLDRCQUFRLEdBQWYsVUFBZ0IsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ00sK0JBQVcsR0FBbEIs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Q2IsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixpQkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFTTyx5QkFBSyxHQUFiLFVBQWMsSUFBVztRQUN2QixPQUFPLElBQUksaUJBQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsVUFBVSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUF0SkQsSUFzSkM7QUF0SlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Z+z6aKR5pKt5pS+57G7XHJcbiAqIFxyXG4gKiDmnKznsbvmmK/ljZXor43lkKzlhpnnmoTkuIDlpKfmoLjlv4NcclxuICog5ZCs5YaZ55qE5Z+656GA5piv6IO95aSf56iz5a6a5pKt5pS+6Z+z6aKRXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSAnLi4vYmVhbnMvUGFyYW1zJ1xyXG5pbXBvcnQge1Byb21pc2V9IGZyb20gJy4vcHJvbWlzZS9saWIvUHJvbWlzZSdcclxuXHJcbmxldCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1V0aWx7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWjsOaYjuWHoOS4quW/heimgeeahOWxnuaAp1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcGF0aHM6c3RyaW5nW10vL+aSreaUvueahOmfs+mikeaWh+S7tui3r+W+hFxyXG4gIHByaXZhdGUgY3VyOm51bWJlci8v5bey57uP5pKt5pS+55qE5Y2V6K+N5pWwXHJcbiAgcHJpdmF0ZSBwYXVzZWQ6Ym9vbGVhbi8v5pKt5pS+5piv5ZCm5pqC5YGcXHJcbiAgLy/lvZPliY3ljZXor43mkq3mlL7lrozmiJDnmoTlm57osIPlh73mlbBcclxuICAvL+mAmuW4uOeUqOadpeaYvuekuuaSreaUvui/m+W6plxyXG4gIC8v5omA5Lul5Lya5Lyg5YWl5LiA5Liq5Y+C5pWwY3VyXHJcbiAgLy/ooajnpLrlvZPliY3mraPlnKjmkq3mlL7nmoTljZXor43mmK/nrKzlh6DkuKpcclxuICBwcml2YXRlIHByb2NjZXNzOkZ1bmN0aW9uXHJcbiAgLy/lh7rplJnnmoTlm57osIPvvIzmsqHlj4LmlbBcclxuICBwcml2YXRlIGVycm9yOkZ1bmN0aW9uXHJcbiAgLy/mkq3mlL7lrozmiJDnmoTlm57osINcclxuICBwcml2YXRlIGVuZDpGdW5jdGlvblxyXG4gIC8v5pKt5pS+5Y+C5pWwXHJcbiAgcHJpdmF0ZSByZXBlYXQ6bnVtYmVyXHJcbiAgcHJpdmF0ZSBwYXVzZTpudW1iZXJcclxuICBwcml2YXRlIGludGVydmFsOm51bWJlclxyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMluWQhOS4quWxnuaAp1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6UGFyYW1zKXtcclxuICAgIHRoaXMucGF0aHMgPSBbXVxyXG4gICAgdGhpcy5jdXIgPSAxXHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWVcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBmdW5jdGlvbigpe31cclxuICAgIHRoaXMuZXJyb3IgPSBmdW5jdGlvbigpe31cclxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24gKCkgeyB9XHJcbiAgICB0aGlzLnJlcGVhdCA9IHBhcmFtcy5nZXRSZXBlYXQoKVxyXG4gICAgdGhpcy5wYXVzZSA9IHBhcmFtcy5nZXRQYXVzZSgpXHJcbiAgICB0aGlzLmludGVydmFsID0gcGFyYW1zLmdldEludGVydmFsKClcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQYXJhbXMocGFyYW1zOiBQYXJhbXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVwZWF0ID0gcGFyYW1zLmdldFJlcGVhdCgpXHJcbiAgICB0aGlzLnBhdXNlID0gcGFyYW1zLmdldFBhdXNlKClcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBwYXJhbXMuZ2V0SW50ZXJ2YWwoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCE5Liq5bGe5oCn55qEZ2V05ZKMc2V05pa55rOVXHJcbiAgICovXHJcbiAgcHVibGljIHNldFBhdGhzKHBhdGhzOnN0cmluZ1tdKTp2b2lke1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRQcm9jY2Vzcyhwcm9jY2VzczpGdW5jdGlvbik6dm9pZHtcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBwcm9jY2Vzc1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RXJyb3IoZXJyb3I6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVycm9yID0gZXJyb3JcclxuICB9XHJcbiAgcHVibGljIHNldEVuZChlbmQ6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVuZCA9IGVuZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YeG5aSH5byA5aeL5pKt5pS+XHJcbiAgICog5YeG5aSH5aW956ys5LiA5Liq5Y2V6K+N5bm26Zi75aGeXHJcbiAgICog54K55pKt5pS+5bCx6IO95byA5aeL5pKt5pS+5LqGXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWR5KCk6dm9pZHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VyID0gMVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlcGVhdClcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jY2Vzcyh0aGlzLmN1cisrKVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xyXG4gICAgICAgICAgaWYoIWF3YWl0IHRoaXMucGxheVN5bmModGhpcy5wYXRoc1tpXSkpe1xyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KClcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChqIDwgdGhpcy5yZXBlYXQgLSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkodGhpcy5pbnRlcnZhbCoxMDAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMucGF0aHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSh0aGlzLnBhdXNlKjEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICB9KSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmkq3mlL7nirbmgIHliIfmjaLmlrnms5VcclxuICAgKiDlvZPliY3lnKjmkq3mlL7lsLHmmoLlgZxcclxuICAgKiDlvZPliY3mmK/mmoLlgZzlsLHmkq3mlL5cclxuICAgKi9cclxuICBwdWJsaWMgcGxheU9yUGF1c2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpXHJcbiAgICAgIHRoaXMucGF1c2VkID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBhdXNlKClcclxuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOnZvaWR7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5zdG9wKClcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5lbmQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+5pa55rOVXHJcbiAgICogXHJcbiAgICog6L+Z5Liq5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZeWunuS+i1xyXG4gICAqIOaWueS+v2FzeW5j5pa55rOV6LCD55SoYXdhaXRcclxuICAgKi9cclxuICBwcml2YXRlIHBsYXlTeW5jKHBhdGg6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHRoYXQ6QXVkaW9VdGlsID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWVcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gcGF0aFxyXG4gICAgICAvL+S4uuS7gOS5iOiuvuS6hmF1dG9wbGF55LqG6L+Y6KaB6LCD55SocGxheeaWueazle+8n++8n1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgLy/mnInkupvml7blgJnopoHkuIDlvIDlp4vmmoLlgZzmkq3mlL5cclxuICAgICAgLy/mr5TlpoJyZWFkeeaWueazleiwg+eUqOS6hu+8jHBsYXlPclBhdXNl5pa55rOV6L+Y5rKh6LCD55So55qE5pe25YCZXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhhdC5wYXVzZWQpey8v5aaC5p6c5piv5pqC5YGc54q25oCB77yM5bCx5pqC5YGc5Za9XHJcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZCgoKT0+e1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy/lu7bml7blh73mlbBcclxuICAvL+aEn+iwolByb21pc2VcclxuICAvL+aEn+iwomFzeW5j44CBYXdhaXRcclxuICAvL+iuqeaIkeS4jeimgeS4gOWxguWxguWll+Wbnuiwg+adpeWunueOsOW7tuaXtuS6hlxyXG4gIC8v6Jm954S25a6D5pyA57uI6L+Y5piv57+76K+R5oiQ5LqG5LiA5bGC5bGC5Zue6LCD5Y675omn6KGM55qEXHJcbiAgLy/kvYbmmK/ov5nmoLfpgLvovpHmuIXmmbDkuobvvIzku6PnoIHkuZ/muIXmmbDkuoZcclxuICAvL+WHj+WwkeS6huWQhOenjeWHuumUme+8jOaYr+S4quaMuui1nueahOaWsOaKgOacr++8iOaIkeaJjeWtpuS8mu+8iVxyXG4gIHByaXZhdGUgZGVsYXkodGltZTpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=