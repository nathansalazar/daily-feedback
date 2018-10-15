import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Admin extends Component{

    state={
        feedback: []
    }

    getFeedback = () => {
        axios.get('/admin/feedback').then((response)=>{
            console.log('GET response:',response.data);
            //we sort the array so that the most recent feedback is on top,
            //then store it in local state
            this.setState({feedback: response.data.sort((a,b) => {return b.id-a.id})});
        }).then((error) => {
            console.log('Error in GET:', error);
        })
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    handleClick = (row) => {
        console.log(row.original.id);
        axios.delete(`/admin/feedback/${row.original.id}`).then((response) => {
            this.getFeedback();
        }).catch((error) => {
            console.log('Error in DELETE:',error);
        })
    }

    render(){
        return (
            <ReactTable 
            data={this.state.feedback}
            noDataText="No feedback has been submitted yet."
            columns={[{
                Header: 'Feeling',
                accessor: 'feeling'
            },{
                Header: 'Comprehension',
                accessor: 'understanding'
            },{
                Header: 'Support',
                accessor: 'support'
            },{
                Header: 'Comments',
                accessor: 'comments'
            },{
                Header: 'Delete',
                Cell: row => (<button onClick={()=>this.handleClick(row)}>Delete</button>)
            }]}
            className="-striped -highlight"
        />);
    }
}
// Cell: <i className="fa fa-trash" aria-hidden="true"></i>
export default Admin;