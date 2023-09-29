
async function Fetch(url,options){
    let r=await fetch(url,options);
    let response=await r.json();
    return response;
}
export default Fetch;