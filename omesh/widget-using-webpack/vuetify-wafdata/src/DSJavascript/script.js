const loadDSComp = {
    // dragAndDrop: function () {
    //     return new Promise((resolve,reject) => {
    //         requirejs(["DS/WAFData/WAFData"],function(WAFData) {
    //             resolve(WAFData);
    //         })
    //     })
    // },
    WAFData: function () {
        return new Promise((resolve, reject) => {
            requirejs(["DS/WAFData/WAFData"], function (auth) {
                resolve(auth);
            })
        })
    }
}

export default loadDSComp;