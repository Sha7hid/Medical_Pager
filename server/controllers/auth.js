const {connect} = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;
const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber} = req.body;

       const userId = crypto.randomBytes(16).toString('hex');

       const serverClient = connect(api_key, api_secret, app_id);
  
       const hashedPassword = await bcrypt.hash(password, 10);
    
       const token = serverClient.createUserToken
    } catch (error) {
        console.log(error);
res.status(500).json({message:error});
    }
};

const login = (req, res) => {

};


module.exports = {signup, login}