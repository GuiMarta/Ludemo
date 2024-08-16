import app from './app.js'; // Importando o app do arquivo app.js

const PORT = process.env.PORT || 5000; // Definindo a porta do servidor

app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

