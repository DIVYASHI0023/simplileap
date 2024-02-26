const { verifysignUpRequest } = require("../Middleware/app.middleware")
const { signup } = require("../src/Controllers/app.controller")

module.exports=(app)=>{
    app.post('/api/signup',[verifysignUpRequest],signup)
}
