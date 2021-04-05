const bcryptjs = require("bcryptjs")
const helpers = {}

helpers.encriptacion = async(password) => {
    const salto = await bcryptjs.genSalt(10)
    const encriptacion = await bcryptjs.hash(password, salto)
    return encriptacion
}

helpers.desencriptacion = async(password, savedpassword) => {
    try{
        return await bcryptjs.compare(password, savedpassword)
    }catch(e){
        console.log(e)
    }
}

module.exports = helpers