const signup = () => {
    try {
        
    } catch (error) {
        console.log(error);
res.status(500).json({message:error});
    }
};

const login = () => {};


module.exports = {signup, login}