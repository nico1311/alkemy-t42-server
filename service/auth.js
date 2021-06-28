const jsw = require('jsonwebtoken');
const fs = require('fs');


const signOptions = {expiresIn:'8h', algorithm: 'RS256'};

const createToken = (payload) =>{jsw.sign(payload, process.env.SECRET_KEY, signOptions)};
const decodeToken = (token) =>{
    const [, JWT] = token.split('');
    const validToken = jsw.verify(JWT, process.env.SECRET_KEY);
    return validToken;
};

module.exports = {createToken, decodeToken};