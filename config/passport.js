const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('../config/database');

module.exports = function (passport){
    let opts = {}; //options is an object literal containing options to control how token is extracted.
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT")  
    opts.secretOrKey = config.secret; //string containing the secret or pem encoded public key verifying the tokens signiture
    passport.use(new JwtStrategy(opts, (jwt_payload,done)=>{
        console.log(jwt_payload)
        User.getUserById(jwt_payload.user._id, (err, user)=>{  
            if(err){
                return done(err,false); 
            }
            if(user){
                return done(null, user);
            }else{
                return done(null,done);
            }
        });
    }));
}
