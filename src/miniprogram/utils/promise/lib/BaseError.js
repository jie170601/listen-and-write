"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(name, message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        var fixStack = false;
        if (_this.constructor !== _newTarget) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(_this, _newTarget.prototype);
            }
            fixStack = true;
        }
        if (!("stack" in _this)) {
            fixStack = true;
        }
        _this.name = name;
        if (fixStack) {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, _newTarget);
            }
            else {
                var error = new Error(message);
                error.name = name;
                try {
                    throw error;
                }
                catch (error) {
                    _this.stack = error.stack || String(error);
                }
            }
        }
        return _this;
    }
    return BaseError;
}(Error));
exports.default = BaseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzZUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0lBQXVDLDZCQUFLO0lBRzNDLG1CQUFZLElBQVksRUFBRSxPQUFlOztRQUF6QyxZQUVDLGtCQUFNLE9BQU8sQ0FBQyxTQXVDZDtRQXJDQSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFJckIsSUFBSSxLQUFJLENBQUMsV0FBVyxlQUFlLEVBQUU7WUFHcEMsSUFBVSxNQUFPLENBQUMsY0FBYyxFQUFFO2dCQUMzQixNQUFPLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxXQUFXLFNBQVMsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNoQjtRQUlELElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsRUFBRTtZQUN2QixRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBRUQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFHakIsSUFBSSxRQUFRLEVBQUU7WUFHYixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUksYUFBYSxDQUFDO2FBQzFDO2lCQUFNO2dCQUNOLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSTtvQkFDSCxNQUFNLEtBQUssQ0FBQztpQkFDWjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQzthQUNEO1NBQ0Q7O0lBQ0YsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUF1QyxLQUFLLEdBNkMzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY3VzdG9tIGVycm9ycy5cbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgTWFydGluIFBvZWxzdHJhXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGN1c3RvbSBlcnJvcnMsIHdoaWNoIHByZXNlcnZlcyBzdGFjayBhbmRcbiAqIGhhcyBjb3JyZWN0IHByb3RvdHlwZSBjaGFpbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwdWJsaWMgc3RhY2shOiBzdHJpbmc7IC8vIHByb3ZpZGVkIGJ5IFY4XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogaW50ZXJuYWwgVHlwZVNjcmlwdCBjb2RlICovXG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cblx0XHRsZXQgZml4U3RhY2sgPSBmYWxzZTtcblxuXHRcdC8vIFRoaXMgZml4ZXMgdGhlIHByb3RvdHlwZSBjaGFpbiBpZiBpdCdzIGJyb2tlbiAod2hlbiBlbWl0dGluZyBmb3IgRVMgNSBvciBsb3dlcilcblx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZTogb25seSBydW4gdGVzdHMgd2l0aCBFUzUgZW1pdCBmb3Igbm93ICovXG5cdFx0aWYgKHRoaXMuY29uc3RydWN0b3IgIT09IG5ldy50YXJnZXQpIHtcblx0XHRcdC8vIE9iamVjdC5zZXRQcm90b3R5cGVPZiBpcyBJRT49MTEgYW5kIEVTNlxuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIGVsc2U6IG9ubHkgcnVuIHRlc3RzIG9uIE5vZGUgZm9yIG5vdyAqL1xuXHRcdFx0aWYgKCg8YW55Pk9iamVjdCkuc2V0UHJvdG90eXBlT2YpIHtcblx0XHRcdFx0KDxhbnk+T2JqZWN0KS5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRmaXhTdGFjayA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gVGhpcyBvY2N1cnMgd2hlbiB0aGUgZXJyb3IgaXMgbm90IHRocm93biBidXQgb25seSBjcmVhdGVkIGluIElFXG5cdFx0LyogaXN0YW5idWwgaWdub3JlIGlmOiBvbmx5IHJ1biB0ZXN0cyBvbiBOb2RlIGZvciBub3cgKi9cblx0XHRpZiAoIShcInN0YWNrXCIgaW4gdGhpcykpIHtcblx0XHRcdGZpeFN0YWNrID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXG5cdFx0LyogaXN0YW5idWwgaWdub3JlIGVsc2U6IG9ubHkgcnVuIHRlc3RzIG9uIE5vZGUgZm9yIG5vdyAqL1xuXHRcdGlmIChmaXhTdGFjaykge1xuXHRcdFx0Ly8gVGhpcy5uYW1lIGFuZCB0aGlzLm1lc3NhZ2UgbXVzdCBiZSBzZXQgY29ycmVjdGx5IGluIG9yZGVyIHRvIGZpeCB0aGUgc3RhY2sgY29ycmVjdGx5XG5cdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZTogb25seSBydW4gdGVzdHMgb24gTm9kZSBmb3Igbm93ICovXG5cdFx0XHRpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcblx0XHRcdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgbmV3LnRhcmdldCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHRcdFx0ZXJyb3IubmFtZSA9IG5hbWU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGVycm9yLnN0YWNrIHx8IFN0cmluZyhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==