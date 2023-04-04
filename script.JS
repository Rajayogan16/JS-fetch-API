fetch('https://fakestoreapi.com/products/category/jewelery').then((data)=>{
    return data.json();
   }).then((objectdata)=>{
    let textdata="";
    objectdata.map((values)=>{
    textdata+=`
    <tr>
                <td class= "border">${values.title}</td>
                <td class= "border">${values.description}</td>
                <td class= "border">${values.category}</td>
                <td class= "border">${values.price}</td>
                <td class= "border"><img src="${values.image}" class="img-fluid" /></td>
              </tr>`;
})
document.getElementById("textbody").innerHTML=textdata;
   })
