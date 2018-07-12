import React, { Component } from 'react';
import Item from './item';
import SearchBar from './searchBar';
import DetailedItem from './detailedItem';

class Items extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            selectedItem:undefined
        }
    }

    componentWillMount(){
        this.search('');
    }

    showModal=(item)=>{
        // console.log(item)
        this.setState({selectedItem:item})
    }

    search = (search) => {
        let output;
        
        if(this.props.items){
            // console.log(this.props.users);
            output = this.props.items.map(item =>{
                if(search==''){
                    return (<Item click={this.showModal} key={item.id} item={item}/>)
                } else{
                    if(item.nome.toLowerCase().includes(search.toLowerCase())){
                        return (<Item click={this.showModal} key={item.id} item={item}/>)
                    }
                }
            });
            this.setState({items:output});
        // console.log(usuario);
        }
    }

    
    render() {
        console.log(this.state.selectedItem)
        if(this.state.selectedItem){
            return(
                <div className="Items  col-10 mx-auto">    
                    <DetailedItem anular={this.showModal} item={this.state.selectedItem}/>
                </div>
            );
        } else {
        
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
}

export default Items;