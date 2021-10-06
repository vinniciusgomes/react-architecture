import { BrowserRouter } from "react-router-dom";

import Routes from "routes";
import GlobalStyles from "common/styles/global";

function Bootstrap() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default Bootstrap;
