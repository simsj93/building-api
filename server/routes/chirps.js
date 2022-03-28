const express = require('express'); 
const chirpstore = require('../chirpstore');
const chirpsStore = require('../chirpstore'); 

let router = express.Router(); 



router.get('/', (req, res) => {
    
}); 

router.get('/id?', (req, res) => {
    const id = req.params.id; 
    if (id) {
        const chirp = chirpsStore.GetChirp(id);
        res.send(chirp);

    } else {
        const chirps = chirpsStore.GetChirps();
        res.send(chirps); 
    }
})


router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.send('great jorb chirp posted'); 
}); 

router.delete('/:id', (req, res) => {
  let id =  req.params.id;
    chirpsStore.DeleteChirp(id); 
    res.send('chirp deleted'); 
}); 

router.put('/:id', (req,res) => {
    let id = req.params.id; 
    chirpsStore.UpdateChirp(id, req.body); 
    res.sendStatus(200); 
});




module.exports = router; 

