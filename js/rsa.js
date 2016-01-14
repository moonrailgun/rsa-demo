/**
 * Created by Chen on 2015-12-21.
 */

console.log('make by moonrailgun. welcome to visit my website: www.moonrailgun.com, thanks');

var isInt = function (number) {
    return parseInt(number) == number;
};

//求模反元素
var getD = function (e, FAIn) {
    var d;
    for (d = 0; d < 10000; d++) {
        if ((d * e) % FAIn == 1) {
            break;
        }
    }
    return d;
};

var RSA = function (_p, _q, _e) {
    var p = _p;
    var q = _q;
    var n = p * q;
    var FAIn = (p - 1) * (q - 1);
    var e = _e;
    var d = getD(e, FAIn);

    this.getPublicKey = function () {
        return {
            e: e,
            n: n
        }
    };

    this.getPrivateKey = function () {
        return {
            d: d,
            p: p,
            q: q
        }
    };

    this.encrypt = function (_m) {
        var m = parseInt(_m);
        return Math.pow(m, e) % n;
    };

    this.decrypt = function(_c){
        var c = parseInt(_c);
        return Math.pow(c,d) % n;
    };
};