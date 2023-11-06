//! Ən bahalı məhsul

// axios.get("https://northwind.vercel.app/api/products")
// .then((response)=>{
//     const products=response.data;
//     let dataInfo=products[0];
//     products.forEach(element => {
//         if (element.unitPrice> dataInfo.unitPrice){
//             dataInfo=element;

//         }
//     });
//     console.log(dataInfo.name);
// })

//! Ortalama stok miqdarı

// axios.get("https://northwind.vercel.app/api/products")
// .then ((response)=>{
//     const products=response.data;
//     let count=0;
//     products.forEach(element => {
//         count+=element.unitsInStock;

//     });
//     ortalamaStock = count/products.length
//     console.log(ortalamaStock);
// })

//! “C” ilə başlayan məhsullar
// axios.get("https://northwind.vercel.app/api/products")
// .then((Response)=>{
//     const products=Response.data;
//     let cIleBaslayan=products.filter(element=> element.name.charAt(0)==="C");
//     console.log(cIleBaslayan.map(element=>element.name));
// })

//! “London” şəhərindəki müştəriləri console a yaz
// axios.get("https://northwind.vercel.app/api/customers")
// .then((Response)=>{
// const customers=Response.data;
// customers.forEach(() => {
//     for (let i = 0; i < customers.length; i++) {
//      if (customers[i].address.city==="London") {
//         console.log(customers[i].contactName);
//      }

//     }
// });
// })

//! Region NULL olan nə qədər customer var?
// axios.get("https://northwind.vercel.app/api/customers")
// .then((Response)=>{
//     const customers=Response.data;
//     let regionNull=customers.filter(element=>element.address.region==="NULL");
//     console.log(regionNull.length);
//     console.log(regionNull.map(element=>element.address.region));
// })

//! Id-si 1 olan userin nə qədər postu var?
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((Response)=>{
//     const posts=Response.data;
//     let idUser=posts.filter(element=>element.userId===1)
//     console.log(idUser.length);
//     console.log(idUser.map(element=>element.userId));
// })

//! 1 nömrəli albümdə nə qədər fotoqraf var?
// axios.get("https://jsonplaceholder.typicode.com/albums")
// .then((Response)=>{
//     const posts=Response.data;
//     let albomNumber=posts.filter(element=>element.userId===1);
//     console.log(albomNumber.length);
//     console.log(albomNumber.map(element=>element.userId));
// })
