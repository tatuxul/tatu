
function getIP () {
    fetch('https://ipapi.co/json/')
            .then(response=>response.json())
            .then((responseJson => {
                document.write(JSON.stringify(responseJson))    
            })) 
    return document.write(JSON.stringify(responseJson))
}

