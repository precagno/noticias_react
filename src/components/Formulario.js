import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state={
        categoria:''
    };

    categorias=[
        {id:1,valor:"general",etiqueta:"General"},
        {id:2,valor:"entertainment",etiqueta:"Entretenimiento"},
        {id:3,valor:"health",etiqueta:"Salud"},
        {id:4,valor:"science",etiqueta:"Ciencia"},
        {id:5,valor:"sports",etiqueta:"Deportes"},
        {id:6,valor:"technology",etiqueta:"Tecnología"},
    ];

    componentDidMount(){
        const {valor}=this.categorias[0];

        this.setState({
            categoria:valor
        });
    }
    
    handleChange=cat=>{
        // Modifico el state
        const categoriaElegida=cat.target.value;
        this.setState({categoria:categoriaElegida},()=>{
            // Pasarlo a la página principal para que haga la consulta
            this.props.consultarNoticias(categoriaElegida);
        });
    }

    render() {

        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h1>Encontrá noticias por categoría</h1>
                    </form>
                    <div className="input-field col s12 m8 offset-m2">
                        <select onChange={this.handleChange}>
                            {this.categorias.map(categoria=>(
                                <option key={categoria.id} value={categoria.valor}>{categoria.etiqueta}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
            </div>
        );
    }
}

Formulario.propTypes={
    consultarNoticias:PropTypes.func.isRequired
};

export default Formulario;