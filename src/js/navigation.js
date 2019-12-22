import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="scroll">
      <p className="welcome">"Znajdź swoje przeznaczenie..."</p>
    </div>
  );
};
const Div1 = () => {
  return (
    <div className="scroll">
      <p>WSTĘP</p>
    </div>
  );
};
const Div2 = () => {
  return (
    <div className="scroll">
      <p>PODRĘCZNIKI</p>
    </div>
  );
};
const Div3 = () => {
  return (
    <div className="scroll">
      <p>GENERATORY</p>
    </div>
  );
};
const Div4 = () => {
  return (
    <div className="scroll">
      <p>VIDEO</p>
    </div>
  );
};
class Start1 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        this.setState({
          counter: 2
        });
      } else if (this.state.counter === 2) {
        clearInterval(this.interval);
        this.setState({
          counter: 3
        });
      }
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">Witaj poszukiwaczu przygód !!!</p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">Witaj poszukiwaczu przygód !!!</p>
          <p>
            Jeżeli zawędrowałeś w te strony z pewnością interesują Cię
            starożytne grimuary i nierozwikłane tajemnice.
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">Witaj poszukiwaczu przygód !!!</p>
          <p>
            Jeżeli zawędrowałeś w te strony z pewnością interesują Cię
            starożytne grimuary i nierozwikłane tajemnice.
          </p>
          <p>
            O ile jesteś adeptem tajemnej sztuki i dopiero rozpoczynasz swoją
            przygodę, to po przyswojeniu informacji kliknij ... "SESJA RPG".
          </p>
        </div>
      );
    }
    if (this.state.counter == 3) {
      return (
        <div className="scroll start">
          <p className="welcome">Witaj poszukiwaczu przygód !!!</p>
          <p>
            Jeżeli zawędrowałeś w te strony z pewnością interesują Cię
            starożytne grimuary i nierozwikłane tajemnice.
          </p>
          <p>
            O ile jesteś adeptem tajemnej sztuki i dopiero rozpoczynasz swoją
            przygodę, to po przyswojeniu informacji kliknij ... "SESJA RPG".
          </p>
          <p>
            W przypadku gdy studiowałeś już starożytne zwoje skorzystaj z
            powyższego menu w poszukiwaniu wiedzy.
          </p>
        </div>
      );
    }
  }
}
class Start2 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        this.setState({
          counter: 2
        });
      } else if (this.state.counter === 2) {
        clearInterval(this.interval);
        this.setState({
          counter: 3
        });
      }
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">Czym jest "Role Playing Game"</p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">Czym jest "Role Playing Game"</p>
          <p>
            Czy kiedykolwiek czytając książkę chciałeś podjąć inną decyzję niż
            jej główny bohater?
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">Czym jest "Role Playing Game"</p>
          <p>
            Czy kiedykolwiek czytając książkę chciałeś podjąć inną decyzję niż
            jej główny bohater?
          </p>
          <p>Czy oglądając film myślałeś o innym zakończeniu?</p>
        </div>
      );
    }
    if (this.state.counter == 3) {
      return (
        <div className="scroll start">
          <p className="welcome">Czym jest "Role Playing Game"</p>
          <p>
            Czy kiedykolwiek czytając książkę chciałeś podjąć inną decyzję niż
            jej główny bohater?
          </p>
          <p>Czy oglądając film myślałeś o innym zakończeniu?</p>
          <p>
            Czy zamiast być biernym obserwatorem wolałbyś sam wziąć sprawy w
            swoje ręce?
          </p>
        </div>
      );
    }
  }
}
class Start3 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        this.setState({
          counter: 2
        });
      } else if (this.state.counter === 2) {
        clearInterval(this.interval);
        this.setState({
          counter: 3
        });
      }
    }, 6000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">Wyobraź sobie trzy możliwe scenariusze:</p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">Wyobraź sobie trzy możliwe scenariusze:</p>
          <p>
            1. Odseparowana osada, w której mieszkasz cierpi klęskę głodu. Ty
            jako wódz musisz podjąć decyzję:
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">Wyobraź sobie trzy możliwe scenariusze:</p>
          <p>
            1. Odseparowana osada, w której mieszkasz cierpi klęskę głodu. Ty
            jako wódz musisz podjąć decyzję:
          </p>
          <p>
            a) czy zarżnąć resztkę waszego mizernego stada i próbować
            przeczekać?
          </p>
        </div>
      );
    }
    if (this.state.counter == 3) {
      return (
        <div className="scroll start">
          <p className="welcome">Wyobraź sobie trzy możliwe scenariusze:</p>
          <p>
            1. Odseparowana osada, w której mieszkasz cierpi klęskę głodu. Ty
            jako wódz musisz podjąć decyzję:
          </p>
          <p>
            a) czy zarżnąć resztkę waszego mizernego stada i próbować
            przeczekać?
          </p>
          <p>
            b) czy wysłać wojowników, aby splądrowali osadę innego plemienia?
          </p>
        </div>
      );
    }
  }
}
class Start4 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        clearInterval(this.interval);
        this.setState({
          counter: 2
        });
      }
    }, 8000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">
            2. We wraku starożytnego okrętu odnaleźliście dziwny moduł. Twoi
            technicy po ekspertyzie stwierdzają, że można będzie go użyć tylko
            jeden raz:
          </p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">
            2. We wraku starożytnego okrętu odnaleźliście dziwny moduł. Twoi
            technicy po ekspertyzie stwierdzają, że można będzie go użyć tylko
            jeden raz:
          </p>
          <p>
            a) czy użyjecie go jako kontrolowane i niemalże nieskończone źródło
            zasilania dla lokalnego systemu planetarnego?
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">
            2. We wraku starożytnego okrętu odnaleźliście dziwny moduł. Twoi
            technicy po ekspertyzie stwierdzają, że można będzie go użyć tylko
            jeden raz:
          </p>
          <p>
            a) czy użyjecie go jako kontrolowane i niemalże nieskończone źródło
            zasilania dla lokalnego systemu planetarnego?
          </p>
          <p>
            b) czy sprzedacie go opętanemu żądzą podboju gubernatorowi jako broń
            ostatecznej anihilacji?
          </p>
        </div>
      );
    }
  }
}
class Start5 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        clearInterval(this.interval);
        this.setState({
          counter: 2
        });
      }
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">
            3. Budzisz się jako spadkobierca największej na świecie korporacji
            medycznej:
          </p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">
            3. Budzisz się jako spadkobierca największej na świecie korporacji
            medycznej:
          </p>
          <p>
            a) czy użyjesz swoich wpływów, aby stworzyć wolny od chorób i biedy
            raj na ziemi?
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">
            3. Budzisz się jako spadkobierca największej na świecie korporacji
            medycznej:
          </p>
          <p>
            a) czy użyjesz swoich wpływów, aby stworzyć wolny od chorób i biedy
            raj na ziemi?
          </p>
          <p>
            b) czy będziesz opracowywał nowe choroby, aby zarabiać biliony na
            produkcji leków na nie?
          </p>
        </div>
      );
    }
  }
}

