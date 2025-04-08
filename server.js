const express = require('express');
const { tiktokdl } = require('@bochilteam/scraper-tiktok');

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para descargar video de TikTok
app.get('/tiktok', async (req, res) => {
    try {
        const { url } = req.query;
        
        if (!url) {
            return res.status(400).json({ error: 'Por favor proporciona una URL de TikTok' });
        }

        const data = await tiktokdl(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
