const {postFile, getFile, deleteFile} = require('../services/amazonS3Service');

module.exports = {
    async postImage(req, res){
        
            if(!req.file) return res.status(400).json("Ha habido un error. Por favor, envíe una imagen en la petición.");

            const image = await postFile(req.file);

            if(image.path)
            {
             console.log({image : image.path})
             return res.status(201).json(image);
            } else {
                return res.status(500).json({error : image.error});  
            }
      
    },

    async getImage(req, res){
        if(!req.params.id) return res.status(400).json("Por favor, provea el id del archivo");

        const image = await getFile(req.params.id);

        if(image.url)
        {
            return res.status(200).json({url: image.url});
        } else {
            return res.status(500).json({error: image.error})
        }
    },

    async deleteImage(req, res){
        if(!req.params.id) return res.status(400).json("Por favor, provea el id del archivo");

        const image = await deleteFile(req.params.id);

        if(image) {
            return res.status(200).json("Imagen eliminada con éxito");
        }
        else {
            return res.status(500).json("Ha habido un error");
        }
    }
}