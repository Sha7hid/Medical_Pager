const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

const signup = (req, res) => {
    try {
        const { fullName, username, password, phoneNumber} = req.body;

       
    } catch (error) {
        console.log(error);
res.status(500).json({message:error});
    }
};

const login = (req, res) => {

};


module.exports = {signup, login}