import React from "react";
import { Link, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link className="link" to="/welcome">Home</Link>
      <Link className="link" to="/characters">Characters</Link>

      <Route path="/welcome" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </header>
  );
}
