
let phrase = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa  Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";

phrase = phrase.split(/[ ,]/);


/**
 * La fonction qui supprime tout les points à la fin des adresses mails
 * @param {Array} tableauAdresseMails 
 * @return Array
 */
const supprimerLePointAlaFin = (tableauAdresseMails)=>{
    for(let i = 0; i < tableauAdresseMails.length; i++){
        if(tableauAdresseMails[i].endsWith('.')){
            tableauAdresseMails[i] = tableauAdresseMails[i].slice(0, tableauAdresseMails[i].length - 1)
        }
    }   

}
//Affichage des adresses mails
const listeDeAdressesMails = phrase.filter((adresseMails)=>{
    return adresseMails.includes('@');
});
supprimerLePointAlaFin(listeDeAdressesMails);
console.log(listeDeAdressesMails);

//Affiche les nombres des adresses mails
let nombreAdresseMails = listeDeAdressesMails.length;
console.log(`Les adresses mails sont au nombre de ${nombreAdresseMails}`);

//Affichage des numéros de télephone
const listeDeNumeroDeTelephone = phrase.filter((numeroDeTelephone)=>{
    return numeroDeTelephone.startsWith('+243');
});
supprimerLePointAlaFin(listeDeNumeroDeTelephone);
console.log(listeDeNumeroDeTelephone);

//Affiche les nombres des numéro de télephone
let nombreNumeroDeTelephone = listeDeNumeroDeTelephone.length;
console.log(`Les numéros de télephone sont au nombre de ${nombreNumeroDeTelephone}`);

//tout le numéros de telephone de vodacom
const toutNumeroVodacom = listeDeNumeroDeTelephone.filter((numeroVodacom)=>{
    return numeroVodacom.startsWith('+24381') || numeroVodacom.includes('+24382');
});
if(toutNumeroVodacom.length !== 0){
    console.log(`Tout le numéros vodacom: ${toutNumeroVodacom}`);
}else{
    console.log(`Pas de numéro de vodacom`);
}

//tout le numéros de telephone de togo
const toutNumerotigo = listeDeNumeroDeTelephone.filter((numeroTigo)=>{
    return numeroTigo.startsWith('+24389');
});
if(toutNumerotigo.length !== 0){
    console.log(`Tout le numéros tigo: ${toutNumerotigo}`);
}else{
    console.log(`Pas de numéro de tigo`);
}

//tout le numéros de telephone de orange
const toutNumeroOrange = listeDeNumeroDeTelephone.filter((numeroOrange)=>{
    return numeroOrange.startsWith('+24384') || numeroOrange.startsWith('+24385');
});
if(toutNumeroOrange.length !== 0){
    console.log(`Tout le numéros orange: ${toutNumeroOrange}`);
}else{
    console.log(`Pas de numéro de orange`);
}

//Lister toutes les adresses de messageries professionnelles
const toutLesAdresseMailsProf = listeDeAdressesMails.filter((adresseMailsProf)=>{
    if(!adresseMailsProf.includes('@gmail')){
        return adresseMailsProf;
    }
});
console.log(toutLesAdresseMailsProf);

//Lister toutes les adresses de messageries privé
const toutLesAdresseMailsPrive = listeDeAdressesMails.filter((adresseMailsPrive)=>{
    if(adresseMailsPrive.includes('@gmail')){
        return adresseMailsPrive;
    }
});
console.log(toutLesAdresseMailsPrive);

//Trouver le nombre des mots(Ici les numéros de téléphones,les adresses email,les articles,pronoms personnels,pronoms relatifs(qui),prépositions(à) ne sont pas des mots)


let listeMotIgnore = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];


for(let i = 0; i < listeMotIgnore.length; i++){
    phrase = phrase.filter((mot)=>{
        return !mot.includes(listeMotIgnore[i]);
        });
}
console.log(`Le mots admis est au nombre de ${phrase.length}`);
