import { Link, Outlet, useRoutes } from "react-router-dom"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Invoice from "./Components/invoice";
import Viewinvoice from "./Components/Viewinvoice";
import Layout from "./Components/Layout";
// import { Switch } from "@mui/material";
import  List  from "./Components/List";


const App = () => {
 const routes = useRoutes([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "invoice",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Invoice />,
          },
          {
          path: "list",
          element: <List />
        },
          {
            path: ":id",
            element: <Viewinvoice />,
          },
          
        ],
      },
    ],
  },
]);

  
  
  return routes
  //  (
  //   <Router>
  //     <Layout>
  //       <Switch>
  //         <Route path="/" exact component={Invoice} />
  //         <Route path="/invoice" exact component={Invoice} />
  //         <Route path="/invoice/:id" component={Viewinvoice} />
  //         <Route path="/list" component={List} />
  //       </Switch>
  //     </Layout>
  //   </Router>
  // );
}

export default App