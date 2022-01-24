import Navbar from '../components/Navbar'
import { Route, Switch } from 'react-router';
import routeInterface from "../interface/routeInterface";
import routes from '../config/routes';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                <LoadRoutes />
            </main>
            <Footer />
        </div>
    )
}

const LoadRoutes = () => {
    return (
        <Switch>
            {routes.map((route: routeInterface, index: number) => (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    );
};

export default Layout
