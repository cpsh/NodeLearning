/**Use the express.Router class to create modular, mountable route handlers.
 *  A Router instance is a complete middleware and routing system;
 *  for this reason, it is often referred to as a “mini-app”.
 *
 *  The following example creates a router as a module,
 *  loads a middleware function in it, defines some routes,
 *  and mounts the router module on a path in the main app.
 *
 * Created by shichp on 2017/1/6.
 */
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time-1: ', Date.now())
    next()
})
router.use(function timeLog (req, res, next) {
    console.log('Time-2: ', Date.now())
    next()
})
router.use(function timeLog (req, res, next) {
    console.log('Time-3: ', Date.now())
    next()
})

// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

router.get('/:birdId/info', function (req, res) {
    console.log("dirdId : " + req.params.birdId);
    res.send('birds info - birdId : '+ req.params.birdId);
})

module.exports = router