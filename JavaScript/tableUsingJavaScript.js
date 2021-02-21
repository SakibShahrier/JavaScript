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

const tableRowMaker = (tr, type , arr) => {
    let td;
    for(let x of arr){
        td = document.createElement(type);
        td.innerText = x;
        tr.appendChild(td);
    }

    return tr;
}

const tableRowData = (data) => {
    let tr = document.createElement('tr');
    let td;
    for(let inf of Object.entries(data)){
        td = document.createElement('td');
        td.innerText = inf[1];
        tr.appendChild(td);
    }

    return tr;
}

const header = document.createElement('h1');
header.innerText = "Our Family!";
header.classList.toggle("header");
const body = document.querySelector('body');
body.appendChild(header);

const table = document.createElement('table');
let tr = document.createElement('tr');
let th = document.createElement('th');
let td = document.createElement('td');

tr = tableRowMaker(tr, 'th', title);
table.appendChild(tr);

for(let row of data){
    tr = tableRowData(row);
    table.appendChild(tr);
}

body.appendChild(table);

