import { Router } from 'express'
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userControllers.js'
import { body, check } from 'express-validator'
import { valResultExpress } from '../middleware/validationResult.js'

const router = Router()

router.get('/', getUsers)
router.post('/create',
[
    body('email', 'Email not valid').trim().isEmail()
], 
    valResultExpress,
    createUser
)
router.put('/update',
[
    body('email', 'Email not valid').trim().isEmail(),
    body('name', 'Name cannot be empty').isLength({ min: 3 }),
], 
    valResultExpress,
    updateUser
),
router.delete('/delete/:_id', 
[
    check('_id').isUUID().exists()
],
    valResultExpress,
    deleteUser
)

export default router;