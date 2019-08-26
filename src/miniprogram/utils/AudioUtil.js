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
            this.cur = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRXBELE1BQWEsU0FBUztJQW1CcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ00sV0FBVyxDQUFDLFFBQWlCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFDTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBT00sS0FBSztRQUNWLENBQUMsR0FBUyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtnQkFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUIsSUFBRyxDQUFDLENBQUEsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxFQUFDO3dCQUNyQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTt3QkFDM0IsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUE7d0JBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTt3QkFDWixNQUFLO3FCQUNOO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2IsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUN2QjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDdkI7YUFDRjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFBO0lBQ04sQ0FBQztJQU9NLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDcEI7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ25CO0lBQ0gsQ0FBQztJQVFPLFFBQVEsQ0FBQyxJQUFXO1FBQzFCLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQTtRQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7WUFDNUIsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtZQUNqQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBRzVCLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1lBR3hCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztnQkFDMUIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNiLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMzQjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0YsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2YsQ0FBQyxDQUFDLENBQUE7WUFDRixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRSxFQUFFO2dCQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFTTyxLQUFLLENBQUMsSUFBVztRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7WUFDNUIsVUFBVSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQS9IRCw4QkErSEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Z+z6aKR5pKt5pS+57G7XHJcbiAqIFxyXG4gKiDmnKznsbvmmK/ljZXor43lkKzlhpnnmoTkuIDlpKfmoLjlv4NcclxuICog5ZCs5YaZ55qE5Z+656GA5piv6IO95aSf56iz5a6a5pKt5pS+6Z+z6aKRXHJcbiAqL1xyXG5cclxubGV0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvVXRpbHtcclxuXHJcbiAgLyoqXHJcbiAgICog5aOw5piO5Yeg5Liq5b+F6KaB55qE5bGe5oCnXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXRoczpzdHJpbmdbXS8v5pKt5pS+55qE6Z+z6aKR5paH5Lu26Lev5b6EXHJcbiAgcHJpdmF0ZSBjdXI6bnVtYmVyLy/lt7Lnu4/mkq3mlL7nmoTljZXor43mlbBcclxuICBwcml2YXRlIHBhdXNlZDpib29sZWFuLy/mkq3mlL7mmK/lkKbmmoLlgZxcclxuICAvL+W9k+WJjeWNleivjeaSreaUvuWujOaIkOeahOWbnuiwg+WHveaVsFxyXG4gIC8v6YCa5bi455So5p2l5pi+56S65pKt5pS+6L+b5bqmXHJcbiAgLy/miYDku6XkvJrkvKDlhaXkuIDkuKrlj4LmlbBjdXJcclxuICAvL+ihqOekuuW9k+WJjeato+WcqOaSreaUvueahOWNleivjeaYr+esrOWHoOS4qlxyXG4gIHByaXZhdGUgcHJvY2Nlc3M6RnVuY3Rpb25cclxuICAvL+WHuumUmeeahOWbnuiwg++8jOayoeWPguaVsFxyXG4gIHByaXZhdGUgZXJyb3I6RnVuY3Rpb25cclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5aeL5YyW5ZCE5Liq5bGe5oCnXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnBhdGhzID0gW11cclxuICAgIHRoaXMuY3VyID0gMVxyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICB0aGlzLnByb2NjZXNzID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLmVycm9yID0gZnVuY3Rpb24oKXt9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlkITkuKrlsZ7mgKfnmoRnZXTlkoxzZXTmlrnms5VcclxuICAgKi9cclxuICBwdWJsaWMgc2V0UGF0aHMocGF0aHM6c3RyaW5nW10pOnZvaWR7XHJcbiAgICB0aGlzLnBhdGhzID0gcGF0aHNcclxuICB9XHJcbiAgcHVibGljIHNldFByb2NjZXNzKHByb2NjZXNzOkZ1bmN0aW9uKTp2b2lke1xyXG4gICAgdGhpcy5wcm9jY2VzcyA9IHByb2NjZXNzXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRFcnJvcihlcnJvcjpGdW5jdGlvbik6dm9pZHtcclxuICAgIHRoaXMuZXJyb3IgPSBlcnJvclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YeG5aSH5byA5aeL5pKt5pS+XHJcbiAgICog5YeG5aSH5aW956ys5LiA5Liq5Y2V6K+N5bm26Zi75aGeXHJcbiAgICog54K55pKt5pS+5bCx6IO95byA5aeL5pKt5pS+5LqGXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWR5KCk6dm9pZHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5pKt5pS+6Z+z6aKRXCIpXHJcbiAgICAgIHRoaXMuY3VyID0gMFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnByb2NjZXNzKHRoaXMuY3VyKyspXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgIGlmKCFhd2FpdCB0aGlzLnBsYXlTeW5jKHRoaXMucGF0aHNbaV0pKXtcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChqIDwgMyAtIDEpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgyMDAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMucGF0aHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgzMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIumfs+mikeaSreaUvuWujOaIkFwiKVxyXG4gICAgfSkoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+54q25oCB5YiH5o2i5pa55rOVXHJcbiAgICog5b2T5YmN5Zyo5pKt5pS+5bCx5pqC5YGcXHJcbiAgICog5b2T5YmN5piv5pqC5YGc5bCx5pKt5pS+XHJcbiAgICovXHJcbiAgcHVibGljIHBsYXlPclBhdXNlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKVxyXG4gICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpXHJcbiAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pKt5pS+5pa55rOVXHJcbiAgICogXHJcbiAgICog6L+Z5Liq5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZeWunuS+i1xyXG4gICAqIOaWueS+v2FzeW5j5pa55rOV6LCD55SoYXdhaXRcclxuICAgKi9cclxuICBwcml2YXRlIHBsYXlTeW5jKHBhdGg6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgbGV0IHRoYXQ6QXVkaW9VdGlsID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWVcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gcGF0aFxyXG4gICAgICAvL+S4uuS7gOS5iOiuvuS6hmF1dG9wbGF55LqG6L+Y6KaB6LCD55SocGxheeaWueazle+8n++8n1xyXG4gICAgICAvL+S9oOmXruaIkeaIkemXruiwgeWOu++8jOWug+S4jeiHquWKqOaSreaUvuaIkeiDveWliOWug+S9lVxyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgLy/mnInkupvml7blgJnopoHkuIDlvIDlp4vmmoLlgZzmkq3mlL5cclxuICAgICAgLy/mr5TlpoJyZWFkeeaWueazleiwg+eUqOS6hu+8jHBsYXlPclBhdXNl5pa55rOV6L+Y5rKh6LCD55So55qE5pe25YCZXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYodGhhdC5wYXVzZWQpey8v5aaC5p6c5piv5pqC5YGc54q25oCB77yM5bCx5pqC5YGc5Za9XHJcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZCgoKT0+e1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgfSlcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy/lu7bml7blh73mlbBcclxuICAvL+aEn+iwolByb21pc2VcclxuICAvL+aEn+iwomFzeW5j44CBYXdhaXRcclxuICAvL+iuqeaIkeS4jeimgeS4gOWxguWxguWll+Wbnuiwg+adpeWunueOsOW7tuaXtuS6hlxyXG4gIC8v6Jm954S25a6D5pyA57uI6L+Y5piv57+76K+R5oiQ5LqG5LiA5bGC5bGC5Zue6LCD5Y675omn6KGM55qEXHJcbiAgLy/kvYbmmK/ov5nmoLfpgLvovpHmuIXmmbDkuobvvIzku6PnoIHkuZ/muIXmmbDkuoZcclxuICAvL+WHj+WwkeS6huWQhOenjeWHuumUme+8jOaYr+S4quaMuui1nueahOaWsOaKgOacr++8iOaIkeaJjeWtpuS8mu+8iVxyXG4gIHByaXZhdGUgZGVsYXkodGltZTpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=