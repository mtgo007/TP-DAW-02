import React, { Component } from 'react';
import Item from './item';
import SearchBar from './searchBar';

class Items extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentWillMount(){
        this.search('');
    }

    search = (search) => {
        let output;
        if(this.props.items){
            // console.log(this.props.users);
            output = this.props.items.map(item =>{
                if(search==''){
                    return (<Item key={item.id} item={item}/>)
                } else{
                    if(item.nome.toLowerCase().includes(search.toLowerCase())){
                        return (<Item key={item.id} item={item}/>)
                    }
                }
            });
            this.setState({items:output});
        // console.log(usuario);
        }
    }

    
    render() {
        
        return (
        <div className="Items  col-10 mx-auto">    
                <SearchBar search={this.search} />
            <div  className=" row">
                {this.state.items}
            </div>
        </div>
    );
  }
}

export default Items;