Union and Intersection types in Typescript

Union (|) and intersection (&) types help to describe the values that do not fit within just a single type. Using union, the value can fit any one of many different types whereas intersection makes sure the value fits within multiple requirements.

an example of of the working of union and intersection can be seen through the code below.

type father = {
    name:string;
    num:number

}
type mother = {
    name:string;
    num:number

}

type familyDetails = Father & Mother



here both the information of father and mother is necessary and so intersection makes sure both are there
 but if it was 

 father | Mother (union) then it means it can be either father or mother. in thsi way union and intersection works and helps informationtake differnt forms
