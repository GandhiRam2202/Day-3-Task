# Day-3-Task
# 1.How to compare two JSON have the same properties wihtout Order ?

+ let object = {name : "Person1",age : 5};
+ let object1 = {age : 5 , name : "Person1"};
    + Task code was inside the folder ***objectCompare*** as file name ***objectCompare.js***

    ```
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
    console.log("No Both the Object Are Not Same");
    }

    ```

+ Declared Object 
+ Declared Object1
+ After that the Both Object Are Converted Into String by using ***JSON.stringify()*** Method
+ And Sorted Using ***Sort()***;
+ The Sorted Strings are stored in new Variables `sortString` and `sortString1` 
+ And Then Compared with `If Stametemt` with condition `(sortString===sortString1)`
+ If the Both String are match It return 
        + `Yes Both the Object Are Same`
        + else
        + `No Both the Object Are Not Same`


# 2.Use the rest countries API URL -> https://restcountries.com/v3.1/all and Display all th country flags inth console

   + Task code was inside the folder ***Flags*** as file name ***index.html*** and ***script.js***
    Just run the html file and right click in mouse and select inspect or on keybard press `ctrl+shift+i` and console tab in console tab all country **Flags** link will be listed from rest countries API URL link

# 3.Use the same Rest Countries print the all countries NAME,REGION,SUBREGION,POPULATION

   + Task code was inside the folder ***Details*** as file name ***index.html*** and ***script.js***
    Just run the html file and right click in mouse and select inspect or on keybard press `ctrl+shift+i` and console tab in console tab all country **NAME,REGION,SUBREGION,POPULATION** will be listed from rest countries API URL link