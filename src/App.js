import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Main,About, Blog, MySkills, Work } from "./components";
import { LightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/skills" component={MySkills} />
          <Route path="/work" component={Work} />
          <Redirect from="*" to="/" />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
