import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import TranslateForm from "./components/TranslateForm";

function App() {
  return (
    <>
      <Header />
      <Container className="m-top-3">
        <TranslateForm />
      </Container>
    </>
  );
}

export default App;
