var array1 =[{Id:0, name:"name1"},{Id:0, name:"name2"}]
var index=0;
for(i=0;i<array1.length;i++)
{
    if(array1[i].name== "name2")
    index=i;
}
array1.splice(index,1,{Id:0, name:"name4"});
console.log(array1);
