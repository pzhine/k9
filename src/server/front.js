import 'babel-polyfill'
import path from 'path'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import template from './template'
import config from '../content/config.json'
import server from './base'
import kytConfig from '../../kyt.config'
import App from '../components/App'

const clientAssets = require(KYT.ASSETS_MANIFEST) // eslint-disable-line import/no-dynamic-require

const getClientAsset = ({ name, req }) => {
  if (!clientAssets[name]) {
    return null
  }
  if (process.env.NODE_ENV === 'development') {
    return clientAssets[name].replace(
      kytConfig.clientURL,
      `http://${req.hostname}:3001`
    )
  }
  return clientAssets[name]
}

// Setup the public directory so that we can server static assets.
server.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)))

// Setup server side routing.
server.get('*', (req, res) => {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  if (context.url) {
    res.redirect(302, context.url)
  } else {
    res.status(200).send(
      template({
        root: html,
        title: config.siteTitle,
        description: config.siteDescription,
        googleTrackingId: config.googleTrackingId,
        manifestJSBundle: getClientAsset({ name: 'manifest.js', req }),
        mainJSBundle: getClientAsset({ name: 'main.js', req }),
        vendorJSBundle: getClientAsset({ name: 'vendor.js', req }),
        mainCSSBundle: getClientAsset({ name: 'main.css', req }),
      })
    )
  }
})

export default server
