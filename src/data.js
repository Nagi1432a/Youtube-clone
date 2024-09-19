export const apikey= 'AIzaSyA8QzUO844nYSbl2t-FoFNAOukXRk19m70';


export const v= (value) => {
 if (value>=1000000){
    return Math.floor(value/1000000)+"M";
 }
 else if(value>=1000){
    return Math.floor(value/1000)+"K";

 }
 else{
    return value;
 }

}