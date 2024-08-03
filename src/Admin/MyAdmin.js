import {Route, useLocation} from "react-router-dom";
import * as PropTypes from "prop-types";
import MyApp from "../App";

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};
const MyAdmin = () => {
    useLocation();
    return (
        <>
            <p className="plp-page">This is an Admin page</p>

            <Switch>
                <Route path="/admin/index" component={MyAdmin}/>
                <Route path="/" component={MyApp}/>
            </Switch>
        </>
    );
}

export default MyAdmin;