var express = require('express');
const { response } = require("../app");
const router = express.Router();
const bcrypt = require('bcryptjs');
const connection = require('../config/connection');

// GET route to render the admin login form
router.get('/', function (req, res, next) {
    res.render('admin/login',{adminlogin: true});
});

// POST route to handle admin login
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;

    try {
        const db = connection.get(); // Get the database instance from connection

        // Find admin document by email
        const admin = await db.collection('user').findOne({ email });

        if (!admin) {
            return res.render('admin/login', { loginErr: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.render('admin/login', { loginErr: 'Invalid email or password' });
        }

        // Set admin session or JWT token here
        req.session.adminId = admin._id; // Example using sessions, you can also use JWT

        res.redirect('/admin/home',); // Redirect to admin home after successful login
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET route to render the admin dashboard (home page)
router.get('/home', function (req, res, next) {
    if (!req.session.adminId) { // Check if admin is logged in
        return res.redirect('/admin'); // Redirect to login if not logged in
    }else{
    // Render admin home view
    res.render('/admin/index.html', {adminlogin : true}); // Assuming you have a home view in views/admin/home.hbs
    }
});

// Logout route
router.get('/logout', function (req, res, next) {
    req.session.destroy(); // Destroy session
    res.redirect('/admin'); // Redirect to login page after logout
});

module.exports = router;
