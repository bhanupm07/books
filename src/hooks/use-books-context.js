import React from "react";
import BooksContext from "../context/books";

export default function useBooksContext() {
  return React.useContext(BooksContext);
}
