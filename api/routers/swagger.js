const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../documentation/swagger.json');
const auth = require("../middleware/auth");


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = router;
