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
        this.random = false;
        this.type = 1;
        if (params.getMode() === Params_1.Mode.RANDOM) {
            this.random = true;
        }
        if (params.getPron() === Params_1.Pronunciation.AMERICAN) {
            this.type = 2;
        }
    }
    getFilePaths(words, downloadSuccess) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.random) {
                words = this.shuffle(words);
            }
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
    shuffle(words) {
        let len = words.length;
        for (let i = 0; i < len; i++) {
            let end = len - 1;
            let index = (Math.random() * (end + 1)) >> 0;
            let t = words[end];
            words[end] = words[index];
            words[index] = t;
        }
        return words;
    }
}
exports.Word2Mp3 = Word2Mp3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZDJNcDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JkMk1wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU0EsNENBQXlEO0FBR3pELE1BQU0sTUFBTSxHQUFXLDJDQUEyQyxDQUFBO0FBR2xFLE1BQWEsUUFBUTtJQVNuQixZQUFZLE1BQWE7UUFQakIsVUFBSyxHQUFVLENBQUMsQ0FBQTtRQUNoQixVQUFLLEdBQVksRUFBRSxDQUFBO1FBT3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFHLGFBQUksQ0FBQyxNQUFNLEVBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDbkI7UUFDRCxJQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBRyxzQkFBYSxDQUFDLFFBQVEsRUFBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtTQUNkO0lBQ0gsQ0FBQztJQWNZLFlBQVksQ0FBQyxLQUFjLEVBQUMsZUFBd0I7O1lBQy9ELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUM1QjtZQUNELEtBQUksSUFBSSxDQUFDLEdBQVEsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUVwQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFFL0MsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtpQkFDckQ7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFhTyxjQUFjLENBQUMsSUFBVyxFQUFDLGVBQXdCO1FBQ3pELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNiLElBQUksT0FBTyxHQUFnQixJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsRUFBRTtZQUN2RCxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ3hFLE9BQU8sRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDWixlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNiLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFBO0lBQ2xCLENBQUM7SUFLTyxPQUFPLENBQUMsS0FBYztRQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBQ0Y7QUE3RkQsNEJBNkZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHdvcmTlrZfnrKbkuLLovazkuLptcDPmlofku7bot6/lvoRcclxuICog5LiL6L296Z+z6aKR5paH5Lu25ZKM6L+U5Zue5LiL6L296L+b5bqm5Y6f5pys5LiN6ZyA6KaB5ZCM5q2lXHJcbiAqIOWcqOS4i+i9veWujOaIkOeahOWbnuiwg+aWueazlemHjOWBmuWvueW6lOeahOaTjeS9nOWNs+WPr1xyXG4gKiDkvYbmmK/kuI3lkIzmraXkvJrpgKDmiJDosIPnlKjmraTnsbvnmoTku6PnoIHpnIDopoHlpITnkIblkIzmraVcclxuICog5Zug5Li66IKv5a6a6KaB56Gu5L+d5LiL6L295a6M5oiQ5YaN6L+b6KGM5LiL5LiA5q2l5pON5L2cXHJcbiAqIOaJgOS7peebtOaOpeWcqOatpOexu+S4reWkhOeQhuaIkOS6huWQjOatpeS4i+i9vVxyXG4gKiDosIPnlKjnmoTlnLDmlrnnm7TmjqXosIPnlKjlsLHog73kv53or4Hpn7PpopHmlofku7blt7Lnu4/kuIvovb3lrozmiJBcclxuICovXHJcbmltcG9ydCB7UGFyYW1zLE1vZGUsUHJvbnVuY2lhdGlvbn0gZnJvbSAnLi4vYmVhbnMvUGFyYW1zJ1xyXG5cclxuLy9UVFMgQVBJ55qE6K+35rGC6Lev5b6EXHJcbmNvbnN0IHR0c0FwaTogc3RyaW5nID0gXCJodHRwczovL2RpY3QueW91ZGFvLmNvbS9kaWN0dm9pY2U/bGU9YXV0b1wiXHJcblxyXG4vL+WwhldvcmQyTXAz57G75pq06Zyy5Ye65p2l77yM57uZ5YW25a6D5qih5Z2X5L2/55SoXHJcbmV4cG9ydCBjbGFzcyBXb3JkMk1wM3tcclxuXHJcbiAgcHJpdmF0ZSBjb3VudDpudW1iZXIgPSAwLy/nlKjmnaXorqHmlbDvvIzooajnpLrmiJDlip/kuIvovb3pn7PpopHmlofku7bnmoTkuKrmlbDvvIzlj6/ku6XnlKjlnKjorqHnrpfov5vluqbkuIpcclxuICBwcml2YXRlIHBhdGhzOnN0cmluZ1tdID0gW10vL+eUqOadpeS/neWtmOmfs+mikeaWh+S7tueahOS4tOaXtui3r+W+hFxyXG4gIHByaXZhdGUgcmF0ZTpudW1iZXJcclxuICBwcml2YXRlIHR5cGU6bnVtYmVyXHJcbiAgcHJpdmF0ZSByYW5kb206Ym9vbGVhblxyXG5cclxuICAvL+aehOmAoOWHveaVsO+8jOS7heWIneWni+WMluWQhOWxnuaAp1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtczpQYXJhbXMpe1xyXG4gICAgdGhpcy5jb3VudCA9IDBcclxuICAgIHRoaXMucGF0aHMgPSBbXVxyXG4gICAgdGhpcy5yYXRlID0gcGFyYW1zLmdldFNwZWVkKClcclxuICAgIHRoaXMucmFuZG9tID0gZmFsc2VcclxuICAgIHRoaXMudHlwZSA9IDFcclxuICAgIGlmKHBhcmFtcy5nZXRNb2RlKCk9PT1Nb2RlLlJBTkRPTSl7XHJcbiAgICAgIHRoaXMucmFuZG9tID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYocGFyYW1zLmdldFByb24oKT09PVByb251bmNpYXRpb24uQU1FUklDQU4pe1xyXG4gICAgICB0aGlzLnR5cGUgPSAyXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDov5nmmK/kuKrlkIzmraXmlrnms5VcclxuICAgKiDkuLrkuobkv53or4HkuIvovb3lrozmiJDlho3ov5Tlm57miYDmnInmlofku7bot6/lvoRcclxuICAgKiDlj4rlh4bnoa7nmoTojrflj5bkuIvovb3nmoTov5vluqZcclxuICAgKiDpnIDopoHkvb/nlKjlkIzmraVcclxuICAgKiBhd2FpdOWPquiDveeUqOWcqGFzeW5j5pa55rOV6YeM6Z2iXHJcbiAgICogXHJcbiAgICogd29yZHPlj4LmlbDkuLrljZXor43nmoTlrZfnrKbkuLLmlbDnu4RcclxuICAgKiBkb3dubG9hZFN1Y2Nlc3Pmlrnms5XkuLrkuIvovb3miJDlip/kuIDkuKrljZXor43nmoTlm57osIPlh73mlbBcclxuICAgKiDlm6DkuLrmmK9hc3luY+aWueazle+8jOaJgOS7peaWueazlei/lOWbnuS4gOS4qlByb21pc2VcclxuICAgKiDopoHlj5bov5Tlm57nmoTnnJ/lrp7lgLzvvIzpnIDopoHkvb/nlKhQcm9taXNl55qEdGhlbumTvlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBnZXRGaWxlUGF0aHMod29yZHM6c3RyaW5nW10sZG93bmxvYWRTdWNjZXNzOkZ1bmN0aW9uKXtcclxuICAgIGlmKHRoaXMucmFuZG9tKXtcclxuICAgICAgd29yZHMgPSB0aGlzLnNodWZmbGUod29yZHMpXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGk6bnVtYmVyPTA7aTx3b3Jkcy5sZW5ndGg7aSsrKXtcclxuICAgICAgLy/lr7nkuo7nqbrnmoTlrZfnrKbkuLLvvIzkuI3ovazmjaLmiJDpn7PpopFcclxuICAgICAgaWYgKHdvcmRzW2ldICE9PSBudWxsICYmIHdvcmRzW2ldLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAvL+i/memHjOi/m+ihjOmYu+Whnu+8jOS/neivgeS4i+i9veeahOWQjOatpVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TXAzRmlsZVBhdGgod29yZHNbaV0sIGRvd25sb2FkU3VjY2VzcylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucGF0aHNcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/memHjOaehOmAoOS6huS4gOS4qlByb21pc2Xlh73mlbBcclxuICAgKiDmiafooYzov5nkuKrmlrnms5XlsIbov5Tlm57kuIDkuKpQcm9taXNlXHJcbiAgICogYXdhaXTlkI7pnaLnmoTmlrnms5XkuLpQcm9taXNl5pe277yM5Lya6Zi75aGe5bm2562J5b6FUHJvbWlzZeeahOeKtuaAgeWPmOS4unJlc29sdmXmiJbogIVyZWplY3RcclxuICAgKiDogIxhd2FpdOWQjumdouWHveaVsOWmguaenOaYr1Byb21pc2XnmoTor53vvIzov5Tlm57nmoTnu5PmnpzkuLpyZXNvbHZl5oiW6ICFcmVqZWN05Ye95pWw5Lyg6L+H5p2l55qE5Y+C5pWwXHJcbiAgICog6L+Z5Liq5pa55rOV5LiOZ2V0RmlsZVBhdGhz5pa55rOV5LiA6LW377yM5a6e546w5LqG6Z+z6aKR5paH5Lu255qE5ZCM5q2l5LiL6L29XHJcbiAgICogXHJcbiAgICogd29yZHPlj4LmlbDkuLrljZXor43nmoTlrZfnrKbkuLLmlbDnu4RcclxuICAgKiBkb3dubG9hZFN1Y2Nlc3Pmlrnms5XkuLrkuIvovb3miJDlip/kuIDkuKrljZXor43nmoTlm57osIPlh73mlbBcclxuICAgKiDmlrnms5Xov5Tlm57kuIDkuKpQcm9taXNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRNcDNGaWxlUGF0aCh3b3JkOnN0cmluZyxkb3dubG9hZFN1Y2Nlc3M6RnVuY3Rpb24pe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIGxldCBwcm9taXNlOlByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICB3eC5kb3dubG9hZEZpbGUoe1xyXG4gICAgICAgICAgdXJsOiB0dHNBcGkgKyBcIiZhdWRpbz1cIiArIHdvcmQgKyBcIiZyYXRlPVwiICsgdGhhdC5yYXRlK1wiJnR5cGU9XCIrdGhhdC50eXBlLFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aHMucHVzaChyZXMudGVtcEZpbGVQYXRoKVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50KytcclxuICAgICAgICAgICAgZG93bmxvYWRTdWNjZXNzKHRoaXMuY291bnQpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpmo/mnLrmiZPkubHmlbDnu4RcclxuICAgKi9cclxuICBwcml2YXRlIHNodWZmbGUod29yZHM6c3RyaW5nW10pOnN0cmluZ1tde1xyXG4gICAgbGV0IGxlbiA9IHdvcmRzLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBsZXQgZW5kID0gbGVuIC0gMVxyXG4gICAgICBsZXQgaW5kZXggPSAoTWF0aC5yYW5kb20oKSAqIChlbmQgKyAxKSkgPj4gMFxyXG4gICAgICBsZXQgdCA9IHdvcmRzW2VuZF1cclxuICAgICAgd29yZHNbZW5kXSA9IHdvcmRzW2luZGV4XVxyXG4gICAgICB3b3Jkc1tpbmRleF0gPSB0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd29yZHNcclxuICB9XHJcbn0iXX0=