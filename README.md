## Što je potrebno za pokretanje aplikacije
Instalirati NodeJS <br />
MongoDB baza na MongoDB Atlas <br />

## MongoDB ATLAS
[Kako kreirati cluster i bazu u MongoDB atlas je na ovom linku](https://www.youtube.com/watch?v=esKNjzDZItQ&ab_channel=JRACADEMY) <br />

## Povezivanje NodeJS backend-a s bazom
Kreirajuci cluster sa username i password postoji gumb connect koji nam da link za nasu bazu <br />
Dobiveni link unutar index.js datoteke postaviti umjesto mongodb-uri <br />

## Pokretanje projekta

node index.js

## Rute

## Forum

## GET all forums
127.0.0.1:5000/forums <br />

## GET all forums by id
127.0.0.1:5000/forums/:id <br />

## POST - create a new forum
127.0.0.1:5000/forums/:id <br>

## PUT - update forum
127.0.0.1:5000/forums/:id <br />

## DELETE forum 
127.0.0.1:5000/forums/:id <br />

<br />
<br />

## Posts

## GET all posts in forum
127.0.0.1:5000/forums/:forum_id/posts <br />

## GET a post in forum
127.0.0.1:5000/forums/:forum_id/posts/:id <br />

## POST - create a post in a forum
127.0.0.1:5000/forums/posts/:id <br />

## PUT - update post
127.0.0.1:5000/forums/posts/:id <br />

## DELETE forum 
127.0.0.1:5000/forums/posts/:id <br />

127.0.0.1:5000/forums/posts/:id/like <br />
127.0.0.1:5000/forums/posts/:id/dislike <br />

<br />
<br />

## Comments

## GET all posts in forum
127.0.0.1:5000/forums/posts/:post_id/comments <br />

## GET a post in forum
127.0.0.1:5000/forums/posts/comments/:id <br />

## POST - create a post in a forum
127.0.0.1:5000/forums/posts/:post_id/comments <br />

## PUT - update post
127.0.0.1:5000/forums/posts/comment:id <br />

## DELETE forum 
127.0.0.1:5000/forums/posts/comments/:id <br />

127.0.0.1:5000/forums/posts/:id/like <br />
127.0.0.1:5000/forums/posts/:id/dislike <br />
