import React from "react";
import * as Icon from "react-feather";
import logo from "../assets/Images/general/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <>
            {/* Start Footer */}
            <footer
                className="footer"
            >
                <div className="footer-py-30">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <div className="text-sm-start">
                                    <Link to="/" className="footer-logo">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-6 pt-2 pt-sm-0 mt-4 mt-sm-0">
                                <div className="text-center">
                                    <p className="mb-0">
                                        © {new Date().getFullYear()}Design with{" "}
                                        <i className="mdi mdi-heart text-danger"></i> by{" "}
                                        <a
                                            href="#"
                                            className="text-reset"
                                        >
                                            Muntather Jabbar
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-3 pt-2 pt-sm-0 mt-4 mt-sm-0">
                                <ul className="list-unstyled social-icon line-icon text-sm-end mb-0">
                                    <li className="list-inline-item mx-1 mb-0">
                                        <a to="#">
                                            <Icon.Facebook className="feather-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item mx-1 mb-0">
                                        <a to="#">
                                            <Icon.Instagram className="feather-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item mx-1 mb-0">
                                        <a to="#">
                                            <Icon.Twitter className="feather-icon" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item mx-1 mb-0">
                                        <a to="#">
                                            <Icon.Linkedin className="feather-icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>
    );
};

export default Footer;
