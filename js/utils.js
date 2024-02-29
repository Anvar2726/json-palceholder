function getData(url){
    return new Promise((reject, resolve) =>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.send()

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    const res = JSON.parse(xhr.response);
                    reject(res);
                }else{
                    resolve("error")
                }
            }
        }
    })
}
