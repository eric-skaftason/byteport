require('dotenv').config( { path: '.env' } );
const app = require('./app.js');

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(
        `\n-------- Byteport Server --------\n` + 
        `Server running on http://localhost:${PORT}`
    );
});