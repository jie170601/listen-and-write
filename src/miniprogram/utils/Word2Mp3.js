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
var Params_1 = require("../beans/Params");
var Promise_1 = require("./promise/lib/Promise");
var ttsApi = "https://dict.youdao.com/dictvoice?le=auto";
var Word2Mp3 = (function () {
    function Word2Mp3(params) {
        this.count = 0;
        this.paths = [];
        this.count = 0;
        this.paths = [];
        this.rate = params.getSpeed();
        this.type = 1;
        if (params.getPron() === Params_1.Pronunciation.AMERICAN) {
            this.type = 2;
        }
    }
    Word2Mp3.prototype.getFilePaths = function (words, downloadSuccess) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < words.length)) return [3, 4];
                        if (!(words[i] !== null && words[i].trim() !== '')) return [3, 3];
                        return [4, this.getMp3FilePath(words[i], downloadSuccess)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, this.paths];
                }
            });
        });
    };
    Word2Mp3.prototype.getMp3FilePath = function (word, downloadSuccess) {
        var _this = this;
        var that = this;
        var promise = new Promise_1.Promise(function (resolve, reject) {
            wx.downloadFile({
                url: ttsApi + "&audio=" + word + "&rate=" + that.rate + "&type=" + that.type,
                success: function (res) {
                    _this.paths.push(res.tempFilePath);
                    _this.count++;
                    downloadSuccess(_this.count);
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
        return promise;
    };
    return Word2Mp3;
}());
exports.Word2Mp3 = Word2Mp3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZDJNcDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JkMk1wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsMENBQXVEO0FBQ3ZELGlEQUErQztBQUcvQyxJQUFNLE1BQU0sR0FBVywyQ0FBMkMsQ0FBQTtBQUdsRTtJQVFFLGtCQUFZLE1BQWE7UUFOakIsVUFBSyxHQUFVLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVksRUFBRSxDQUFBO1FBTXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFHLHNCQUFhLENBQUMsUUFBUSxFQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7SUFDSCxDQUFDO0lBY1ksK0JBQVksR0FBekIsVUFBMEIsS0FBYyxFQUFDLGVBQXdCOzs7Ozs7d0JBQ3ZELENBQUMsR0FBUSxDQUFDOzs7NkJBQUMsQ0FBQSxDQUFDLEdBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTs2QkFFM0IsQ0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUEsRUFBM0MsY0FBMkM7d0JBRTdDLFdBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLEVBQUE7O3dCQUFwRCxTQUFvRCxDQUFBOzs7d0JBSnRCLENBQUMsRUFBRSxDQUFBOzs0QkFPckMsV0FBTyxJQUFJLENBQUMsS0FBSyxFQUFBOzs7O0tBQ2xCO0lBYU8saUNBQWMsR0FBdEIsVUFBdUIsSUFBVyxFQUFDLGVBQXdCO1FBQTNELGlCQWlCQztRQWhCQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDYixJQUFJLE9BQU8sR0FBZ0IsSUFBSSxpQkFBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDcEQsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxHQUFHLEVBQUUsTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJO2dCQUN4RSxPQUFPLEVBQUUsVUFBQyxHQUFRO29CQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQ2pDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDWixlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFRO29CQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUF0RVksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd29yZOWtl+espuS4sui9rOS4um1wM+aWh+S7tui3r+W+hFxyXG4gKiDkuIvovb3pn7PpopHmlofku7blkozov5Tlm57kuIvovb3ov5vluqbljp/mnKzkuI3pnIDopoHlkIzmraVcclxuICog5Zyo5LiL6L295a6M5oiQ55qE5Zue6LCD5pa55rOV6YeM5YGa5a+55bqU55qE5pON5L2c5Y2z5Y+vXHJcbiAqIOS9huaYr+S4jeWQjOatpeS8mumAoOaIkOiwg+eUqOatpOexu+eahOS7o+eggemcgOimgeWkhOeQhuWQjOatpVxyXG4gKiDlm6DkuLrogq/lrpropoHnoa7kv53kuIvovb3lrozmiJDlho3ov5vooYzkuIvkuIDmraXmk43kvZxcclxuICog5omA5Lul55u05o6l5Zyo5q2k57G75Lit5aSE55CG5oiQ5LqG5ZCM5q2l5LiL6L29XHJcbiAqIOiwg+eUqOeahOWcsOaWueebtOaOpeiwg+eUqOWwseiDveS/neivgemfs+mikeaWh+S7tuW3sue7j+S4i+i9veWujOaIkFxyXG4gKi9cclxuaW1wb3J0IHsgUGFyYW1zLCBQcm9udW5jaWF0aW9uIH0gZnJvbSAnLi4vYmVhbnMvUGFyYW1zJ1xyXG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnLi9wcm9taXNlL2xpYi9Qcm9taXNlJ1xyXG5cclxuLy9UVFMgQVBJ55qE6K+35rGC6Lev5b6EXHJcbmNvbnN0IHR0c0FwaTogc3RyaW5nID0gXCJodHRwczovL2RpY3QueW91ZGFvLmNvbS9kaWN0dm9pY2U/bGU9YXV0b1wiXHJcblxyXG4vL+WwhldvcmQyTXAz57G75pq06Zyy5Ye65p2l77yM57uZ5YW25a6D5qih5Z2X5L2/55SoXHJcbmV4cG9ydCBjbGFzcyBXb3JkMk1wM3tcclxuXHJcbiAgcHJpdmF0ZSBjb3VudDpudW1iZXIgPSAwLy/nlKjmnaXorqHmlbDvvIzooajnpLrmiJDlip/kuIvovb3pn7PpopHmlofku7bnmoTkuKrmlbDvvIzlj6/ku6XnlKjlnKjorqHnrpfov5vluqbkuIpcclxuICBwcml2YXRlIHBhdGhzOnN0cmluZ1tdID0gW10vL+eUqOadpeS/neWtmOmfs+mikeaWh+S7tueahOS4tOaXtui3r+W+hFxyXG4gIHByaXZhdGUgcmF0ZTpudW1iZXJcclxuICBwcml2YXRlIHR5cGU6bnVtYmVyXHJcblxyXG4gIC8v5p6E6YCg5Ye95pWw77yM5LuF5Yid5aeL5YyW5ZCE5bGe5oCnXHJcbiAgY29uc3RydWN0b3IocGFyYW1zOlBhcmFtcyl7XHJcbiAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgdGhpcy5wYXRocyA9IFtdXHJcbiAgICB0aGlzLnJhdGUgPSBwYXJhbXMuZ2V0U3BlZWQoKVxyXG4gICAgdGhpcy50eXBlID0gMVxyXG4gICAgaWYocGFyYW1zLmdldFByb24oKT09PVByb251bmNpYXRpb24uQU1FUklDQU4pe1xyXG4gICAgICB0aGlzLnR5cGUgPSAyXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDov5nmmK/kuKrlkIzmraXmlrnms5VcclxuICAgKiDkuLrkuobkv53or4HkuIvovb3lrozmiJDlho3ov5Tlm57miYDmnInmlofku7bot6/lvoRcclxuICAgKiDlj4rlh4bnoa7nmoTojrflj5bkuIvovb3nmoTov5vluqZcclxuICAgKiDpnIDopoHkvb/nlKjlkIzmraVcclxuICAgKiBhd2FpdOWPquiDveeUqOWcqGFzeW5j5pa55rOV6YeM6Z2iXHJcbiAgICogXHJcbiAgICogd29yZHPlj4LmlbDkuLrljZXor43nmoTlrZfnrKbkuLLmlbDnu4RcclxuICAgKiBkb3dubG9hZFN1Y2Nlc3Pmlrnms5XkuLrkuIvovb3miJDlip/kuIDkuKrljZXor43nmoTlm57osIPlh73mlbBcclxuICAgKiDlm6DkuLrmmK9hc3luY+aWueazle+8jOaJgOS7peaWueazlei/lOWbnuS4gOS4qlByb21pc2VcclxuICAgKiDopoHlj5bov5Tlm57nmoTnnJ/lrp7lgLzvvIzpnIDopoHkvb/nlKhQcm9taXNl55qEdGhlbumTvlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBnZXRGaWxlUGF0aHMod29yZHM6c3RyaW5nW10sZG93bmxvYWRTdWNjZXNzOkZ1bmN0aW9uKXtcclxuICAgIGZvcihsZXQgaTpudW1iZXI9MDtpPHdvcmRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAvL+WvueS6juepuueahOWtl+espuS4su+8jOS4jei9rOaNouaIkOmfs+mikVxyXG4gICAgICBpZiAod29yZHNbaV0gIT09IG51bGwgJiYgd29yZHNbaV0udHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIC8v6L+Z6YeM6L+b6KGM6Zi75aGe77yM5L+d6K+B5LiL6L2955qE5ZCM5q2lXHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRNcDNGaWxlUGF0aCh3b3Jkc1tpXSwgZG93bmxvYWRTdWNjZXNzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5wYXRoc1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L+Z6YeM5p6E6YCg5LqG5LiA5LiqUHJvbWlzZeWHveaVsFxyXG4gICAqIOaJp+ihjOi/meS4quaWueazleWwhui/lOWbnuS4gOS4qlByb21pc2VcclxuICAgKiBhd2FpdOWQjumdoueahOaWueazleS4ulByb21pc2Xml7bvvIzkvJrpmLvloZ7lubbnrYnlvoVQcm9taXNl55qE54q25oCB5Y+Y5Li6cmVzb2x2ZeaIluiAhXJlamVjdFxyXG4gICAqIOiAjGF3YWl05ZCO6Z2i5Ye95pWw5aaC5p6c5pivUHJvbWlzZeeahOivne+8jOi/lOWbnueahOe7k+aenOS4unJlc29sdmXmiJbogIVyZWplY3Tlh73mlbDkvKDov4fmnaXnmoTlj4LmlbBcclxuICAgKiDov5nkuKrmlrnms5XkuI5nZXRGaWxlUGF0aHPmlrnms5XkuIDotbfvvIzlrp7njrDkuobpn7PpopHmlofku7bnmoTlkIzmraXkuIvovb1cclxuICAgKiBcclxuICAgKiB3b3Jkc+WPguaVsOS4uuWNleivjeeahOWtl+espuS4suaVsOe7hFxyXG4gICAqIGRvd25sb2FkU3VjY2Vzc+aWueazleS4uuS4i+i9veaIkOWKn+S4gOS4quWNleivjeeahOWbnuiwg+WHveaVsFxyXG4gICAqIOaWueazlei/lOWbnuS4gOS4qlByb21pc2VcclxuICAgKi9cclxuICBwcml2YXRlIGdldE1wM0ZpbGVQYXRoKHdvcmQ6c3RyaW5nLGRvd25sb2FkU3VjY2VzczpGdW5jdGlvbil7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgbGV0IHByb21pc2U6UHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgICB1cmw6IHR0c0FwaSArIFwiJmF1ZGlvPVwiICsgd29yZCArIFwiJnJhdGU9XCIgKyB0aGF0LnJhdGUrXCImdHlwZT1cIit0aGF0LnR5cGUsXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXRocy5wdXNoKHJlcy50ZW1wRmlsZVBhdGgpXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQrK1xyXG4gICAgICAgICAgICBkb3dubG9hZFN1Y2Nlc3ModGhpcy5jb3VudClcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHByb21pc2VcclxuICB9XHJcbn0iXX0=