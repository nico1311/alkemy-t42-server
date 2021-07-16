const { Organization } = require('../models');
const log = require('../utils/logger');

module.exports = {
  async getOrganization(req, res) {
    try {
      const organization = await Organization.findByPk(1);
      log.info('Sending organization');
      res.status(200).json({ organization });
    } catch (err) {
      log.error(
        `Error happened trying to send the organization. Error: [${err.message}]`
      );
      res.status(500).json({ Error: err.message });
    }
  },
  editOrganization(req, res) {
    try {
      const organization = await Organization.findByPk(1);
      log.info(`Editing organization with id [${req.params.id}]`);
      const response = await organization.update(req.body);
      if (response === null) {
        log.warn(`Organization with id [${req.params.id}] does not exist`);
        res.status(404).end();
      }
      log.info(`Organization with id [${req.params.id}] was edited`);
      res.status(200).json(responde)
    } catch (err) {
      log.error(
        `Error happened trying to edit organization with id [${req.params.id}]. Error: [${err.message}] `
      );
      res.status(500).json({ Error: err.message });
    }
  }
};
