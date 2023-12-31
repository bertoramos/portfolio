
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { setupIonicReact } from '@ionic/react';

setupIonicReact();

import Portfolio from './components/Portfolio';
import CV from './cv/CV';

const App = () => {
  return (
    <Router>
      {/* Utiliza el componente Switch para envolver tus rutas */}
      <Switch>
        {/* Define tus rutas dentro de Switch */}
        <Route path="/" exact component={Portfolio} />
        <Route path="/cv" component={CV} />
      </Switch>
    </Router>
  );
}

export default App;