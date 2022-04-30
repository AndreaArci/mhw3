
function onJson(json) {

    console.log(json);

    const ImgLoc = json.results; //ho salvato l'array con tutti i risultati trovati dalla fetch
    const Copertine = document.querySelector("#Copertina");
    Copertine.innerHTML = '';

    const A= document.querySelector('.hidden');
    A.classList.remove('hidden');


    for (let result of ImgLoc) {
        const Copertina = document.querySelector('#Copertina');
        const img = document.createElement('img');
        img.src = result.image;
        Copertina.appendChild(img);
    }

}


function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json(); //La risposta del server viene convertita in Json
}


function search(event){
    event.preventDefault(); //Impediamo il submit del form


//Lettura del valore inserito nel campo di testo
    const text= document.querySelector('#content'); 
    const text_value = encodeURIComponent(text.value);
    console.log('Eseguo ricerca: ' + text_value);

    //preparo la richiesta
    rest_url = 'https://imdb-api.com/en/API/Search/' + api_key + '/' + text_value;
    console.log('URL: ' + rest_url);


    //eseguo fetch
    fetch(rest_url).then(onResponse).then(onJson);

}



//API key --- Non è sicuro, tutti possono accedere alla nostra personale API_key
const api_key = 'k_beswl5kc'; 

 //Aggiungiamo event listner al form0
const form = document.querySelector('form');
form.addEventListener('submit', search);




let client_id= "c88c1bee67f243a3a6e791b5661a34cd";
const client_secret= "9373311b87c84197b375648ab1dad73b";


fetch("https://accounts.spotify.com/api/token",{ 
    method: "post", 
    body: 'grant_type=client_credentials', 
    headers: 
    { 
     'Content-Type': 'application/x-www-form-urlencoded', 
     'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret) 
    }  
 }).then(onTokenResponse).then(onJsonToken);
 
 function onTokenResponse(response) 
 { 
     return response.json();  
 } 
  
 function onJsonToken(json) 
 { 
     token=json.access_token; 
     console.log(token); 
 }



 fetch("https://api.spotify.com/v1/search?type=album&q=" + "Salvatore",
 {
     headers:
     {
         'Authorization' : 'Bearer' + "BQCxqdr83Isqy3WHfRBCkr4Ir4X0S_WWkZOVcoKZ0hWa8bncifHXWPwuxA_KKAEius-M2cyzsIEV_mSqzhLoRALgsMYm-mC8aggTFP72mFK2NPNzocL776FhVJwAJzpd1NLGvWJeNAN6XtcyjDaIQLwJnvNwvxWIL-hnrP7voA"
     }
 }
 ).then(onResponseAlb).then(onJsonAlb);


 function onResponseAlb(response){
    console.log('Risposta ricevuta');
    return response.json();
 }

 function onJsonAlb(json) {

    console.log(json);
 }
