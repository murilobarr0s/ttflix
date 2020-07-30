import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';

//ANOTAÇÕES (AULA 3)
// State: Quando vc tem muita coisa em sua aplicação, ele guarda os dados dos estados das ações   
// ele tem um valor, e uma função
//target no console.log = é o alvo do que a gente ta mudando...

// O React sempre recebe primeiro a informação que vc está querendo processar, e depois "renderiza" p/ a sua tela!

//PAROU NO MINUTO 20:55

function CadastroCategoria(){
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias,setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(key, value){
      setValues({
        ...values,
        [key]:value, // nome:'value'
      })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  
  //console.log('[nomeDaCategoria]', nomeDaCategoria);

    return(
      <PageDefault>
        <h1>Add Category: {values.nome}</h1>
       
        <form  onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
        
          setCategorias([
            ...categorias, // não sobrescrever, aproveitar a lista
            values
          ]);
          
          setValues(valoresIniciais);
          }}>

          <FormField
            label="Name"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          
          {/* <div>
            <label>
                  Description: 
                <textarea
                  type="textarea"
                  value = {values.descricao}
                  name="descricao"
                  onChange={handleChange}
                />
            </label>
          </div> */}

          <FormField
            label= "Description"
            type = "text"
            name = "descricao"
            value={values.descricao}
            onChange={handleChange}
          />
           
          {/* <div>
            <label>
                Color: 
                <input
                  type="color"
                  value = {values.cor}
                  name="cor"
                  onChange={handleChange}
                />
            </label>
          </div> */}

          <FormField
            label="Color"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <button>
             Add
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) =>{
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
          })}
        </ul>
        
        
      <Link to ="/">
        <br/> <br/> Go to home
      </Link>

      </PageDefault>
    )
}

export default CadastroCategoria;