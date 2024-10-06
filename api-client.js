// Networks calling code
import URL from "../utils/constant.js";
async function doNetworkCall(){
     
    try{
        const response = await fetch(URL);
        const object = await response.json();
        return object;
    }
    catch(err){
        console.log('Some problem in API call');
        throw err;
    }
}
export default doNetworkCall;
