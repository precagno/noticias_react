import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  constructor(props){
    super(props);
  
    this.state={
      noticias:[]
    };

    this.consultarNoticias=this.consultarNoticias.bind(this);
  }
  
  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias(categoria='general'){
    let url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=0472d27fc59b4b3590032b191a0764a0`;

    axios.get(url).then(res=>{
      const {articles} = res.data;
      this.setState({noticias:articles});
    });
  }

  render() {
    return (
      <Fragment>
        <Header titulo='Noticias REACT API' />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;