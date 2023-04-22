import React, { Component} from 'react'
import { Table } from './Table';
import { Form } from './Form';



// const initialDB = [{
//     order: 1,
//     title: "super",
//     description: "comprar pan",
//     deadLine: 15 / 5 / 2023
// },
// {
//     order: 2,
//     title: "reunion",
//     description: "reunion cafe martinez a las 17",
//     deadLine: 15 / 5 / 2023
// },
// {
//     order: 1,
//     title: "Proyecto react",
//     description: "entrega proyecto react para global learning",
//     deadLine: 15 / 5 / 2023
// }
// ]

export default class Main extends Component {

    

    render() {
        
        return (
            <main>
                <Form/>

                <Table  />

            </main>
        )
    }
}

