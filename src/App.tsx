import { useContext } from "react";
import "./styles/global.css";
import "./styles/scss/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HeadingCtx } from "./contexts/HeadingCtx";
import { Main } from "./components/shared/Main";
import { Heading } from "./components/shared/Heading";
import { HomePage } from "./components/app/common/home-page";
import { GameStyle } from "./components/app/common/game-style";
import { ErrorElement } from "./components/common/error-element";
import { GameSpot } from "./components/app/common/gamespot";
import { Rules } from "./components/app/common/rules";

function App() {
  const heading = useContext(HeadingCtx);
  return (
    <Router>
      <HeadingCtx value={heading}>
        <Main pageHasH1={false}>
          <Heading className="sr-only">Rock paper scissors App</Heading>
        </Main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/game">
            <Route index element={<GameStyle />} />
            <Route path=":game" element={<GameSpot />}>
              <Route path="rules" element={<Rules />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <ErrorElement
                error={new Error("404 | Page not found")}
                reset={() => {}}
              />
            }
          />
        </Routes>
      </HeadingCtx>
    </Router>
  );
}

export default App;
