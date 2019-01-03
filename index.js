import React from "react";

import Thead from "./thead";
import Tbody from "./tbody";

class Table extends React.Component{
    constructor(){
        super();
        this.values = [
            ['Tony stark', 'Iron man', 'Avengers'],
            ['Peter', 'Spider man', 'Avengers'],
            ['parker', 'Bat man', 'Justice league']
        ]

        this.headers = ['Name', 'Alias', 'Team'];
    }
    render(){
        return(
            <table>
                <Thead values={this.headers}/>
                <Tbody values={this.values}/>
            </table>
        )
    }
}

export default Table;