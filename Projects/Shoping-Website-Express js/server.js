const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware (Only urlencoded is needed for form submission)
app.use(express.urlencoded({ extended: true }));

// Products Data for Shop Page (No database needed as per request)
const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', description: 'Experience pure sound with these high-quality noise-canceling headphones.' },
    { id: 2, name: 'Minimalist Smartwatch', price: 199.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', description: 'Sleek design combined with ultimate health and fitness tracking features.' },
    { id: 3, name: 'Mechanical Keyboard', price: 129.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80', description: 'Tactile switches and fully customizable RGB lighting for the ultimate setup.' },
    { id: 4, name: 'Ergonomic Office Chair', price: 349.99, image: 'https://plus.unsplash.com/premium_photo-1664402636754-8c01d9006cc0?auto=format&fit=crop&w=600&q=80', description: 'Designed for maximum comfort and posture support during long working hours.' },
    { id: 5, name: '4K Ultra HD Monitor', price: 450.00, image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=80', description: 'Crystal clear display for precise creative work and immersive gaming.' },
    { id: 6, name: 'Portable Power Bank', price: 49.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80', description: 'High-capacity fast charging battery pack to ensure you are never out of power.' }
];

// --- Routes ---

// Home Page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home | TechStore' });
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us | TechStore' });
});

// Shop Page
app.get('/shop', (req, res) => {
    res.render('shop', { title: 'Shop | TechStore', products });
});

// Contact Page (GET form)
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us | TechStore' });
});

// Contact Page (POST submit) - Simple form submit console logging
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Logging form data to the server console as requested
    console.log(`\n===================================`);
    console.log(`=== New Contact Form Submission ===`);
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Message: ${message}`);
    console.log(`===================================\n`);
    
    // Render back the contact page with a success flag
    res.render('contact', { title: 'Contact Us | TechStore', success: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
