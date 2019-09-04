"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Params = (function () {
    function Params() {
        this.speed = 0;
        this.repeat = 3;
        this.interval = 3;
        this.pause = 5;
        this.mode = Mode.ORDER;
        this.pron = Pronunciation.BRITISH;
    }
    Params.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Params.prototype.setRepeat = function (repeat) {
        this.repeat = repeat;
    };
    Params.prototype.setInterval = function (interval) {
        this.interval = interval;
    };
    Params.prototype.setPause = function (pause) {
        this.pause = pause;
    };
    Params.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    Params.prototype.setPron = function (pron) {
        this.pron = pron;
    };
    Params.prototype.getSpeed = function () {
        return this.speed;
    };
    Params.prototype.getRepeat = function () {
        return this.repeat;
    };
    Params.prototype.getInterval = function () {
        return this.interval;
    };
    Params.prototype.getPause = function () {
        return this.pause;
    };
    Params.prototype.getMode = function () {
        return this.mode;
    };
    Params.prototype.getPron = function () {
        return this.pron;
    };
    return Params;
}());
exports.Params = Params;
var Mode;
(function (Mode) {
    Mode[Mode["RANDOM"] = 0] = "RANDOM";
    Mode[Mode["ORDER"] = 1] = "ORDER";
})(Mode = exports.Mode || (exports.Mode = {}));
var Pronunciation;
(function (Pronunciation) {
    Pronunciation[Pronunciation["BRITISH"] = 0] = "BRITISH";
    Pronunciation[Pronunciation["AMERICAN"] = 1] = "AMERICAN";
})(Pronunciation = exports.Pronunciation || (exports.Pronunciation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFnQkU7UUFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBRWYsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFFZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFBO0lBQ25DLENBQUM7SUFFTSx5QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNNLDBCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUNNLDRCQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFDTSx5QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNNLHdCQUFPLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFDTSx3QkFBTyxHQUFkLFVBQWUsSUFBa0I7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUNNLHlCQUFRLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUNNLDBCQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7SUFDTSw0QkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN0QixDQUFDO0lBQ00seUJBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBQ00sd0JBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQ00sd0JBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFuRVksd0JBQU07QUF3RW5CLElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUVkLG1DQUFNLENBQUE7SUFFTixpQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUxXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUtmO0FBS0QsSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBRXZCLHVEQUFPLENBQUE7SUFFUCx5REFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOezu+e7n+WPguaVsOexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhcmFtc3tcclxuICAvL+ivremAn1xyXG4gIHByaXZhdGUgc3BlZWQ6bnVtYmVyXHJcbiAgLy/mr4/kuKrljZXor43nmoTph43lpI3mrKHmlbBcclxuICBwcml2YXRlIHJlcGVhdDpudW1iZXJcclxuICAvL+avj+asoemHjeWkjeS5i+mXtOeahOaXtumXtOmXtOmalFxyXG4gIHByaXZhdGUgaW50ZXJ2YWw6bnVtYmVyXHJcbiAgLy/mr4/kuKTkuKrljZXor43kuYvpl7TnmoTlgZzpob/ml7bpl7RcclxuICBwcml2YXRlIHBhdXNlOm51bWJlclxyXG4gIC8v5Y2V6K+N5pKt5pS+55qE5qih5byP77ya6ZqP5py65pKt5pS+L+mhuuW6j+aSreaUvlxyXG4gIHByaXZhdGUgbW9kZTpNb2RlXHJcbiAgLy/ljZXor43nmoTlj5Hpn7PnsbvlnovvvJroi7HlvI8v576O5byPXHJcbiAgcHJpdmF0ZSBwcm9uOlByb251bmNpYXRpb25cclxuICAvKipcclxuICAgKiDmnoTpgKDmlrnms5XkuK3nu5nlkITlj4LmlbDotYvpu5jorqTlgLxcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgIC8v6buY6K6k6K+t6YCf5Li6MFxyXG4gICAgdGhpcy5zcGVlZCA9IDBcclxuICAgIC8v6buY6K6k5q+P5Liq5Y2V6K+N6YeN5aSNM+asoVxyXG4gICAgdGhpcy5yZXBlYXQgPSAzXHJcbiAgICAvL+m7mOiupOavj+asoemHjeWkjeS5i+mXtOmXtOmalDPnp5Lpkp9cclxuICAgIHRoaXMuaW50ZXJ2YWwgPSAzXHJcbiAgICAvL+m7mOiupOavj+S4quWNleivjeS5i+mXtOWBnOmhvzXnp5Lpkp9cclxuICAgIHRoaXMucGF1c2UgPSA1XHJcbiAgICAvL+m7mOiupOmhuuW6j+aSreaUvlxyXG4gICAgdGhpcy5tb2RlID0gTW9kZS5PUkRFUlxyXG4gICAgLy/pu5jorqTkuLroi7HlvI/lj5Hpn7NcclxuICAgIHRoaXMucHJvbiA9IFByb251bmNpYXRpb24uQlJJVElTSFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNwZWVkKHNwZWVkOm51bWJlcik6dm9pZHtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZFxyXG4gIH1cclxuICBwdWJsaWMgc2V0UmVwZWF0KHJlcGVhdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdFxyXG4gIH1cclxuICBwdWJsaWMgc2V0SW50ZXJ2YWwoaW50ZXJ2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRQYXVzZShwYXVzZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhdXNlID0gcGF1c2VcclxuICB9XHJcbiAgcHVibGljIHNldE1vZGUobW9kZTogTW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZVxyXG4gIH1cclxuICBwdWJsaWMgc2V0UHJvbihwcm9uOlByb251bmNpYXRpb24pOnZvaWR7XHJcbiAgICB0aGlzLnByb24gPSBwcm9uXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTcGVlZCgpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLnNwZWVkXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRSZXBlYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGVhdFxyXG4gIH1cclxuICBwdWJsaWMgZ2V0SW50ZXJ2YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRQYXVzZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGF1c2VcclxuICB9XHJcbiAgcHVibGljIGdldE1vZGUoKTogTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRQcm9uKCk6UHJvbnVuY2lhdGlvbntcclxuICAgIHJldHVybiB0aGlzLnByb25cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmkq3mlL7mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIE1vZGV7XHJcbiAgLy/pmo/mnLrmkq3mlL5cclxuICBSQU5ET00sXHJcbiAgLy/pobrluo/mkq3mlL5cclxuICBPUkRFUlxyXG59XHJcblxyXG4vKipcclxuICog5Y+R6Z+z57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBQcm9udW5jaWF0aW9ue1xyXG4gIC8v6Iux5byP5Y+R6Z+zXHJcbiAgQlJJVElTSCxcclxuICAvL+e+juW8j+WPkemfs1xyXG4gIEFNRVJJQ0FOXHJcbn0iXX0=