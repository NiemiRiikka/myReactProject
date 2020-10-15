import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books =[
  {id: 1,
  img:  "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010__340.jpg",
  author: 'Tutorial 10 hours',
  title: 'Riikan Oppitunnit'
},
{id:2,
  img:  "https://cdn.pixabay.com/photo/2016/02/11/15/32/skull-1193784__340.jpg",
  author: 'Tutoria seems interesting',
  title: 'Keskiviikon hommia'
},
{id:3,
  img:  "https://cdn.pixabay.com/photo/2018/01/18/20/43/literature-3091212__340.jpg",
  author: 'Learning is fun',
  title: 'Lisätään vielä kirja'
},
{id:4,
  img:  "https://cdn.pixabay.com/photo/2017/01/30/10/03/book-2020460__340.jpg",
  author: 'Kuppi teetä ja hyvä kirja',
  title: 'Syksyn illan iloksi'
},
{id:5,
  img:  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__340.jpg",
  author: 'Kirjat sisustuksessa',
  title: 'Pirteät värit'
},
{id:6,
  img:  "https://cdn.pixabay.com/photo/2018/01/04/09/39/literature-3060241__340.jpg",
  author: 'Kirjat sisustuksessa',
  title: 'Sisusta kirjoilla'
},
];

 
function BookList() {
  return (
 <section className='booklist'>
  {books.map((book) =>{
    return (
      <Book key={book.id} {...book}></Book>
    );
  })}
 </section>
    );
}

const Book = ({img, title, author}) => {
  //const { img, title, author} =props;
 // console.log(props);
const clickHandler = (e) =>{
  console.log(e);
  console.log(e.target);
  alert('Hello World')
};
const complex = (author) =>{
console.log(author);
};

  return ( 
  <article className="book">
    <img src={img} alt=""/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Push</button>
    <button type="button" onClick={() => complex(author)
    }>
      Delete
      </button>
  </article>
  );
};


//const Greeting = () =>{
//  return React.createElement('h1',{}, 'hello world');
//};

ReactDom.render(<BookList />, document.getElementById('root'));