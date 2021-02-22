const data = [
    {
        Name : "Sakib Shahrier",
        Age : 27,
        Occupassion : "Student",
        Residence : "Kuarpar, Sylhet"
    },
    {
        Name : "Zubayda Anannya",
        Age : 23,
        Occupassion : "Student",
        Residence : "Uttara, Dhaka"
    },
    {
        Name : "Hossain Shanto",
        Age : 23,
        Occupassion : "Student",
        Residence : "Kuarpar, Sylhet"
    },
    {
        Name : "Md. Haider Ali",
        Age : 57,
        Occupassion : "Engineer",
        Residence : "Kuarpar, Sylhet"
    },
    {
        Name : "Mst. Momtaz Begum",
        Age : 54,
        Occupassion : "House Wife",
        Residence : "Kuarpar, Sylhet"
    },
    {
        Name : "Nazma Parvin",
        Age : 52,
        Occupassion : "House Wife",
        Residence : "Uttara, Dhaka"
    },
    {
        Name : "Delwar Hossain",
        Age : 57,
        Occupassion : "Sr. Executive",
        Residence : "Uttara, Dhaka"
    },
];

const title = ["Name", "Age", "Occupassion", "Residence"];
const div = document.createElement('div');
const footer = document.createElement('div');
document.body.appendChild(div);
document.body.appendChild(footer);
let divC, h3, p, a;
let totalElem = data.length;
let i = 1;

for(let j = 0; j <= totalElem; j += 3){
    a = document.createElement('a');
    a.setAttribute('href', 'index.html');
    a.innerText = i++;
    footer.appendChild(a);
}

for(let x of data){
    divC = document.createElement('div');
   h3 = document.createElement('h3');
   h3.innerText = `Name : ${x.Name}`;
   p = document.createElement('p');
   p.innerHTML = `Age : ${x.Age}<br>Occupassion : ${x.Occupassion}<br>Lives in : ${x.Residence}`;
   divC.appendChild(h3);
   divC.appendChild(p);
   div.appendChild(divC);
   divC.classList.toggle('section');
   div.classList.toggle('main');
}