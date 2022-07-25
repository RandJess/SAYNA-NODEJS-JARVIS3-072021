const express = require('express')
const app= express()
const  session= require('express-session')
const exphbs= require('express-handlebars')
const mongoose= require('mongoose')
const passport = require('passport')
const localStrategy = require('passport-local')
const bcryptjs = require('bcryptjs')

const UserShema=require('./models/UserModel')
const User= mongoose.model('UserModel', UserShema)

mongoose.connect("mongodb://localhostnode-auth-yt/", {
    userNewUrlParser: true,
    useUnifiedTopology: true
}) 



//Middleware
app.engine('hbs', hbs({extends: ".hbs"}))
app.set('view engine', 'hbs')
app.use(expresss.static(_dirname+ '/public'))
app.use(session({
    secretKey: "mySecretKey",
    resave: false,
    saveUninitialized: true
}))
app;use(express.urlencoded({extended: false}))
app.use(express.json())

//Passport.js
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user)
    })
})

passport.deserializeUser(new localStrategy(
    ( function(username, password)
))