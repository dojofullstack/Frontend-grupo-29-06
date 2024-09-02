


try {
    
    axios.get("api.com/v2/productps");

} catch (error) {
    
    console.log(error);

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      .then(res => res.json())
      .then(console.log);

      
}



try {
    console.log(credential);
} catch (error) {
    console.log(error);
} finally {
    console.log("final del flujo try/catch");
}

