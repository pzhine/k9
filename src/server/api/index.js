/* eslint-disable no-console */
import express from 'express'
import controller from './controller'
import dictionaries from '../../../dictionaries'
import dictionary from './dictionary'

const router = express.Router()

router.get('/k9/:dict/:numbers', controller)
router.get('/k9/:numbers', controller)

console.log('BUILDING PREFIX SEARCH INDICIES')
Object.keys(dictionaries).forEach(lang => dictionary(lang))

export default router
