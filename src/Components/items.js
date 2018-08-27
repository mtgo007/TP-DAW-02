import React, { Component } from 'react';
import Item from './item';
import SearchBar from './searchBar';
import DetailedItem from './detailedItem';
let temp =[];

class Items extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            selectedItem:undefined,
            output:undefined,
            tipos:[],
            action:'',
            loading:"background-loading"
        }

       
    }

    handleTipos = (tipos) =>{
        this.setState({tipos:tipos})
    }

    componentWillMount(){
        this.search(-1);
        
        let atual = this;
        let data = [];
        fetch('/api/v1/stationSells', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${this.props.token}`
          }
        })
          .then(res => res.json())
          .then(res => {
              data = res.data
              console.log(data)
            let result =[];
            if(this.props.tipo.localeCompare('station')==0){
                this.setState({action:"Visualizar"});
                for(let item of data){
                    if(item.station.link == `/api/v1/user/station/${this.props.id}`){
                        result.push(item);
                    }
                }
            } else {
                this.setState({action:"Comprar"});
            }
            if(this.props.tipo.localeCompare('station')==0){
                this.setState({items:result}, ()=>{
                    this.search(-1);
                });
            } else {
                this.setState({items:data}, ()=>{
                    this.search(-1);
                });
            }
            this.setState({loading:""})
          })
          .catch(e => console.log(e))
        
    }

    detailed=(item)=>{
        // console.log(item)
        this.setState({selectedItem:item})
    }

    setTipos=(arr)=>{
        this.setState({tipos:arr});
    }

    search = (search) => {
        temp = [];
        console.log("search: "+search)
        this.props.setTipos(this.state.tipos);
        this.setState({output:undefined})

        for(let element of this.state.items){
            console.log("search: "+search)
            if(search===-1){
                 temp.push((<Item action={this.state.action} tipo={element.type.link} tipos={this.state.tipos} key={element.id} tipos={this.state.tipos} click={this.click}  item={element}/>))
                //  output.push('oi');
                
            } else{
                let indice = parseInt(element.type.link.replace('/api/v1/types/',""))-1;
                console.log({"indice":parseInt(indice),"search":search})
                if(search == parseInt(indice)){
                    temp.push((<Item action={this.state.action} tipo={element.type.link} tipos={this.state.tipos} key={element.id} click={this.click}  item={element}/>))
                }
            }
            console.log(temp);
            this.setState({output:temp});
        }
    }

    click=(item, id)=>{
        this.setState({selectedItem:item})
        if(id){
            let arr = this.state.items;
            for(let element of this.state.items){
                if(element.id==id){
                    let index = this.state.items.indexOf(element);
                    arr.splice(index,1);
                    console.log({index})
                }
            }
            this.setState({items:arr});
        }
    }
    
    render() {
        if(this.state.selectedItem){
            return(
                <div className="Items  col-10 mx-auto">    
                    <DetailedItem action={this.state.action} tipos={this.state.tipos} anular={this.click} userId={this.props.id} item={this.state.selectedItem} navigate={this.click} token={this.props.token} userTipo={this.props.tipo}/>
                </div>
            );
        } else {
        
            return (
                <div className={`Items ${this.state.loading} col-10 mx-auto`}>    
                    <SearchBar token={this.props.token} handleTipos={this.handleTipos} search={this.search} setTipos={this.setTipos}/>
                    <div  className=" row">
                        {this.state.output}
                    </div>
                </div>
            );
        }
  }
}

export default Items;