"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Trace = (function () {
    function Trace(ignoreUntil) {
        if (ignoreUntil === void 0) { ignoreUntil = Trace; }
        this.stack = new Stack_1.default(ignoreUntil);
    }
    Trace.prototype.setSource = function (source) {
        if (!source.sources) {
            this.sources = [source.stack];
        }
        else {
            this.sources = source.sources.concat(source.stack);
            if (this.sources.length > Trace.traceLimit) {
                this.sources = this.sources.slice(0, Trace.traceLimit);
            }
        }
    };
    Trace.prototype.inspect = function () {
        var result = this.stack.inspect();
        if (this.sources) {
            for (var i = this.sources.length - 1; i >= 0; i--) {
                result += "\n  from previous:\n" + this.sources[i].inspect();
            }
        }
        return result;
    };
    Trace.traceLimit = 10;
    return Trace;
}());
exports.default = Trace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUcmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLGlDQUE0QjtBQVE1QjtJQU1DLGVBQVksV0FBNkI7UUFBN0IsNEJBQUEsRUFBQSxtQkFBNkI7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBV00seUJBQVMsR0FBaEIsVUFBaUIsTUFBYTtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2RDtTQUNEO0lBQ0YsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsRCxNQUFNLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3RDtTQUNEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBbENhLGdCQUFVLEdBQVcsRUFBRSxDQUFDO0lBbUN2QyxZQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7a0JBdkNvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgY2xhc3MgZm9yIGNhcHR1cmluZyBzdGFjayB0cmFjZXMuXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IE1hcnRpbiBQb2Vsc3RyYVxuICogTGljZW5zZTogTUlUXG4gKi9cblxuLy8gVE9ETzpcbi8vIC0gdGVzdC9tYWtlIGl0IHdvcmsgaW4gbm9uLVY4XG5cbmltcG9ydCBTdGFjayBmcm9tIFwiLi9TdGFja1wiO1xuXG4vKipcbiAqIFN0YWNrIHRyYWNlIGNvbnRhaW5lciB3aXRoIG9wdGlvbmFsIHNvdXJjZSB0cmFjZXMuXG4gKlxuICogVHlwaWNhbGx5IHVzZWQgZm9yIGNhcHR1cmluZyB0cmFjZXMgYWNyb3NzIGFzeW5jaHJvbm91cyBjYWxscyAoZS5nLlxuICogd2l0aCBQcm9taXNlcyBvciBFdmVudHMpLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjZSB7XG5cdHB1YmxpYyBzdGFjazogU3RhY2s7XG5cdHB1YmxpYyBzb3VyY2VzPzogU3RhY2tbXTtcblxuXHRwdWJsaWMgc3RhdGljIHRyYWNlTGltaXQ6IG51bWJlciA9IDEwO1xuXG5cdGNvbnN0cnVjdG9yKGlnbm9yZVVudGlsOiBGdW5jdGlvbiA9IFRyYWNlKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6YmFuLXR5cGVzXG5cdFx0dGhpcy5zdGFjayA9IG5ldyBTdGFjayhpZ25vcmVVbnRpbCk7XG5cdH1cblxuXHQvKipcblx0ICogQXNzaWduIGFub3RoZXIgVHJhY2UgYXMgdGhlIHNvdXJjZSBvZiB0aGlzIFRyYWNlLlxuXHQgKlxuXHQgKiBOb3RlOiB0aGUgc3RhY2sgb2YgYHNvdXJjZWAgaXMgY29waWVkIHRvIHRoaXMgVHJhY2UsIGluIG9yZGVyIHRvIGFsbG93XG5cdCAqIHRydW5jYXRpbmcgdGhlIHRyYWNlIGxlbmd0aCB0byBgVHJhY2UudHJhY2VMaW1pdGAgdG8gcHJldmVudCBtZW1vcnlcblx0ICogZXhoYXVzdGlvbiBvbiBlLmcuIHJlY3Vyc2l2ZSB0cmFjZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSBzb3VyY2UgVHJhY2UgdG8gdXNlIGFzIHNvdXJjZS5cblx0ICovXG5cdHB1YmxpYyBzZXRTb3VyY2Uoc291cmNlOiBUcmFjZSk6IHZvaWQge1xuXHRcdGlmICghc291cmNlLnNvdXJjZXMpIHtcblx0XHRcdHRoaXMuc291cmNlcyA9IFtzb3VyY2Uuc3RhY2tdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZXMgPSBzb3VyY2Uuc291cmNlcy5jb25jYXQoc291cmNlLnN0YWNrKTtcblx0XHRcdGlmICh0aGlzLnNvdXJjZXMubGVuZ3RoID4gVHJhY2UudHJhY2VMaW1pdCkge1xuXHRcdFx0XHR0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZXMuc2xpY2UoMCwgVHJhY2UudHJhY2VMaW1pdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGluc3BlY3QoKTogc3RyaW5nIHtcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5zdGFjay5pbnNwZWN0KCk7XG5cdFx0aWYgKHRoaXMuc291cmNlcykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IHRoaXMuc291cmNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRyZXN1bHQgKz0gXCJcXG4gIGZyb20gcHJldmlvdXM6XFxuXCIgKyB0aGlzLnNvdXJjZXNbaV0uaW5zcGVjdCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=