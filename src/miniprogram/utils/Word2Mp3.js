"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ttsApi = "https://dict.youdao.com/dictvoice";
class Word2Mp3 {
    constructor() {
        this.count = 0;
        this.paths = [];
        this.count = 0;
        this.paths = [];
    }
    getFilePaths(words, downloadSuccess) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < words.length; i++) {
                if (words[i] !== null && words[i].trim() !== '') {
                    yield this.getMp3FilePath(words[i], downloadSuccess);
                }
            }
            return this.paths;
        });
    }
    getMp3FilePath(word, downloadSuccess) {
        let promise = new Promise((resolve, reject) => {
            wx.downloadFile({
                url: ttsApi + "?audio=" + word,
                success: (res) => {
                    this.paths.push(res.tempFilePath);
                    this.count++;
                    downloadSuccess(this.count);
                    resolve(res);
                },
                fail: (res) => {
                    reject(res);
                }
            });
        });
        return promise;
    }
}
exports.Word2Mp3 = Word2Mp3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZDJNcDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JkMk1wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBV0EsTUFBTSxNQUFNLEdBQVcsbUNBQW1DLENBQUE7QUFHMUQsTUFBYSxRQUFRO0lBTW5CO1FBSlEsVUFBSyxHQUFVLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVksRUFBRSxDQUFBO1FBSXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQWNZLFlBQVksQ0FBQyxLQUFjLEVBQUMsZUFBd0I7O1lBQy9ELEtBQUksSUFBSSxDQUFDLEdBQVEsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUVwQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFFL0MsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtpQkFDckQ7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFhTyxjQUFjLENBQUMsSUFBVyxFQUFDLGVBQXdCO1FBQ3ZELElBQUksT0FBTyxHQUFnQixJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBRTtZQUN2RCxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUk7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDWixlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNiLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFBO0lBQ2xCLENBQUM7Q0FDRjtBQTlERCw0QkE4REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd29yZOWtl+espuS4sui9rOS4um1wM+aWh+S7tui3r+W+hFxyXG4gKiDkuIvovb3pn7PpopHmlofku7blkozov5Tlm57kuIvovb3ov5vluqbljp/mnKzkuI3pnIDopoHlkIzmraVcclxuICog5Zyo5LiL6L295a6M5oiQ55qE5Zue6LCD5pa55rOV6YeM5YGa5a+55bqU55qE5pON5L2c5Y2z5Y+vXHJcbiAqIOS9huaYr+S4jeWQjOatpeS8mumAoOaIkOiwg+eUqOatpOexu+eahOS7o+eggemcgOimgeWkhOeQhuWQjOatpVxyXG4gKiDlm6DkuLrogq/lrpropoHnoa7kv53kuIvovb3lrozmiJDlho3ov5vooYzkuIvkuIDmraXmk43kvZxcclxuICog5omA5Lul55u05o6l5Zyo5q2k57G75Lit5aSE55CG5oiQ5LqG5ZCM5q2l5LiL6L29XHJcbiAqIOiwg+eUqOeahOWcsOaWueebtOaOpeiwg+eUqOWwseiDveS/neivgemfs+mikeaWh+S7tuW3sue7j+S4i+i9veWujOaIkFxyXG4gKi9cclxuXHJcbi8vVFRTIEFQSeeahOivt+axgui3r+W+hFxyXG5jb25zdCB0dHNBcGk6IHN0cmluZyA9IFwiaHR0cHM6Ly9kaWN0LnlvdWRhby5jb20vZGljdHZvaWNlXCJcclxuXHJcbi8v5bCGV29yZDJNcDPnsbvmmrTpnLLlh7rmnaXvvIznu5nlhbblroPmqKHlnZfkvb/nlKhcclxuZXhwb3J0IGNsYXNzIFdvcmQyTXAze1xyXG5cclxuICBwcml2YXRlIGNvdW50Om51bWJlciA9IDAvL+eUqOadpeiuoeaVsO+8jOihqOekuuaIkOWKn+S4i+i9vemfs+mikeaWh+S7tueahOS4quaVsO+8jOWPr+S7peeUqOWcqOiuoeeul+i/m+W6puS4ilxyXG4gIHByaXZhdGUgcGF0aHM6c3RyaW5nW10gPSBbXS8v55So5p2l5L+d5a2Y6Z+z6aKR5paH5Lu255qE5Li05pe26Lev5b6EXHJcblxyXG4gIC8v5p6E6YCg5Ye95pWw77yM5LuF5Yid5aeL5YyW5ZCE5bGe5oCnXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB0aGlzLnBhdGhzID0gW11cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/meaYr+S4quWQjOatpeaWueazlVxyXG4gICAqIOS4uuS6huS/neivgeS4i+i9veWujOaIkOWGjei/lOWbnuaJgOacieaWh+S7tui3r+W+hFxyXG4gICAqIOWPiuWHhuehrueahOiOt+WPluS4i+i9veeahOi/m+W6plxyXG4gICAqIOmcgOimgeS9v+eUqOWQjOatpVxyXG4gICAqIGF3YWl05Y+q6IO955So5ZyoYXN5bmPmlrnms5Xph4zpnaJcclxuICAgKiBcclxuICAgKiB3b3Jkc+WPguaVsOS4uuWNleivjeeahOWtl+espuS4suaVsOe7hFxyXG4gICAqIGRvd25sb2FkU3VjY2Vzc+aWueazleS4uuS4i+i9veaIkOWKn+S4gOS4quWNleivjeeahOWbnuiwg+WHveaVsFxyXG4gICAqIOWboOS4uuaYr2FzeW5j5pa55rOV77yM5omA5Lul5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqIOimgeWPlui/lOWbnueahOecn+WunuWAvO+8jOmcgOimgeS9v+eUqFByb21pc2XnmoR0aGVu6ZO+XHJcbiAgICovXHJcbiAgcHVibGljIGFzeW5jIGdldEZpbGVQYXRocyh3b3JkczpzdHJpbmdbXSxkb3dubG9hZFN1Y2Nlc3M6RnVuY3Rpb24pe1xyXG4gICAgZm9yKGxldCBpOm51bWJlcj0wO2k8d29yZHMubGVuZ3RoO2krKyl7XHJcbiAgICAgIC8v5a+55LqO56m655qE5a2X56ym5Liy77yM5LiN6L2s5o2i5oiQ6Z+z6aKRXHJcbiAgICAgIGlmICh3b3Jkc1tpXSAhPT0gbnVsbCAmJiB3b3Jkc1tpXS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgLy/ov5nph4zov5vooYzpmLvloZ7vvIzkv53or4HkuIvovb3nmoTlkIzmraVcclxuICAgICAgICBhd2FpdCB0aGlzLmdldE1wM0ZpbGVQYXRoKHdvcmRzW2ldLCBkb3dubG9hZFN1Y2Nlc3MpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBhdGhzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDov5nph4zmnoTpgKDkuobkuIDkuKpQcm9taXNl5Ye95pWwXHJcbiAgICog5omn6KGM6L+Z5Liq5pa55rOV5bCG6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqIGF3YWl05ZCO6Z2i55qE5pa55rOV5Li6UHJvbWlzZeaXtu+8jOS8mumYu+WhnuW5tuetieW+hVByb21pc2XnmoTnirbmgIHlj5jkuLpyZXNvbHZl5oiW6ICFcmVqZWN0XHJcbiAgICog6ICMYXdhaXTlkI7pnaLlh73mlbDlpoLmnpzmmK9Qcm9taXNl55qE6K+d77yM6L+U5Zue55qE57uT5p6c5Li6cmVzb2x2ZeaIluiAhXJlamVjdOWHveaVsOS8oOi/h+adpeeahOWPguaVsFxyXG4gICAqIOi/meS4quaWueazleS4jmdldEZpbGVQYXRoc+aWueazleS4gOi1t++8jOWunueOsOS6humfs+mikeaWh+S7tueahOWQjOatpeS4i+i9vVxyXG4gICAqIFxyXG4gICAqIHdvcmRz5Y+C5pWw5Li65Y2V6K+N55qE5a2X56ym5Liy5pWw57uEXHJcbiAgICogZG93bmxvYWRTdWNjZXNz5pa55rOV5Li65LiL6L295oiQ5Yqf5LiA5Liq5Y2V6K+N55qE5Zue6LCD5Ye95pWwXHJcbiAgICog5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0TXAzRmlsZVBhdGgod29yZDpzdHJpbmcsZG93bmxvYWRTdWNjZXNzOkZ1bmN0aW9uKXtcclxuICAgICAgbGV0IHByb21pc2U6UHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgICB1cmw6IHR0c0FwaSArIFwiP2F1ZGlvPVwiICsgd29yZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGhzLnB1c2gocmVzLnRlbXBGaWxlUGF0aClcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrXHJcbiAgICAgICAgICAgIGRvd25sb2FkU3VjY2Vzcyh0aGlzLmNvdW50KVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gcHJvbWlzZVxyXG4gIH1cclxufSJdfQ==