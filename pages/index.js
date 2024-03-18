import Head from "next/head";
import React from "react";
import TodoListApp from "./components/TodoListApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List - React App</title>
      </Head>

      <TodoListApp />

    </>
  );
}
