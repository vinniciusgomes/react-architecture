/*
 * @vinniciusgomes
 * This file is for:
 * This file is responsible for validating whether the client will access private routes if logged in or if it will use public routes.
 */
import { Switch } from 'react-router-dom';

import Private from './Private';
import Public from './Public';

function Routes() {
  const user = false; // This variable is responsible for checking if the user is logged in.

  return <Switch>{user ? <Private /> : <Public />}</Switch>;
}

export default Routes;
