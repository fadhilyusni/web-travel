import React from 'react'
import {render} from '@testing-library/react';
import Breadcrumb from "./index";
import {BrowserRouter as Router} from "react-router-dom";

const setup = () => {
    const breadcrumbList = [
        {pageTittle : "Home", pageHref:""},
        {pageTittle : "House Deatails", pageHref:""}
    ];
    const {container} = render (
        <Router>
            <Breadcrumb data={breadcrumbList}/>
        </Router>
    );
    const breadcrumb = container.querySelector (`.breadcrumb`)

    return {
        breadcrumb 
    };  
};

test ("should have ol with className .breadcrumb and have text home & House Details", () =>{
    const {breadcrumb} = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
})