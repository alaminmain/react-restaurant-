import react from "react";
import { Component } from "react/cjs/react.production.min";
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand herf="/">My Resturant</NavbarBrand>
                </div>

            </Navbar>
        </div>
    );
}
export default Navigation;