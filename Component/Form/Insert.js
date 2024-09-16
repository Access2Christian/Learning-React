import React from 'react';


export default class Insert extends React.Component{

    render() {
        return(
            <div>
                <div className={'row'}>
                    <div className={'col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'}>
                        <div className={'col-sm-6 col-md-6'}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="name" className="form-control" id="name"/>
                            </div>
                        </div>
                        <div className={'col-sm-6 col-md-6'}>
                            <div className="form-group">
                                <label htmlFor="age">Age:</label>
                                <input type="age" className="form-control" id="age"/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'}>
                        <button onClick={this.props.insertData} className="btn btn-default">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}