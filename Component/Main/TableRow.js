import React from 'react';


export default class TableRow extends React.Component {
    render() {
        return (
            <tr >
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
                <td>
                    <button onClick={this.props.editData} title={'Edit'} className={'btn btn-info'}><i className="fa fa-pencil" aria-hidden="true"/></button>
                    <button onClick={this.props.deleteData} title={'Delete'} className={'btn btn-danger'}><i className="fa fa-trash" aria-hidden="true"/></button>
                </td>
            </tr>
        );
    }
}