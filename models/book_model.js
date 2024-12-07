const bookData=[
    {'name' :"C++", 'author' :"Jim Smith"},
    {'name' :"Java", 'author' :"Lisa Jones"},
    {'name' :"MySQL", 'author' :"Bob Danieles"}
];

const book = {
    getAll: function(){
        return bookData;
    },
    getById: function(x){
        return bookData[x];
    },
    add: function(new_book){
        console.log(new_book);
        let name=new_book.name;
        let author=new_book.author;
        //seuraava tapaa ei tule käyttää oikean tietokannan yhteydessä
        //koska konkatenointi aiheuttaa SQL-injektion vaaran
        let sql='insert into book values('+name+','+author+')';
        return sql;
    },
    update:function(update_book, update_id){
        console.log(update_book);
        let name=update_book.name;
        let author=update_book.author;
        //seuraava tapaa ei tule käyttää oikean tietokannan yhteydessä
        //koska konkatenointi aiheuttaa SQL-injektion vaaran
        let sql='update book set name='+name+',author='+author+'where id_book='+update_id;
        return sql;
    },
    delete: function(delete_id){
        let sql='delete from book where id_book='+delete_id;
        return sql;
    }
}

module.exports=book;