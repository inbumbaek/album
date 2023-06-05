const AlbumController = require('../controllers/albumController');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.findAllAlbums);
    app.get('/api/myAlbums', authenticate, AlbumController.allAlbumsByLoggedInUser);
    app.post('/api/newAlbum', authenticate, AlbumController.createAlbum);
    app.get('/api/oneAlbum/:id', AlbumController.findOneAlbum);
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum);
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum);
}
