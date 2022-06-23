let cookie = {
    get(name) {
        let list = document.cookie.split(';');
        for (let i = 0; i < list.length; i++) {
            let keyValue = list[i];
            if (keyValue.trim().startsWith(name)) return keyValue.substring(name.length + 1, keyValue.length);
        }
        return "";
    },
    set(name, value, expired) {
        if (expired === undefined || expired === null || typeof expired !== "number") {
            expired = 7;
        }
        let expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + expired);
        document.cookie = name + "=" + encodeURI(value) + ";expires=" + expiredDate.toGMTString();
    },
    delete(name) {
        this.set(name, "", new Date() - 1);
    },
    has(name) {
        return this.get(name) !== "";
    }
}

export default cookie;