/* eslint-disable no-console */
import express from 'express'
import controller from './controller'

const router = express.Router()

router.get('/k9/:dict/:numbers', controller)
router.get('/k9/:numbers', controller)

export default router
