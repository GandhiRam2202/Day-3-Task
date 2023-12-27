let object = {name : "Parthiban" , Bike : "RE" , Native : "CDM" , Hobbies : "Seeing smile on others face"}
let object1 = {Bike : "RE" , Hobbies : "Seeing smile on others face" , Native : "CDM" , name : "Parthiban"}
let sortString = JSON.stringify (object , Object.keys(object).sort())
let sortString1 = JSON.stringify (object1 , Object.keys(object1).sort());
if(sortString === sortString1)
{
    console.log("Yes Both the Object Are Same");
}
else
{
    console.log("No Both the Object Are Not Same",typeof sortString);
}
