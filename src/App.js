// import React from "react";
// import Jumbotron from "./components/jumbotron";
// import jumboData from "./fixtures/jumbo";

// function App() {
//   return (
//     <Jumbotron.Container>
//       {jumboData.map((item) => (
//         <Jumbotron key={item.id} direction={item.direction}>
//           <Jumbotron.Pane>
//             <Jumbotron.Title>{item.title}</Jumbotron.Title>
//             <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
//           </Jumbotron.Pane>

//           <Jumbotron.Image src={item.image} alt={item.alt} />
//         </Jumbotron>
//       ))}
//     </Jumbotron.Container>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
