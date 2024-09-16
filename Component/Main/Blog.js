import React from 'react';
import TableRow from './TableRow';
import Insert from "../Form/Insert";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },
                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ],
            ageLast: 4
        };
        this.insertData = this.insertData.bind(this);
    };


    insertData() {
        const name_ = $('#name').val();
        const age_ = $('#age').val();
        if (name_ !== '' || age_ !== '') {
            this.setState(
                {
                    data: this.state.data.concat({
                        "id": this.state.ageLast,
                        "name": name_,
                        "age": age_
                    }),
                    ageLast: this.state.ageLast += 1
                }
            )
        }
    };

    deleteData(id) {
        console.log(id);
        var finalArray = this.state.data.splice(id+1, 1);
        this.setState({
            data: finalArray
        })
    }

    editData(id) {

    }


    render() {
        return (
            <div>
                <table className={'table table-striped'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} deleteData={() => {this.deleteData(i)}} editData={() => {this.editData(i)}}/>)}
                    </tbody>
                </table>
                <Insert insertData={() => this.insertData()}/>
            </div>
        )
    }
}