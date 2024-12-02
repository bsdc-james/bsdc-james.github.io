const people = [
    {name:"Leon",surname:"Evans",age:"17"},
    {name:"Stefan",surname:"Darot",age:"17"},
    {name:"Alfie",surname:"Brown",age:"17"},
    {name:"William",surname:"Banham",age:"17"},
    {name:"Albert",surname:"Alcock",age:"17"},
    {name:"Joseph",surname:"Rolfe",age:"17"},
]


const table = document.getElementById("nameTable")
console.log(table)


for (i=1;i<people.length;i++) {
    const newThing = document.createElement('tr')
    newThing.innerHTML = `<tr><td>${people[i].name}</td><td>${people[i].surname}</td><td>${people[i].age}</td></tr>`
    table.appendChild(newThing)
}
