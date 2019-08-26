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
    constructor() {
        this.paths = [];
        this.cur = 1;
        this.paused = true;
        this.proccess = function () { };
        this.error = function () { };
        this.end = function () { };
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
            for (let i = 0; i < this.paths.length; i++) {
                this.proccess(this.cur++);
                for (let j = 0; j < 3; j++) {
                    if (!(yield this.playSync(this.paths[i]))) {
                        innerAudioContext.destroy();
                        innerAudioContext = wx.createInnerAudioContext();
                        this.error();
                        return;
                    }
                    if (j < 3 - 1) {
                        yield this.delay(2000);
                    }
                }
                if (i < this.paths.length - 1) {
                    yield this.delay(3000);
                }
            }
            this.end();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRXBELE1BQWEsU0FBUztJQXFCcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBVyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUtNLFFBQVEsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFDTSxXQUFXLENBQUMsUUFBaUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDMUIsQ0FBQztJQUNNLFFBQVEsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFDTSxNQUFNLENBQUMsR0FBWTtRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNoQixDQUFDO0lBT00sS0FBSztRQUNWLENBQUMsR0FBUyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLElBQUcsQ0FBQyxDQUFBLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQzt3QkFDckMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUE7d0JBQzNCLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO3dCQUNoRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ1osT0FBTTtxQkFDUDtvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDdkI7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ3ZCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDWixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUE7SUFDTixDQUFDO0lBT00sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUNwQjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDbkI7SUFDSCxDQUFDO0lBUU8sUUFBUSxDQUFDLElBQVc7UUFDMUIsSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtZQUM1QixpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1lBQ2pDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUE7WUFHNUIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7WUFHeEIsaUJBQWlCLENBQUMsU0FBUyxDQUFDO2dCQUMxQixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ2IsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRSxFQUFFO2dCQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZixDQUFDLENBQUMsQ0FBQTtZQUNGLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFFLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQVNPLEtBQUssQ0FBQyxJQUFXO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtZQUM1QixVQUFVLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBcElELDhCQW9JQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpn7PpopHmkq3mlL7nsbtcclxuICogXHJcbiAqIOacrOexu+aYr+WNleivjeWQrOWGmeeahOS4gOWkp+aguOW/g1xyXG4gKiDlkKzlhpnnmoTln7rnoYDmmK/og73lpJ/nqLPlrprmkq3mlL7pn7PpopFcclxuICovXHJcblxyXG5sZXQgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9VdGlse1xyXG5cclxuICAvKipcclxuICAgKiDlo7DmmI7lh6DkuKrlv4XopoHnmoTlsZ7mgKdcclxuICAgKi9cclxuICBwcml2YXRlIHBhdGhzOnN0cmluZ1tdLy/mkq3mlL7nmoTpn7PpopHmlofku7bot6/lvoRcclxuICBwcml2YXRlIGN1cjpudW1iZXIvL+W3sue7j+aSreaUvueahOWNleivjeaVsFxyXG4gIHByaXZhdGUgcGF1c2VkOmJvb2xlYW4vL+aSreaUvuaYr+WQpuaaguWBnFxyXG4gIC8v5b2T5YmN5Y2V6K+N5pKt5pS+5a6M5oiQ55qE5Zue6LCD5Ye95pWwXHJcbiAgLy/pgJrluLjnlKjmnaXmmL7npLrmkq3mlL7ov5vluqZcclxuICAvL+aJgOS7peS8muS8oOWFpeS4gOS4quWPguaVsGN1clxyXG4gIC8v6KGo56S65b2T5YmN5q2j5Zyo5pKt5pS+55qE5Y2V6K+N5piv56ys5Yeg5LiqXHJcbiAgcHJpdmF0ZSBwcm9jY2VzczpGdW5jdGlvblxyXG4gIC8v5Ye66ZSZ55qE5Zue6LCD77yM5rKh5Y+C5pWwXHJcbiAgcHJpdmF0ZSBlcnJvcjpGdW5jdGlvblxyXG4gIC8v5pKt5pS+5a6M5oiQ55qE5Zue6LCDXHJcbiAgcHJpdmF0ZSBlbmQ6RnVuY3Rpb25cclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5aeL5YyW5ZCE5Liq5bGe5oCnXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnBhdGhzID0gW11cclxuICAgIHRoaXMuY3VyID0gMVxyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICB0aGlzLnByb2NjZXNzID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLmVycm9yID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKCl7fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCE5Liq5bGe5oCn55qEZ2V05ZKMc2V05pa55rOVXHJcbiAgICovXHJcbiAgcHVibGljIHNldFBhdGhzKHBhdGhzOnN0cmluZ1tdKTp2b2lke1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRQcm9jY2Vzcyhwcm9jY2VzczpGdW5jdGlvbik6dm9pZHtcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBwcm9jY2Vzc1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RXJyb3IoZXJyb3I6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVycm9yID0gZXJyb3JcclxuICB9XHJcbiAgcHVibGljIHNldEVuZChlbmQ6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVuZCA9IGVuZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YeG5aSH5byA5aeL5pKt5pS+XHJcbiAgICog5YeG5aSH5aW956ys5LiA5Liq5Y2V6K+N5bm26Zi75aGeXHJcbiAgICog54K55pKt5pS+5bCx6IO95byA5aeL5pKt5pS+5LqGXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWR5KCk6dm9pZHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VyID0gMVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnByb2NjZXNzKHRoaXMuY3VyKyspXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgIGlmKCFhd2FpdCB0aGlzLnBsYXlTeW5jKHRoaXMucGF0aHNbaV0pKXtcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaiA8IDMgLSAxKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMjAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLnBhdGhzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMzAwMClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbmQoKVxyXG4gICAgfSkoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+54q25oCB5YiH5o2i5pa55rOVXHJcbiAgICog5b2T5YmN5Zyo5pKt5pS+5bCx5pqC5YGcXHJcbiAgICog5b2T5YmN5piv5pqC5YGc5bCx5pKt5pS+XHJcbiAgICovXHJcbiAgcHVibGljIHBsYXlPclBhdXNlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKVxyXG4gICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpXHJcbiAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+5pa55rOVXHJcbiAgICogXHJcbiAgICog6L+Z5Liq5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZeWunuS+i1xyXG4gICAqIOaWueS+v2FzeW5j5pa55rOV6LCD55SoYXdhaXRcclxuICAgKi9cclxuICBwcml2YXRlIHBsYXlTeW5jKHBhdGg6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHRoYXQ6QXVkaW9VdGlsID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWVcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gcGF0aFxyXG4gICAgICAvL+S4uuS7gOS5iOiuvuS6hmF1dG9wbGF55LqG6L+Y6KaB6LCD55SocGxheeaWueazle+8n++8n1xyXG4gICAgICAvL+S9oOmXruaIkeaIkemXruiwgeWOu++8jOWug+S4jeiHquWKqOaSreaUvuaIkeiDveWliOWug+S9lVxyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgLy/mnInkupvml7blgJnopoHkuIDlvIDlp4vmmoLlgZzmkq3mlL5cclxuICAgICAgLy/mr5TlpoJyZWFkeeaWueazleiwg+eUqOS6hu+8jHBsYXlPclBhdXNl5pa55rOV6L+Y5rKh6LCD55So55qE5pe25YCZXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhhdC5wYXVzZWQpey8v5aaC5p6c5piv5pqC5YGc54q25oCB77yM5bCx5pqC5YGc5Za9XHJcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZCgoKT0+e1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy/lu7bml7blh73mlbBcclxuICAvL+aEn+iwolByb21pc2VcclxuICAvL+aEn+iwomFzeW5j44CBYXdhaXRcclxuICAvL+iuqeaIkeS4jeimgeS4gOWxguWxguWll+Wbnuiwg+adpeWunueOsOW7tuaXtuS6hlxyXG4gIC8v6Jm954S25a6D5pyA57uI6L+Y5piv57+76K+R5oiQ5LqG5LiA5bGC5bGC5Zue6LCD5Y675omn6KGM55qEXHJcbiAgLy/kvYbmmK/ov5nmoLfpgLvovpHmuIXmmbDkuobvvIzku6PnoIHkuZ/muIXmmbDkuoZcclxuICAvL+WHj+WwkeS6huWQhOenjeWHuumUme+8jOaYr+S4quaMuui1nueahOaWsOaKgOacr++8iOaIkeaJjeWtpuS8mu+8iVxyXG4gIHByaXZhdGUgZGVsYXkodGltZTpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=