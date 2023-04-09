let error: number = Math.floor(Math.random() * 40000);

function despegue(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (error <= 25000) {
      setTimeout(() => {
        reject("ERROR. Se aborta el despegue");
      }, error);
    }
    console.log(`Comenzando etapa 1 - ${new Date().toLocaleTimeString()}`);
    setTimeout(() => {
      console.log(`Fin de la etapa 1 - ${new Date().toLocaleTimeString()}`);
      console.log(`Comenzando etapa 2 - ${new Date().toLocaleTimeString()}`);
      setTimeout(() => {
        console.log(`Fin de la etapa 2 - ${new Date().toLocaleTimeString()}`);
        console.log(`Comenzando etapa 3 - ${new Date().toLocaleTimeString()}`);
        setTimeout(() => {
          console.log(`Fin de la etapa 3 - ${new Date().toLocaleTimeString()}`);
          console.log(`Comenzando etapa 4 - ${new Date().toLocaleTimeString()}`);
          setTimeout(() => {
            console.log(`Fin de la etapa 4 - ${new Date().toLocaleTimeString()}`);
            resolve();
          }, 10000);
        }, 12000);
      }, 8000);
    }, 5000);
  });
}

despegue().catch((error: string) => {
  console.error(error);
  process.exit(1);
});
