var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
  

    
novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        width: 900,
        height : 300,
        crop : 'fill'
        });
        return {
          ...novedad,
          imagen
        }
    } else{
      return {
        ...novedad,
        imagen:  ''
      }
    }
  });

    res.json(novedades)
});

router.post('/contacto', async (req,res) => {
  const mail = {
    to: 'maxidutraflores@gmail.com',
    subject: 'contacto',
    html: '${req.body.nombre} se contacto por la web'
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  await transport.sendMail(mail)
  res.status(201).json({
    error: false,
    message: 'enviado'
  }

  );
}
);


module.exports = router;