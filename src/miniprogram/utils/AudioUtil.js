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
let innerAudioContext = wx.createInnerAudioContext();
class AudioUtil {
    constructor(params) {
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
    updateParams(params) {
        this.repeat = params.getRepeat();
        this.pause = params.getPause();
        this.interval = params.getInterval();
    }
    setPaths(paths) {
        this.paths = paths;
    }
    setProccess(proccess) {
        this.proccess = proccess;
    }
    setError(error) {
        this.error = error;
    }
    setEnd(end) {
        this.end = end;
    }
    ready() {
        (() => __awaiter(this, void 0, void 0, function* () {
            this.cur = 1;
            console.log(this.repeat);
            for (let i = 0; i < this.paths.length; i++) {
                this.proccess(this.cur++);
                for (let j = 0; j < this.repeat; j++) {
                    if (!(yield this.playSync(this.paths[i]))) {
                        innerAudioContext.destroy();
                        innerAudioContext = wx.createInnerAudioContext();
                        this.error();
                        return;
                    }
                    if (j < this.repeat - 1) {
                        yield this.delay(this.interval * 1000);
                    }
                }
                if (i < this.paths.length - 1) {
                    yield this.delay(this.pause * 1000);
                }
            }
            this.stop();
        }))();
    }
    playOrPause() {
        if (this.paused) {
            innerAudioContext.play();
            this.paused = false;
        }
        else {
            innerAudioContext.pause();
            this.paused = true;
        }
    }
    stop() {
        innerAudioContext.stop();
        this.paused = true;
        this.end();
    }
    playSync(path) {
        let that = this;
        return new Promise((resolve) => {
            innerAudioContext.autoplay = true;
            innerAudioContext.src = path;
            innerAudioContext.play();
            innerAudioContext.onCanplay(function () {
                if (that.paused) {
                    innerAudioContext.pause();
                }
            });
            innerAudioContext.onEnded(() => {
                resolve(true);
            });
            innerAudioContext.onError(() => {
                resolve(false);
            });
        });
    }
    delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }
}
exports.AudioUtil = AudioUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRXBELE1BQWEsU0FBUztJQXdCcEIsWUFBbUIsTUFBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFjO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ00sV0FBVyxDQUFDLFFBQWlCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFC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QyxPQUFPLENBQUMsR0FBRSxFQUFFO2dCQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFTTyxLQUFLLENBQUMsSUFBVztRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7WUFDNUIsVUFBVSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQXRKRCw4QkFzSkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Z+z6aKR5pKt5pS+57G7XHJcbiAqIFxyXG4gKiDmnKznsbvmmK/ljZXor43lkKzlhpnnmoTkuIDlpKfmoLjlv4NcclxuICog5ZCs5YaZ55qE5Z+656GA5piv6IO95aSf56iz5a6a5pKt5pS+6Z+z6aKRXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQYXJhbXN9IGZyb20gJy4uL2JlYW5zL1BhcmFtcydcclxuXHJcbmxldCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1V0aWx7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWjsOaYjuWHoOS4quW/heimgeeahOWxnuaAp1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcGF0aHM6c3RyaW5nW10vL+aSreaUvueahOmfs+mikeaWh+S7tui3r+W+hFxyXG4gIHByaXZhdGUgY3VyOm51bWJlci8v5bey57uP5pKt5pS+55qE5Y2V6K+N5pWwXHJcbiAgcHJpdmF0ZSBwYXVzZWQ6Ym9vbGVhbi8v5pKt5pS+5piv5ZCm5pqC5YGcXHJcbiAgLy/lvZPliY3ljZXor43mkq3mlL7lrozmiJDnmoTlm57osIPlh73mlbBcclxuICAvL+mAmuW4uOeUqOadpeaYvuekuuaSreaUvui/m+W6plxyXG4gIC8v5omA5Lul5Lya5Lyg5YWl5LiA5Liq5Y+C5pWwY3VyXHJcbiAgLy/ooajnpLrlvZPliY3mraPlnKjmkq3mlL7nmoTljZXor43mmK/nrKzlh6DkuKpcclxuICBwcml2YXRlIHByb2NjZXNzOkZ1bmN0aW9uXHJcbiAgLy/lh7rplJnnmoTlm57osIPvvIzmsqHlj4LmlbBcclxuICBwcml2YXRlIGVycm9yOkZ1bmN0aW9uXHJcbiAgLy/mkq3mlL7lrozmiJDnmoTlm57osINcclxuICBwcml2YXRlIGVuZDpGdW5jdGlvblxyXG4gIC8v5pKt5pS+5Y+C5pWwXHJcbiAgcHJpdmF0ZSByZXBlYXQ6bnVtYmVyXHJcbiAgcHJpdmF0ZSBwYXVzZTpudW1iZXJcclxuICBwcml2YXRlIGludGVydmFsOm51bWJlclxyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMluWQhOS4quWxnuaAp1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJhbXM6UGFyYW1zKXtcclxuICAgIHRoaXMucGF0aHMgPSBbXVxyXG4gICAgdGhpcy5jdXIgPSAxXHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWVcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBmdW5jdGlvbigpe31cclxuICAgIHRoaXMuZXJyb3IgPSBmdW5jdGlvbigpe31cclxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24gKCkgeyB9XHJcbiAgICB0aGlzLnJlcGVhdCA9IHBhcmFtcy5nZXRSZXBlYXQoKVxyXG4gICAgdGhpcy5wYXVzZSA9IHBhcmFtcy5nZXRQYXVzZSgpXHJcbiAgICB0aGlzLmludGVydmFsID0gcGFyYW1zLmdldEludGVydmFsKClcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQYXJhbXMocGFyYW1zOiBQYXJhbXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVwZWF0ID0gcGFyYW1zLmdldFJlcGVhdCgpXHJcbiAgICB0aGlzLnBhdXNlID0gcGFyYW1zLmdldFBhdXNlKClcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBwYXJhbXMuZ2V0SW50ZXJ2YWwoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCE5Liq5bGe5oCn55qEZ2V05ZKMc2V05pa55rOVXHJcbiAgICovXHJcbiAgcHVibGljIHNldFBhdGhzKHBhdGhzOnN0cmluZ1tdKTp2b2lke1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRQcm9jY2Vzcyhwcm9jY2VzczpGdW5jdGlvbik6dm9pZHtcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBwcm9jY2Vzc1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RXJyb3IoZXJyb3I6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVycm9yID0gZXJyb3JcclxuICB9XHJcbiAgcHVibGljIHNldEVuZChlbmQ6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVuZCA9IGVuZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YeG5aSH5byA5aeL5pKt5pS+XHJcbiAgICog5YeG5aSH5aW956ys5LiA5Liq5Y2V6K+N5bm26Zi75aGeXHJcbiAgICog54K55pKt5pS+5bCx6IO95byA5aeL5pKt5pS+5LqGXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWR5KCk6dm9pZHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VyID0gMVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlcGVhdClcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jY2Vzcyh0aGlzLmN1cisrKVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xyXG4gICAgICAgICAgaWYoIWF3YWl0IHRoaXMucGxheVN5bmModGhpcy5wYXRoc1tpXSkpe1xyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KClcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChqIDwgdGhpcy5yZXBlYXQgLSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkodGhpcy5pbnRlcnZhbCoxMDAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMucGF0aHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSh0aGlzLnBhdXNlKjEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICB9KSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmkq3mlL7nirbmgIHliIfmjaLmlrnms5VcclxuICAgKiDlvZPliY3lnKjmkq3mlL7lsLHmmoLlgZxcclxuICAgKiDlvZPliY3mmK/mmoLlgZzlsLHmkq3mlL5cclxuICAgKi9cclxuICBwdWJsaWMgcGxheU9yUGF1c2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpXHJcbiAgICAgIHRoaXMucGF1c2VkID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBhdXNlKClcclxuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOnZvaWR7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5zdG9wKClcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5lbmQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+5pa55rOVXHJcbiAgICogXHJcbiAgICog6L+Z5Liq5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZeWunuS+i1xyXG4gICAqIOaWueS+v2FzeW5j5pa55rOV6LCD55SoYXdhaXRcclxuICAgKi9cclxuICBwcml2YXRlIHBsYXlTeW5jKHBhdGg6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHRoYXQ6QXVkaW9VdGlsID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWVcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gcGF0aFxyXG4gICAgICAvL+S4uuS7gOS5iOiuvuS6hmF1dG9wbGF55LqG6L+Y6KaB6LCD55SocGxheeaWueazle+8n++8n1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgLy/mnInkupvml7blgJnopoHkuIDlvIDlp4vmmoLlgZzmkq3mlL5cclxuICAgICAgLy/mr5TlpoJyZWFkeeaWueazleiwg+eUqOS6hu+8jHBsYXlPclBhdXNl5pa55rOV6L+Y5rKh6LCD55So55qE5pe25YCZXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhhdC5wYXVzZWQpey8v5aaC5p6c5piv5pqC5YGc54q25oCB77yM5bCx5pqC5YGc5Za9XHJcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZCgoKT0+e1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy/lu7bml7blh73mlbBcclxuICAvL+aEn+iwolByb21pc2VcclxuICAvL+aEn+iwomFzeW5j44CBYXdhaXRcclxuICAvL+iuqeaIkeS4jeimgeS4gOWxguWxguWll+Wbnuiwg+adpeWunueOsOW7tuaXtuS6hlxyXG4gIC8v6Jm954S25a6D5pyA57uI6L+Y5piv57+76K+R5oiQ5LqG5LiA5bGC5bGC5Zue6LCD5Y675omn6KGM55qEXHJcbiAgLy/kvYbmmK/ov5nmoLfpgLvovpHmuIXmmbDkuobvvIzku6PnoIHkuZ/muIXmmbDkuoZcclxuICAvL+WHj+WwkeS6huWQhOenjeWHuumUme+8jOaYr+S4quaMuui1nueahOaWsOaKgOacr++8iOaIkeaJjeWtpuS8mu+8iVxyXG4gIHByaXZhdGUgZGVsYXkodGltZTpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=