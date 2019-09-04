"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../utils/util");
var WordGroup = (function () {
    function WordGroup() {
        this.id = util_1.guid();
        this.name = '';
        this.count = 0;
        this.list = new Array();
    }
    WordGroup.prototype.setId = function (id) {
        this.id = id;
    };
    WordGroup.prototype.setName = function (name) {
        this.name = name;
    };
    WordGroup.prototype.setCount = function (count) {
        this.count = count;
    };
    WordGroup.prototype.setList = function (list) {
        this.list = list;
    };
    WordGroup.prototype.getId = function () {
        return this.id;
    };
    WordGroup.prototype.getName = function () {
        return this.name;
    };
    WordGroup.prototype.getCount = function () {
        return this.count;
    };
    WordGroup.prototype.getList = function () {
        return this.list;
    };
    return WordGroup;
}());
exports.WordGroup = WordGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZEdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV29yZEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0NBQWtDO0FBR2xDO0lBV0U7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVNLHlCQUFLLEdBQVosVUFBYSxFQUFTO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUNNLDJCQUFPLEdBQWQsVUFBZSxJQUFXO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFDTSw0QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNNLDJCQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQ00seUJBQUssR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ00sMkJBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQ00sNEJBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBQ00sMkJBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWNleivjeWIhue7hOWunuS9k+exu1xyXG4gKi9cclxuaW1wb3J0IHtndWlkfSBmcm9tICcuLi91dGlscy91dGlsJ1xyXG5pbXBvcnQge1dvcmR9IGZyb20gJy4vV29yZCdcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JkR3JvdXB7XHJcbiAgLy/ljZXor43liIbnu4TnmoRpZFxyXG4gIHByaXZhdGUgaWQ6c3RyaW5nXHJcbiAgLy/liIbnu4TlkI0gIFxyXG4gIHByaXZhdGUgbmFtZTpzdHJpbmdcclxuICAvL+WIhue7hOS4i+eahOWNleivjeaVsOmHj1xyXG4gIHByaXZhdGUgY291bnQ6bnVtYmVyXHJcbiAgLy/liIbnu4TkuIvnmoTljZXor43liJfooahcclxuICBwcml2YXRlIGxpc3Q6QXJyYXk8V29yZD5cclxuICBcclxuICAvL+WIneWni+WMluWQhOWPmOmHj1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pZCA9IGd1aWQoKVxyXG4gICAgdGhpcy5uYW1lID0gJydcclxuICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB0aGlzLmxpc3QgPSBuZXcgQXJyYXk8V29yZD4oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRJZChpZDpzdHJpbmcpOnZvaWR7XHJcbiAgICB0aGlzLmlkID0gaWRcclxuICB9XHJcbiAgcHVibGljIHNldE5hbWUobmFtZTpzdHJpbmcpOnZvaWR7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRDb3VudChjb3VudDpudW1iZXIpOnZvaWR7XHJcbiAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICB9XHJcbiAgcHVibGljIHNldExpc3QobGlzdDpBcnJheTxXb3JkPik6dm9pZHtcclxuICAgIHRoaXMubGlzdCA9IGxpc3RcclxuICB9XHJcbiAgcHVibGljIGdldElkKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuaWRcclxuICB9XHJcbiAgcHVibGljIGdldE5hbWUoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRDb3VudCgpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLmNvdW50XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRMaXN0KCk6QXJyYXk8V29yZD57XHJcbiAgICByZXR1cm4gdGhpcy5saXN0XHJcbiAgfVxyXG59Il19