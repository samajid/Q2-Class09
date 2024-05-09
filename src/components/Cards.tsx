

import React from "react";
import { Button } from "./ui/button";
import PurchaseButton from "./PurchaseButton";

interface IBook {
  id: number,
  name: string,
  type: string,
  available: boolean
}

async function Cards() {

  let res = await fetch("https://simple-books-api.glitch.me/books");
  
  let books: IBook[] = await res.json()
  
  

  return (
    <div>
      {books.map((book) => {
        return (
            <div className="border p-4 rounded m-4" key={book.id}>
              <h2 className="font-bold " >{book.name}</h2>
              <PurchaseButton />
            </div>
            
        );
      })}
    </div>
  )
    


  // let books = [
  //   {
  //     name: "Book 1",
  //     author: "Majid",
  //   },
  //   {
  //     name: "Book 2",
  //     author: "Ali",
  //   },
  //   {
  //     name: "Book 3",
  //     author: "Bilal",
  //   },
  // ];

  // return (
  //   <div className="flex gap-x-8 my-16">
  //     {data.map((book) => {
  //       return (
  //         <div className="h-[300px] w-36 border rounded-lg bg-red-500 flex-1 p-2">
  //           <h2 className="font-bold">{book.name}</h2>
  //           <p className="italic">{book.type}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );


}

export default Cards;
