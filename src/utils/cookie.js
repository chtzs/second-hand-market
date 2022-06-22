let cookie = {
    get(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return decodeURI(arr[2]);
        else
            return null;
    },
    set(cookieName, value, expired) {
        if (expired === undefined || expired === null || typeof expired !== "number") {
            expired = 7;
        }
        let expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + expired);
        document.cookie = cookieName + "=" + encodeURI(value) + ";expires=" + expiredDate.toGMTString();
    },
    delete(name) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const cookieVal = this.get(name);
        if (cookieVal !== null)
            document.cookie = name + "=" + cookieVal + ";expires=" + exp.toGMTString();
    },
    has(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return arr === document.cookie.match(reg);
    }
}

export default cookie;