const jwt = require('jsonwebtoken');

const checkIfAdmin = (req , res , next) =>{
    const token = req.headers['token'];
    if (token) {
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.json({ message: 'Failed to authenticate token.' });
            } else {
                req.user = decoded;
                if(req.user.role === 'Admin'){
                    next()
                }else{
                    return res.status(403).send({
                        message: 'You are not an admin.'
                    });
                }
            }
        });
    }
}
const checkIfRider = (req , res , next) =>{
    const token = req.headers['token'];
    if (token) {
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.json({ message: 'Failed to authenticate token.' });
            } else {
                req.user = decoded;
                if(req.user.role === 'Rider'){
                    next()
                }else{
                    return res.status(403).send({
                        message: 'You are not an rider.'
                    });
                }
            }
        });
    }
}
module.exports = {
    checkIfAdmin,checkIfRider
}