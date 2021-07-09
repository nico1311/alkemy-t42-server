const { Entry } = require('../models');

module.exports = {
  /**
   *@module controllers
   */
  /**
   * Get all the entries with type 'news'
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getNews(req, res) {
    try {
      const news = await Entry.findAll({
        where: { type: 'news' },
        attributes: ['name', 'image', 'createdAt', 'id']
      });
      res.json({ news });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Get the details for the entry with the specific id
   * @param {import('express').Request} req
   * @param {import('express').Response } res
   */
  async getNewsDetail(req, res) {
    try {
      const newsDetail = await Entry.findByPk(req.params.id);
      newsDetail === null ? res.status(404).end() : res.json({ newsDetail });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async postNew(req, res) {
    try{
      const newPost = await Entry.create(req.body)
      res.json(newPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  /** Update an entry
   * @function putNew
   * @param {import('express').Request} req
   * @param {import('express').Response } res
   */
  async putNew (req, res) {
    try{
      const entry = await Entry.findByPk(req.params.id);

      if(!entry) return res.status(404).json({Error: "Entry not found"});

      const operation = await entry.update(req.body);

      if(operation) return res.status(200).json(entry);
      
    } catch(err) {
      res.status(500).json({Error: err})
    }
  },

  /**
   * Deletes an entry
   * @function deleteNew
   * @param {import('express').Request} req
   * @param {import('express').Response } res 
   * @returns 404 && "Entry not found" // 200 && "Entry successfully deleted" // 500 && Server error
   */
  async deleteNew(req, res) {
    try {
      const entry = await Entry.findByPk(req.params.id);

      if(!entry) return res.status(404).json({Error: "Entry not found"});

      const operation = entry.destroy();

      if(operation) return res.status(200).json("Entry successfully deleted");
    } catch(err){
      res.status(500).json({ Error: err });
    }
  }
};