class Start6 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        this.setState({
          counter: 2
        });
      } else if (this.state.counter === 2) {
        clearInterval(this.interval);
        this.setState({
          counter: 3
        });
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Jak myślisz czego będziesz potrzebować by przeżyć dresz podobnych
            scenariuszy?
          </p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Jak myślisz czego będziesz potrzebować by przeżyć dresz podobnych
            scenariuszy?
          </p>
          <p>miecz, topór, karabin laserowy?</p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Jak myślisz czego będziesz potrzebować by przeżyć dresz podobnych
            scenariuszy?
          </p>
          <p>miecz, topór, karabin laserowy?</p>
          <p>NIE !!!</p>
        </div>
      );
    }
    if (this.state.counter == 3) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Jak myślisz czego będziesz potrzebować by przeżyć dresz podobnych
            scenariuszy?
          </p>
          <p>miecz, topór, karabin laserowy?</p>
          <p>NIE !!!</p>
          <p>
            Na początek wystarczy niewiele. Kilka kartek papieru, ołówki, kostki
            i wyobraźnia.
          </p>
        </div>
      );
    }
  }
}

class Start7 extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter === 0) {
        this.setState({
          counter: 1
        });
      } else if (this.state.counter === 1) {
        clearInterval(this.interval);
        this.setState({
          counter: 2
        });
      }
    }, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.counter === 0) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Mam nadzieje, że jeszcze bardziej zainteresowałeś się grami
            fabularnymi !
          </p>
        </div>
      );
    }
    if (this.state.counter == 1) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Mam nadzieje, że jeszcze bardziej zainteresowałeś się grami
            fabularnymi !
          </p>
          <p>
            w nawigacji masz wszystko czego potrzeba do rozpoczęcia własnej
            niezapomnianej przygody !
          </p>
        </div>
      );
    }
    if (this.state.counter == 2) {
      return (
        <div className="scroll start">
          <p className="welcome">
            Mam nadzieje, że jeszcze bardziej zainteresowałeś się grami
            fabularnymi !
          </p>
          <p>
            w nawigacji masz wszystko czego potrzeba do rozpoczęcia własnej
            niezapomnianej przygody !
          </p>
          <p>i ostatnia najważniejsza rada dla Ciebie...</p>
        </div>
      );
    }
  }
}

