let url = {
    getParameters(url) {
        let theRequest = {};
        if (url.indexOf("?") !== -1) {
            let parameters = url.substring(1).split('&');
            for (let i = 0; i < parameters.length; i++) {
                let keyValue = parameters[i].split("=");
                theRequest[keyValue[0]] = decodeURI(keyValue[1]);
            }
        }
        return theRequest;
    }
}

export default url;