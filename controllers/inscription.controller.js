var models = require('../models');
var debug = require('debug')('server:server');
var InscriptionService = require('../services/inscription.service')

class InscriptionController {
  getInscription(req,res) {
        //HomeService.getHome(req.body).then(
          res.render('inscription', { title: 'Inscription' })
        //);
      }

  postInscription(req,res) {
        InscriptionService.postInscription(req.body);
          
          res.redirect('/connectionUser');
    
  }
}

module.exports = new InscriptionController();