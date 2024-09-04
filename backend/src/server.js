import app from './app.js'; 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 
    console.log(`Servidor API LOCAL rodando na porta http://localhost:${PORT}`);
});

