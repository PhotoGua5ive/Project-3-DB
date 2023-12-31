const router = require('express').Router()
const { checkAdmin, checkPhotoGrapher } = require("../middlewares/auth");

const { 
   getAllReservation,
   getOneReservation,
   createReservation,
   createReservationByAdmin,
   updateReservation,
   deleteReservation,
   deleteReservationByAdmin


 } = require('../controllers/reservation_controllers')


router.get('/:reservationId', getOneReservation)
router.get('/', getAllReservation)

router.put('/:reservationId', updateReservation)

router.post('/admin/:userId', checkAdmin, createReservationByAdmin)
router.post('/:packId', createReservation)


router.delete('/:reservationId', deleteReservation)
router.delete('/checkAdmin/:reservationId',checkAdmin, deleteReservationByAdmin)





module.exports = router
