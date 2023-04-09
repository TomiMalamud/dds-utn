var error = Math.floor(Math.random() * 40000);
function despegue() {
    return new Promise(function (resolve, reject) {
        if (error <= 25000) {
            setTimeout(function () {
                reject("ERROR. Se aborta el despegue");
            }, error);
        }
        console.log("Comenzando etapa 1 - ".concat(new Date().toLocaleTimeString()));
        setTimeout(function () {
            console.log("Fin de la etapa 1 - ".concat(new Date().toLocaleTimeString()));
            console.log("Comenzando etapa 2 - ".concat(new Date().toLocaleTimeString()));
            setTimeout(function () {
                console.log("Fin de la etapa 2 - ".concat(new Date().toLocaleTimeString()));
                console.log("Comenzando etapa 3 - ".concat(new Date().toLocaleTimeString()));
                setTimeout(function () {
                    console.log("Fin de la etapa 3 - ".concat(new Date().toLocaleTimeString()));
                    console.log("Comenzando etapa 4 - ".concat(new Date().toLocaleTimeString()));
                    setTimeout(function () {
                        console.log("Fin de la etapa 4 - ".concat(new Date().toLocaleTimeString()));
                        resolve();
                    }, 10000);
                }, 12000);
            }, 8000);
        }, 5000);
    });
}
despegue().catch(function (error) {
    console.error(error);
    process.exit(1);
});
