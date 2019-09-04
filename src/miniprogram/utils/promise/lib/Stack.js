"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasStacks = (typeof Error.captureStackTrace === "function");
var Stack = (function () {
    function Stack(ignoreUntil) {
        if (ignoreUntil === void 0) { ignoreUntil = Stack; }
        if (hasStacks) {
            Error.captureStackTrace(this, ignoreUntil);
        }
        else {
            this.stack = "dummy\n<no trace>";
        }
    }
    Stack.prototype.inspect = function () {
        var lines = this.stack.split("\n");
        lines.shift();
        return lines.join("\n");
    };
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLElBQU0sU0FBUyxHQUFHLENBQUMsT0FBYSxLQUFNLENBQUMsaUJBQWlCLEtBQUssVUFBVSxDQUFDLENBQUM7QUFFekU7SUFHQyxlQUFZLFdBQTZCO1FBQTdCLDRCQUFBLEVBQUEsbUJBQTZCO1FBRXhDLElBQUksU0FBUyxFQUFFO1lBQ1IsS0FBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztTQUNqQztJQUNGLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGVscGVyIGNsYXNzIGZvciBjYXB0dXJpbmcgc3RhY2sgdHJhY2VzLlxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSBNYXJ0aW4gUG9lbHN0cmFcbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbi8vIFRPRE86XG4vLyAtIHRlc3QvbWFrZSBpdCB3b3JrIGluIG5vbi1WOFxuLy8gLSBwYXJzZSBzdGFja3MgaW50byBwbGF0Zm9ybS1pbmRlcGVuZGVudCBvYmplY3QtYXJyYXlzXG5cbmNvbnN0IGhhc1N0YWNrcyA9ICh0eXBlb2YgKDxhbnk+RXJyb3IpLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFjayB7XG5cdHByaXZhdGUgc3RhY2shOiBzdHJpbmc7IC8vIE5vdGU6IG5hbWUgKm11c3QqIGJlIFwic3RhY2tcIiwgd2l0aG91dCB1bmRlcnNjb3JlXG5cblx0Y29uc3RydWN0b3IoaWdub3JlVW50aWw6IEZ1bmN0aW9uID0gU3RhY2spIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpiYW4tdHlwZXNcblx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqLyAvLyBUT0RPOiByZW1vdmUgd2hlbiB0ZXN0aW5nIGZvciBub24tVjhcblx0XHRpZiAoaGFzU3RhY2tzKSB7XG5cdFx0XHQoPGFueT5FcnJvcikuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgaWdub3JlVW50aWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YWNrID0gXCJkdW1teVxcbjxubyB0cmFjZT5cIjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaW5zcGVjdCgpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGxpbmVzID0gdGhpcy5zdGFjay5zcGxpdChcIlxcblwiKTtcblx0XHRsaW5lcy5zaGlmdCgpOyAvLyBTdHJpcCB0aGUgXCJbb2JqZWN0IE9iamVjdF1cIiBsaW5lXG5cdFx0cmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XG5cdH1cbn1cbiJdfQ==