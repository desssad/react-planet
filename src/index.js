fetch('http://swapi.co/api/planets/1/')
    .then((res)=>{
        console.log('Got response ', res.status);
    });
