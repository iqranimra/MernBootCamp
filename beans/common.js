const {
    usersController,
    adminsController,
    clientController
} = require('../controllers');

// 2 methods of promise
//promise.resolve, Promise,reject
// jab ham kisi b fun k sath async lgaty han iss ka matlab ha 
//k wo hmen promise men output dy ga, async kis b fun k sath lgaa k issy promise bnaa saktay han

const signup = async(body) => {
    // apply validation
    if (!body.userName){
        return Promise.reject({error:'Username is required !'});
    }
    if (!body.password){
        return Promise.reject({error:'Password is required !'});
    }
    if (!body.userType){
        return Promise.reject({message: 'User type is required !'});
    }
    if (!body.data){ // data represents public info of the user
        return Promise.reject({message: 'Data is required !'});
    }
    try{
        let result = null;
    const userType = body.userType;
 
    console.log(body);
    switch(userType){ 
        case 'admin':
            //apply validation of admin;
            result = await adminsController.addAdmin(body.data);
            break;
        case 'client':
            //apply validation of client;
            result = await clientController.addClient(body.data);
            break;
        default:
            return Promise.reject({error: "User Type is invalid!"});
    }
    
    console.log(result);
    const userJson = {
        userName: body.userName,
        password: body.password, //make this pass encrypted
        userType: {
            kind: userType,
            item: result._id
        }
    }; 
    console.log(userJson);
    const user = await usersController.addUser(userJson);
    return user;
    // Add email here if we there is requirement to do email if user added, for this we have to setup controller etc of email
    
    console.log(user);
} catch(exp) {
    return Promise.reject({error:exp});
}
}
 
module.exports = {
    signup
}