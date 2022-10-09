const {connect} = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

const signup = (req, res) => {
    try {
        const { fullName, username, password, phoneNumber} = req.body;

       const userId = crypto.randomBytes(16).toString('hex');

       const serverClient = connect(api_key, api_secret, app_id);
    } catch (error) {
        console.log(error);
res.status(500).json({message:error});
    }
};

const login = (req, res) => {

};


module.exports = {signup, login}