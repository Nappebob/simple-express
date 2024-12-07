const express=require('express');
const router=express.Router();
const book=require('../models/book_model');
const { response } = require('../app');

router.get('/', function(request, response){
    const data=book.getAll();
    response.send(data);
});

router.get('/:id', function(request, response){
    const data=book.getById(request.params.id);
    response.send(data);
});

router.post('/',function(request, response){
    const data=book.add(request.body);
    response.send(data);
});

router.put('/:id', function(request, response){
    const data=book.update(request.body, request.params.id);
    response.send(data);
});

router.delete('/:id', function(request, response){
    const data=book.delete(request.params.id);
    response.send(data);
});

module.exports=router;