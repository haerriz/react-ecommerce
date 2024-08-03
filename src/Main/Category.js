import '../Styles/category.css';
import {NavLink, Outlet} from "react-router-dom";

const Mycategory = ["Home","PLP","T-Shirt", "Mugs", "Mobile Cases","cart","Login","Sign-up"];

const CategoryItems = {
    padding: '15px',
    color: 'purple'
};

export default function Category() {
    return (
        <div>
            <div className="App-category">
                {Mycategory.map((item, index) => (
                    <NavLink activeClassName="active" to={item} id={item} key={index} style={CategoryItems}>{item}
                    </NavLink>
                ))}
                <div style={{marginTop: '20px'}}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
