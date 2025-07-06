var TimeLimitedCache = /** @class */ (function () {
    function TimeLimitedCache() {
        this.cache = new Map();
    }
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        var _this = this;
        var _a;
        var isExist = this.cache.has(key);
        if (isExist) {
            clearTimeout((_a = this.cache.get(key)) === null || _a === void 0 ? void 0 : _a.timerId);
        }
        var timerId = setTimeout(function () {
            _this.cache.delete(key);
        }, duration);
        this.cache.set(key, { value: value, timerId: timerId });
        return isExist;
    };
    TimeLimitedCache.prototype.get = function (key) {
        var _a;
        if (!this.cache.has(key)) {
            return -1;
        }
        return (_a = this.cache.get(key)) === null || _a === void 0 ? void 0 : _a.value;
    };
    TimeLimitedCache.prototype.count = function () {
        return this.cache.size;
    };
    return TimeLimitedCache;
}());
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
*/
var timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
setTimeout(function () { return console.log(timeLimitedCache.get(1)); }, 1000); // -1
