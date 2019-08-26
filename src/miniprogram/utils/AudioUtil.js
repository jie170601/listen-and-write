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
    ready() {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("开始播放音频");
            for (let i = 0; i < this.paths.length; i++) {
                this.proccess(this.cur++);
                for (let j = 0; j < 3; j++) {
                    if (!(yield this.playSync(this.paths[i]))) {
                        innerAudioContext.destroy();
                        innerAudioContext = wx.createInnerAudioContext();
                        this.error();
                        break;
                    }
                    if (j < 3 - 1) {
                        yield this.delay(2000);
                    }
                }
                if (i < this.paths.length - 1) {
                    yield this.delay(3000);
                }
            }
            console.log("音频播放完成");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRXBELE1BQWEsU0FBUztJQW1CcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ00sV0FBVyxDQUFDLFFBQWlCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFDTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBT00sS0FBSztRQUNWLENBQUMsR0FBUyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLElBQUcsQ0FBQyxDQUFBLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQzt3QkFDckMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUE7d0JBQzNCLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO3dCQUNoRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ1osTUFBSztxQkFDTjtvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDdkI7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ3ZCO2FBQ0Y7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQTtJQUNOLENBQUM7SUFPTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3BCO2FBQU07WUFDTCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNuQjtJQUNILENBQUM7SUFRTyxRQUFRLENBQUMsSUFBVztRQUMxQixJQUFJLElBQUksR0FBYSxJQUFJLENBQUE7UUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUFFO1lBQzVCLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDakMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQTtZQUc1QixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUd4QixpQkFBaUIsQ0FBQyxTQUFTLENBQUM7Z0JBQzFCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztvQkFDYixpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUNGLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFFLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBU08sS0FBSyxDQUFDLElBQVc7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUE5SEQsOEJBOEhDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmfs+mikeaSreaUvuexu1xyXG4gKiBcclxuICog5pys57G75piv5Y2V6K+N5ZCs5YaZ55qE5LiA5aSn5qC45b+DXHJcbiAqIOWQrOWGmeeahOWfuuehgOaYr+iDveWkn+eos+WumuaSreaUvumfs+mikVxyXG4gKi9cclxuXHJcbmxldCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1V0aWx7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWjsOaYjuWHoOS4quW/heimgeeahOWxnuaAp1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcGF0aHM6c3RyaW5nW10vL+aSreaUvueahOmfs+mikeaWh+S7tui3r+W+hFxyXG4gIHByaXZhdGUgY3VyOm51bWJlci8v5bey57uP5pKt5pS+55qE5Y2V6K+N5pWwXHJcbiAgcHJpdmF0ZSBwYXVzZWQ6Ym9vbGVhbi8v5pKt5pS+5piv5ZCm5pqC5YGcXHJcbiAgLy/lvZPliY3ljZXor43mkq3mlL7lrozmiJDnmoTlm57osIPlh73mlbBcclxuICAvL+mAmuW4uOeUqOadpeaYvuekuuaSreaUvui/m+W6plxyXG4gIC8v5omA5Lul5Lya5Lyg5YWl5LiA5Liq5Y+C5pWwY3VyXHJcbiAgLy/ooajnpLrlvZPliY3mraPlnKjmkq3mlL7nmoTljZXor43mmK/nrKzlh6DkuKpcclxuICBwcml2YXRlIHByb2NjZXNzOkZ1bmN0aW9uXHJcbiAgLy/lh7rplJnnmoTlm57osIPvvIzmsqHlj4LmlbBcclxuICBwcml2YXRlIGVycm9yOkZ1bmN0aW9uXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMluWQhOS4quWxnuaAp1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5wYXRocyA9IFtdXHJcbiAgICB0aGlzLmN1ciA9IDFcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5wcm9jY2VzcyA9IGZ1bmN0aW9uKCl7fVxyXG4gICAgdGhpcy5lcnJvciA9IGZ1bmN0aW9uKCl7fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCE5Liq5bGe5oCn55qEZ2V05ZKMc2V05pa55rOVXHJcbiAgICovXHJcbiAgcHVibGljIHNldFBhdGhzKHBhdGhzOnN0cmluZ1tdKTp2b2lke1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRQcm9jY2Vzcyhwcm9jY2VzczpGdW5jdGlvbik6dm9pZHtcclxuICAgIHRoaXMucHJvY2Nlc3MgPSBwcm9jY2Vzc1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RXJyb3IoZXJyb3I6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLmVycm9yID0gZXJyb3JcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWHhuWkh+W8gOWni+aSreaUvlxyXG4gICAqIOWHhuWkh+WlveesrOS4gOS4quWNleivjeW5tumYu+WhnlxyXG4gICAqIOeCueaSreaUvuWwseiDveW8gOWni+aSreaUvuS6hlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkeSgpOnZvaWR7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+aSreaUvumfs+mikVwiKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnByb2NjZXNzKHRoaXMuY3VyKyspXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgIGlmKCFhd2FpdCB0aGlzLnBsYXlTeW5jKHRoaXMucGF0aHNbaV0pKXtcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChqIDwgMyAtIDEpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgyMDAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMucGF0aHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgzMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIumfs+mikeaSreaUvuWujOaIkFwiKVxyXG4gICAgfSkoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+54q25oCB5YiH5o2i5pa55rOVXHJcbiAgICog5b2T5YmN5Zyo5pKt5pS+5bCx5pqC5YGcXHJcbiAgICog5b2T5YmN5piv5pqC5YGc5bCx5pKt5pS+XHJcbiAgICovXHJcbiAgcHVibGljIHBsYXlPclBhdXNlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKVxyXG4gICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpXHJcbiAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+5pa55rOVXHJcbiAgICogXHJcbiAgICog6L+Z5Liq5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZeWunuS+i1xyXG4gICAqIOaWueS+v2FzeW5j5pa55rOV6LCD55SoYXdhaXRcclxuICAgKi9cclxuICBwcml2YXRlIHBsYXlTeW5jKHBhdGg6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHRoYXQ6QXVkaW9VdGlsID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWVcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gcGF0aFxyXG4gICAgICAvL+S4uuS7gOS5iOiuvuS6hmF1dG9wbGF55LqG6L+Y6KaB6LCD55SocGxheeaWueazle+8n++8n1xyXG4gICAgICAvL+S9oOmXruaIkeaIkemXruiwgeWOu++8jOWug+S4jeiHquWKqOaSreaUvuaIkeiDveWliOWug+S9lVxyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgLy/mnInkupvml7blgJnopoHkuIDlvIDlp4vmmoLlgZzmkq3mlL5cclxuICAgICAgLy/mr5TlpoJyZWFkeeaWueazleiwg+eUqOS6hu+8jHBsYXlPclBhdXNl5pa55rOV6L+Y5rKh6LCD55So55qE5pe25YCZXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhhdC5wYXVzZWQpey8v5aaC5p6c5piv5pqC5YGc54q25oCB77yM5bCx5pqC5YGc5Za9XHJcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZCgoKT0+e1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy/lu7bml7blh73mlbBcclxuICAvL+aEn+iwolByb21pc2VcclxuICAvL+aEn+iwomFzeW5j44CBYXdhaXRcclxuICAvL+iuqeaIkeS4jeimgeS4gOWxguWxguWll+Wbnuiwg+adpeWunueOsOW7tuaXtuS6hlxyXG4gIC8v6Jm954S25a6D5pyA57uI6L+Y5piv57+76K+R5oiQ5LqG5LiA5bGC5bGC5Zue6LCD5Y675omn6KGM55qEXHJcbiAgLy/kvYbmmK/ov5nmoLfpgLvovpHmuIXmmbDkuobvvIzku6PnoIHkuZ/muIXmmbDkuoZcclxuICAvL+WHj+WwkeS6huWQhOenjeWHuumUme+8jOaYr+S4quaMuui1nueahOaWsOaKgOacr++8iOaIkeaJjeWtpuS8mu+8iVxyXG4gIHByaXZhdGUgZGVsYXkodGltZTpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=