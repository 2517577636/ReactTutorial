const axios  = require('axios');

// (async function(){
//     let url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=316554356516';
//     let result = await axios.get(url);

//     console.log(result.data);
    
// })();

let url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=316554356516';

let data ;
 axios.get(url)
 .then((res)=>{
    data = res.data;
    // console.log(data);
})
.catch((err) => {
    console.log(err);
});

module.exports = data;


