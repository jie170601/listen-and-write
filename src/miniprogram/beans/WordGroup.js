"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../utils/util");
class WordGroup {
    constructor() {
        this.id = util_1.guid();
        this.name = '';
        this.count = 0;
        this.list = new Array();
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setCount(count) {
        this.count = count;
    }
    setList(list) {
        this.list = list;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCount() {
        return this.count;
    }
    getList() {
        return this.list;
    }
}
exports.WordGroup = WordGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZEdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV29yZEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsd0NBQWtDO0FBR2xDLE1BQWEsU0FBUztJQVVwQjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEVBQVM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVc7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBZ0I7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVNLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDbEIsQ0FBQztDQUNGO0FBaERELDhCQWdEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDljZXor43liIbnu4Tlrp7kvZPnsbtcclxuICovXHJcblxyXG5pbXBvcnQge2d1aWR9IGZyb20gJy4uL3V0aWxzL3V0aWwnXHJcbmltcG9ydCB7V29yZH0gZnJvbSAnLi9Xb3JkJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRHcm91cHtcclxuICAvL+WNleivjeWIhue7hOeahGlkXHJcbiAgcHJpdmF0ZSBpZDpzdHJpbmdcclxuICAvL+WIhue7hOWQjSAgXHJcbiAgcHJpdmF0ZSBuYW1lOnN0cmluZ1xyXG4gIC8v5YiG57uE5LiL55qE5Y2V6K+N5pWw6YePXHJcbiAgcHJpdmF0ZSBjb3VudDpudW1iZXJcclxuICAvL+WIhue7hOS4i+eahOWNleivjeWIl+ihqFxyXG4gIHByaXZhdGUgbGlzdDpBcnJheTxXb3JkPlxyXG4gIC8v5Yid5aeL5YyW5ZCE5Y+Y6YePXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmlkID0gZ3VpZCgpXHJcbiAgICB0aGlzLm5hbWUgPSAnJ1xyXG4gICAgdGhpcy5jb3VudCA9IDBcclxuICAgIHRoaXMubGlzdCA9IG5ldyBBcnJheTxXb3JkPigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldElkKGlkOnN0cmluZyk6dm9pZHtcclxuICAgIHRoaXMuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE5hbWUobmFtZTpzdHJpbmcpOnZvaWR7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q291bnQoY291bnQ6bnVtYmVyKTp2b2lke1xyXG4gICAgdGhpcy5jb3VudCA9IGNvdW50XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TGlzdChsaXN0OkFycmF5PFdvcmQ+KTp2b2lke1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElkKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuaWRcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROYW1lKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvdW50KCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuY291bnRcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaXN0KCk6QXJyYXk8V29yZD57XHJcbiAgICByZXR1cm4gdGhpcy5saXN0XHJcbiAgfVxyXG59Il19