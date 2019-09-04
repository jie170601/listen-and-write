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
const Params_1 = require("../beans/Params");
const ttsApi = "https://dict.youdao.com/dictvoice?le=auto";
class Word2Mp3 {
    constructor(params) {
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
        let that = this;
        let promise = new Promise((resolve, reject) => {
            wx.downloadFile({
                url: ttsApi + "&audio=" + word + "&rate=" + that.rate + "&type=" + that.type,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZDJNcDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JkMk1wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU0EsNENBQW9EO0FBR3BELE1BQU0sTUFBTSxHQUFXLDJDQUEyQyxDQUFBO0FBR2xFLE1BQWEsUUFBUTtJQVFuQixZQUFZLE1BQWE7UUFOakIsVUFBSyxHQUFVLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVksRUFBRSxDQUFBO1FBTXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFHLHNCQUFhLENBQUMsUUFBUSxFQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7SUFDSCxDQUFDO0lBY1ksWUFBWSxDQUFDLEtBQWMsRUFBQyxlQUF3Qjs7WUFDL0QsS0FBSSxJQUFJLENBQUMsR0FBUSxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBRXBDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUUvQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO2lCQUNyRDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQWFPLGNBQWMsQ0FBQyxJQUFXLEVBQUMsZUFBd0I7UUFDekQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2IsSUFBSSxPQUFPLEdBQWdCLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFFO1lBQ3ZELEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDeEUsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQkFDakMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZCxDQUFDO2dCQUNELElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUE7SUFDbEIsQ0FBQztDQUNGO0FBdEVELDRCQXNFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiB3b3Jk5a2X56ym5Liy6L2s5Li6bXAz5paH5Lu26Lev5b6EXHJcbiAqIOS4i+i9vemfs+mikeaWh+S7tuWSjOi/lOWbnuS4i+i9vei/m+W6puWOn+acrOS4jemcgOimgeWQjOatpVxyXG4gKiDlnKjkuIvovb3lrozmiJDnmoTlm57osIPmlrnms5Xph4zlgZrlr7nlupTnmoTmk43kvZzljbPlj69cclxuICog5L2G5piv5LiN5ZCM5q2l5Lya6YCg5oiQ6LCD55So5q2k57G755qE5Luj56CB6ZyA6KaB5aSE55CG5ZCM5q2lXHJcbiAqIOWboOS4uuiCr+WumuimgeehruS/neS4i+i9veWujOaIkOWGjei/m+ihjOS4i+S4gOatpeaTjeS9nFxyXG4gKiDmiYDku6Xnm7TmjqXlnKjmraTnsbvkuK3lpITnkIbmiJDkuoblkIzmraXkuIvovb1cclxuICog6LCD55So55qE5Zyw5pa555u05o6l6LCD55So5bCx6IO95L+d6K+B6Z+z6aKR5paH5Lu25bey57uP5LiL6L295a6M5oiQXHJcbiAqL1xyXG5pbXBvcnQge1BhcmFtcyxQcm9udW5jaWF0aW9ufSBmcm9tICcuLi9iZWFucy9QYXJhbXMnXHJcblxyXG4vL1RUUyBBUEnnmoTor7fmsYLot6/lvoRcclxuY29uc3QgdHRzQXBpOiBzdHJpbmcgPSBcImh0dHBzOi8vZGljdC55b3VkYW8uY29tL2RpY3R2b2ljZT9sZT1hdXRvXCJcclxuXHJcbi8v5bCGV29yZDJNcDPnsbvmmrTpnLLlh7rmnaXvvIznu5nlhbblroPmqKHlnZfkvb/nlKhcclxuZXhwb3J0IGNsYXNzIFdvcmQyTXAze1xyXG5cclxuICBwcml2YXRlIGNvdW50Om51bWJlciA9IDAvL+eUqOadpeiuoeaVsO+8jOihqOekuuaIkOWKn+S4i+i9vemfs+mikeaWh+S7tueahOS4quaVsO+8jOWPr+S7peeUqOWcqOiuoeeul+i/m+W6puS4ilxyXG4gIHByaXZhdGUgcGF0aHM6c3RyaW5nW10gPSBbXS8v55So5p2l5L+d5a2Y6Z+z6aKR5paH5Lu255qE5Li05pe26Lev5b6EXHJcbiAgcHJpdmF0ZSByYXRlOm51bWJlclxyXG4gIHByaXZhdGUgdHlwZTpudW1iZXJcclxuXHJcbiAgLy/mnoTpgKDlh73mlbDvvIzku4XliJ3lp4vljJblkITlsZ7mgKdcclxuICBjb25zdHJ1Y3RvcihwYXJhbXM6UGFyYW1zKXtcclxuICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB0aGlzLnBhdGhzID0gW11cclxuICAgIHRoaXMucmF0ZSA9IHBhcmFtcy5nZXRTcGVlZCgpXHJcbiAgICB0aGlzLnR5cGUgPSAxXHJcbiAgICBpZihwYXJhbXMuZ2V0UHJvbigpPT09UHJvbnVuY2lhdGlvbi5BTUVSSUNBTil7XHJcbiAgICAgIHRoaXMudHlwZSA9IDJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/meaYr+S4quWQjOatpeaWueazlVxyXG4gICAqIOS4uuS6huS/neivgeS4i+i9veWujOaIkOWGjei/lOWbnuaJgOacieaWh+S7tui3r+W+hFxyXG4gICAqIOWPiuWHhuehrueahOiOt+WPluS4i+i9veeahOi/m+W6plxyXG4gICAqIOmcgOimgeS9v+eUqOWQjOatpVxyXG4gICAqIGF3YWl05Y+q6IO955So5ZyoYXN5bmPmlrnms5Xph4zpnaJcclxuICAgKiBcclxuICAgKiB3b3Jkc+WPguaVsOS4uuWNleivjeeahOWtl+espuS4suaVsOe7hFxyXG4gICAqIGRvd25sb2FkU3VjY2Vzc+aWueazleS4uuS4i+i9veaIkOWKn+S4gOS4quWNleivjeeahOWbnuiwg+WHveaVsFxyXG4gICAqIOWboOS4uuaYr2FzeW5j5pa55rOV77yM5omA5Lul5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqIOimgeWPlui/lOWbnueahOecn+WunuWAvO+8jOmcgOimgeS9v+eUqFByb21pc2XnmoR0aGVu6ZO+XHJcbiAgICovXHJcbiAgcHVibGljIGFzeW5jIGdldEZpbGVQYXRocyh3b3JkczpzdHJpbmdbXSxkb3dubG9hZFN1Y2Nlc3M6RnVuY3Rpb24pe1xyXG4gICAgZm9yKGxldCBpOm51bWJlcj0wO2k8d29yZHMubGVuZ3RoO2krKyl7XHJcbiAgICAgIC8v5a+55LqO56m655qE5a2X56ym5Liy77yM5LiN6L2s5o2i5oiQ6Z+z6aKRXHJcbiAgICAgIGlmICh3b3Jkc1tpXSAhPT0gbnVsbCAmJiB3b3Jkc1tpXS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgLy/ov5nph4zov5vooYzpmLvloZ7vvIzkv53or4HkuIvovb3nmoTlkIzmraVcclxuICAgICAgICBhd2FpdCB0aGlzLmdldE1wM0ZpbGVQYXRoKHdvcmRzW2ldLCBkb3dubG9hZFN1Y2Nlc3MpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBhdGhzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDov5nph4zmnoTpgKDkuobkuIDkuKpQcm9taXNl5Ye95pWwXHJcbiAgICog5omn6KGM6L+Z5Liq5pa55rOV5bCG6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqIGF3YWl05ZCO6Z2i55qE5pa55rOV5Li6UHJvbWlzZeaXtu+8jOS8mumYu+WhnuW5tuetieW+hVByb21pc2XnmoTnirbmgIHlj5jkuLpyZXNvbHZl5oiW6ICFcmVqZWN0XHJcbiAgICog6ICMYXdhaXTlkI7pnaLlh73mlbDlpoLmnpzmmK9Qcm9taXNl55qE6K+d77yM6L+U5Zue55qE57uT5p6c5Li6cmVzb2x2ZeaIluiAhXJlamVjdOWHveaVsOS8oOi/h+adpeeahOWPguaVsFxyXG4gICAqIOi/meS4quaWueazleS4jmdldEZpbGVQYXRoc+aWueazleS4gOi1t++8jOWunueOsOS6humfs+mikeaWh+S7tueahOWQjOatpeS4i+i9vVxyXG4gICAqIFxyXG4gICAqIHdvcmRz5Y+C5pWw5Li65Y2V6K+N55qE5a2X56ym5Liy5pWw57uEXHJcbiAgICogZG93bmxvYWRTdWNjZXNz5pa55rOV5Li65LiL6L295oiQ5Yqf5LiA5Liq5Y2V6K+N55qE5Zue6LCD5Ye95pWwXHJcbiAgICog5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0TXAzRmlsZVBhdGgod29yZDpzdHJpbmcsZG93bmxvYWRTdWNjZXNzOkZ1bmN0aW9uKXtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICBsZXQgcHJvbWlzZTpQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgd3guZG93bmxvYWRGaWxlKHtcclxuICAgICAgICAgIHVybDogdHRzQXBpICsgXCImYXVkaW89XCIgKyB3b3JkICsgXCImcmF0ZT1cIiArIHRoYXQucmF0ZStcIiZ0eXBlPVwiK3RoYXQudHlwZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGhzLnB1c2gocmVzLnRlbXBGaWxlUGF0aClcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrXHJcbiAgICAgICAgICAgIGRvd25sb2FkU3VjY2Vzcyh0aGlzLmNvdW50KVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gcHJvbWlzZVxyXG4gIH1cclxufSJdfQ==