import React, { lazy, Suspense } from "react"; // Must be imported for webpack to work
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

const Header = lazy(() => import("HeaderApp/Header"));
const Button = lazy(() => import("HeaderApp/Button"));

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <div className="container">
          Demo home page
          <Button text="prop text check" colorScheme="red" />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