class Start8 extends React.Component {
  state = {
    letter: 1
  };

  componentDidMount() {
    const text = `"Przed wyruszeniem w drogę należy zebrać drużynę !"`;
    let counter = this.state.letter;

    this.interval = setInterval(() => {
      counter++;
      if (counter >= text.lenght) {
        clearInterval(this.interval);
      }
      this.setState({ letter: counter });
    }, 45);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const text = `"Przed wyruszeniem w drogę należy zebrać drużynę"`;
    return (
      <div className="scroll end">
        <p className="welcome cytat">{text.substr(0, this.state.letter)}</p>

        <p className="end">Piotr Fronczewski</p>
        <embed
          src="/src/audio/Fronczewski.mp3"
          width="0"
          height="0"
          border="0"
          volume="1"
        ></embed>
      </div>
    );
  }
}

class Baner extends React.Component {
  state = {
    to: "/Start1"
  };
  start = () => {
    this.setState({
      to: "/Start2"
    });
    if (this.state.to === "/Start2") {
      this.setState({
        to: "/Start3"
      });
    }
    if (this.state.to === "/Start3") {
      this.setState({
        to: "/Start4"
      });
    }
    if (this.state.to === "/Start4") {
      this.setState({
        to: "/Start5"
      });
    }
    if (this.state.to === "/Start5") {
      this.setState({
        to: "/Start6"
      });
    }
    if (this.state.to === "/Start6") {
      this.setState({
        to: "/Start7"
      });
    }
    if (this.state.to === "/Start7") {
      this.setState({
        to: "/Start8"
      });
    }
    if (this.state.to === "/Start8") {
      this.setState({
        to: "/Start8"
      });
    }
  };

  render() {
    return (
      <div className="baner">
        <ul>
          <li className="list__one">
            <Link to="/Div1">WSTĘP</Link>
          </li>
          <li className="list__second">
            <Link to="/Div2">PODRĘCZNIKI</Link>
          </li>
          <li className="list__three">
            <Link to="/Div3">GENERATORY</Link>
          </li>
          <li className="list__four">
            <Link to="/Div4">VIDEO</Link>
          </li>
        </ul>
        <ul className="start">
          <li>
            <Link to={this.state.to} onClick={this.start}>
              SESJA RPG
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <div className="rain"></div>
          <embed
            src="/src/audio/a.mp3"
            width="0"
            height="0"
            border="0"
            volume="1"
          ></embed>
          <embed
            src="/src/audio/b.mp3"
            width="0"
            height="0"
            border="0"
            volume="1"
          ></embed>
          <Baner />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/Div1" component={Div1} />
            <Route path="/Div2" component={Div2} />
            <Route path="/Div3" component={Div3} />
            <Route path="/Div4" component={Div4} />
            <Route path="/Start1" component={Start1} />
            <Route path="/Start2" component={Start2} />
            <Route path="/Start3" component={Start3} />
            <Route path="/Start4" component={Start4} />
            <Route path="/Start5" component={Start5} />
            <Route path="/Start6" component={Start6} />
            <Route path="/Start7" component={Start7} />
            <Route path="/Start8" component={Start8} />
          </Switch>
        </nav>
      </HashRouter>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <section>
        <Router />
      </section>
    );
  }
}

export default Navigation;
