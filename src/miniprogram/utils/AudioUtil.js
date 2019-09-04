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
            innerAudioContext.stop();
            this.paused = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRXBELE1BQWEsU0FBUztJQXdCcEIsWUFBbUIsTUFBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFjO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ00sV0FBVyxDQUFDLFFBQWlCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFC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QUFBO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBU08sS0FBSyxDQUFDLElBQVc7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFsSkQsOEJBa0pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmfs+mikeaSreaUvuexu1xyXG4gKiBcclxuICog5pys57G75piv5Y2V6K+N5ZCs5YaZ55qE5LiA5aSn5qC45b+DXHJcbiAqIOWQrOWGmeeahOWfuuehgOaYr+iDveWkn+eos+WumuaSreaUvumfs+mikVxyXG4gKi9cclxuXHJcbmltcG9ydCB7UGFyYW1zfSBmcm9tICcuLi9iZWFucy9QYXJhbXMnXHJcblxyXG5sZXQgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9VdGlse1xyXG5cclxuICAvKipcclxuICAgKiDlo7DmmI7lh6DkuKrlv4XopoHnmoTlsZ7mgKdcclxuICAgKi9cclxuICBwcml2YXRlIHBhdGhzOnN0cmluZ1tdLy/mkq3mlL7nmoTpn7PpopHmlofku7bot6/lvoRcclxuICBwcml2YXRlIGN1cjpudW1iZXIvL+W3sue7j+aSreaUvueahOWNleivjeaVsFxyXG4gIHByaXZhdGUgcGF1c2VkOmJvb2xlYW4vL+aSreaUvuaYr+WQpuaaguWBnFxyXG4gIC8v5b2T5YmN5Y2V6K+N5pKt5pS+5a6M5oiQ55qE5Zue6LCD5Ye95pWwXHJcbiAgLy/pgJrluLjnlKjmnaXmmL7npLrmkq3mlL7ov5vluqZcclxuICAvL+aJgOS7peS8muS8oOWFpeS4gOS4quWPguaVsGN1clxyXG4gIC8v6KGo56S65b2T5YmN5q2j5Zyo5pKt5pS+55qE5Y2V6K+N5piv56ys5Yeg5LiqXHJcbiAgcHJpdmF0ZSBwcm9jY2VzczpGdW5jdGlvblxyXG4gIC8v5Ye66ZSZ55qE5Zue6LCD77yM5rKh5Y+C5pWwXHJcbiAgcHJpdmF0ZSBlcnJvcjpGdW5jdGlvblxyXG4gIC8v5pKt5pS+5a6M5oiQ55qE5Zue6LCDXHJcbiAgcHJpdmF0ZSBlbmQ6RnVuY3Rpb25cclxuICAvL+aSreaUvuWPguaVsFxyXG4gIHByaXZhdGUgcmVwZWF0Om51bWJlclxyXG4gIHByaXZhdGUgcGF1c2U6bnVtYmVyXHJcbiAgcHJpdmF0ZSBpbnRlcnZhbDpudW1iZXJcclxuICAvKipcclxuICAgKiDliJ3lp4vljJblkITkuKrlsZ7mgKdcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1zOlBhcmFtcyl7XHJcbiAgICB0aGlzLnBhdGhzID0gW11cclxuICAgIHRoaXMuY3VyID0gMVxyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICB0aGlzLnByb2NjZXNzID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLmVycm9yID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgdGhpcy5yZXBlYXQgPSBwYXJhbXMuZ2V0UmVwZWF0KClcclxuICAgIHRoaXMucGF1c2UgPSBwYXJhbXMuZ2V0UGF1c2UoKVxyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHBhcmFtcy5nZXRJbnRlcnZhbCgpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUGFyYW1zKHBhcmFtczogUGFyYW1zKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlcGVhdCA9IHBhcmFtcy5nZXRSZXBlYXQoKVxyXG4gICAgdGhpcy5wYXVzZSA9IHBhcmFtcy5nZXRQYXVzZSgpXHJcbiAgICB0aGlzLmludGVydmFsID0gcGFyYW1zLmdldEludGVydmFsKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQhOS4quWxnuaAp+eahGdldOWSjHNldOaWueazlVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRQYXRocyhwYXRoczpzdHJpbmdbXSk6dm9pZHtcclxuICAgIHRoaXMucGF0aHMgPSBwYXRoc1xyXG4gIH1cclxuICBwdWJsaWMgc2V0UHJvY2Nlc3MocHJvY2Nlc3M6RnVuY3Rpb24pOnZvaWR7XHJcbiAgICB0aGlzLnByb2NjZXNzID0gcHJvY2Nlc3NcclxuICB9XHJcbiAgcHVibGljIHNldEVycm9yKGVycm9yOkZ1bmN0aW9uKTp2b2lke1xyXG4gICAgdGhpcy5lcnJvciA9IGVycm9yXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRFbmQoZW5kOkZ1bmN0aW9uKTp2b2lke1xyXG4gICAgdGhpcy5lbmQgPSBlbmRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWHhuWkh+W8gOWni+aSreaUvlxyXG4gICAqIOWHhuWkh+WlveesrOS4gOS4quWNleivjeW5tumYu+WhnlxyXG4gICAqIOeCueaSreaUvuWwseiDveW8gOWni+aSreaUvuS6hlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkeSgpOnZvaWR7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1ciA9IDFcclxuICAgICAgY29uc29sZS5sb2codGhpcy5yZXBlYXQpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucHJvY2Nlc3ModGhpcy5jdXIrKylcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcclxuICAgICAgICAgIGlmKCFhd2FpdCB0aGlzLnBsYXlTeW5jKHRoaXMucGF0aHNbaV0pKXtcclxuICAgICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaiA8IHRoaXMucmVwZWF0IC0gMSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGF5KHRoaXMuaW50ZXJ2YWwqMTAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLnBhdGhzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkodGhpcy5wYXVzZSoxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zdG9wKClcclxuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICAgIHRoaXMuZW5kKClcclxuICAgIH0pKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaSreaUvueKtuaAgeWIh+aNouaWueazlVxyXG4gICAqIOW9k+WJjeWcqOaSreaUvuWwseaaguWBnFxyXG4gICAqIOW9k+WJjeaYr+aaguWBnOWwseaSreaUvlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwbGF5T3JQYXVzZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhdXNlZCkge1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGF1c2UoKVxyXG4gICAgICB0aGlzLnBhdXNlZCA9IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaSreaUvuaWueazlVxyXG4gICAqIFxyXG4gICAqIOi/meS4quaWueazlei/lOWbnuS4gOS4qlByb21pc2Xlrp7kvotcclxuICAgKiDmlrnkvr9hc3luY+aWueazleiwg+eUqGF3YWl0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwbGF5U3luYyhwYXRoOnN0cmluZyk6UHJvbWlzZTxib29sZWFuPntcclxuICAgIGxldCB0aGF0OkF1ZGlvVXRpbCA9IHRoaXNcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHBhdGhcclxuICAgICAgLy/kuLrku4DkuYjorr7kuoZhdXRvcGxheeS6hui/mOimgeiwg+eUqHBsYXnmlrnms5XvvJ/vvJ9cclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpXHJcbiAgICAgIC8v5pyJ5Lqb5pe25YCZ6KaB5LiA5byA5aeL5pqC5YGc5pKt5pS+XHJcbiAgICAgIC8v5q+U5aaCcmVhZHnmlrnms5XosIPnlKjkuobvvIxwbGF5T3JQYXVzZeaWueazlei/mOayoeiwg+eUqOeahOaXtuWAmVxyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkNhbnBsYXkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKHRoYXQucGF1c2VkKXsvL+WmguaenOaYr+aaguWBnOeKtuaAge+8jOWwseaaguWBnOWWvVxyXG4gICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQoKCk9PntcclxuICAgICAgICByZXNvbHZlKHRydWUpXHJcbiAgICAgIH0pXHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IoKCk9PntcclxuICAgICAgICByZXNvbHZlKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8v5bu25pe25Ye95pWwXHJcbiAgLy/mhJ/osKJQcm9taXNlXHJcbiAgLy/mhJ/osKJhc3luY+OAgWF3YWl0XHJcbiAgLy/orqnmiJHkuI3opoHkuIDlsYLlsYLlpZflm57osIPmnaXlrp7njrDlu7bml7bkuoZcclxuICAvL+iZveeEtuWug+acgOe7iOi/mOaYr+e/u+ivkeaIkOS6huS4gOWxguWxguWbnuiwg+WOu+aJp+ihjOeahFxyXG4gIC8v5L2G5piv6L+Z5qC36YC76L6R5riF5pmw5LqG77yM5Luj56CB5Lmf5riF5pmw5LqGXHJcbiAgLy/lh4/lsJHkuoblkITnp43lh7rplJnvvIzmmK/kuKrmjLrotZ7nmoTmlrDmioDmnK/vvIjmiJHmiY3lrabkvJrvvIlcclxuICBwcml2YXRlIGRlbGF5KHRpbWU6bnVtYmVyKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsdGltZSlcclxuICAgIH0pXHJcbiAgfVxyXG59Il19