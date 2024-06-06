const express = require('express')
const productController = require ('../controllers/productController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()

//get all products
router.get('/all-products',productController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//add to wishlist
router.post('/user/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlist)

//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//getproduct
router.get('/:id/get-product',productController.getAProduct)

//remove wishlist
router.delete('/remove-wishlist/:id/item',jwtMiddleware,wishlistController.removeWishlist)

//add to cart
router.post('/user/add-to-cart',jwtMiddleware,cartController.addToCart)

//get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//delete cart 
router.delete('/remove-cart/:id/item',jwtMiddleware,cartController.removeCartItem)

//cart increment
router.get('/:id/increment-cart',jwtMiddleware,cartController.incrementCartItem)

//cart decrement
router.get('/:id/decrement-cart',jwtMiddleware,cartController.decrementCartItem)

//cartall empty
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)


module.exports = router 