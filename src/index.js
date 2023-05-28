import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import { books } from "./books";
import "./index.css";

const Index = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((item) => {
          return <Book key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);

export default Index;
