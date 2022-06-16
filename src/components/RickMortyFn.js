
import React ,{ useState , useEffect , useRef} from 'react';

function RickMortyFn (){
    const [personajes , setPersonajes] = useState([]);
    const [pagina , setPagina] = useState(1);
    const subtitle = useRef();

    console.log(subtitle)


    useEffect(() => {
        console.log('%c se monto el componente', 'color:green');
        fetch('https://rickandmortyapi.com/api/character')
            .then (response => response.json())
            .then (data => {
                setPersonajes(data.results)
            })
            .catch(error => console.error(error))
        }, [])

    useEffect(() => {
        console.log('%cse actualizo el componente' ,'color : yellow')
        }, [personajes])

    useEffect(() => {
        return()=>
        console.log('%cse desmonto el componente' ,'color : red')
        }, [])
    const cargarMas = async () => {
                await setPagina(pagina + 1)
                console.log(pagina)
                console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`);
        
                fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
                    .then(response => response.json())
                    .then(data => {
                        setPersonajes(data.results)
                    })
                    
                    .catch(error => console.error(error))
            }
    const cambiarH2 = () => {
        subtitle.current.style.color = 'red'
        console.log(subtitle.current.innerText)
        subtitle.current.innerText= 'Lo cambiamos con useReff'
    }
    return (
        <div>
            <h2 ref={subtitle}>Soy el componente Rick and Morty Funcion</h2>
            <button onClick={cambiarH2}>Cambiar H2</button>
            <ul>
                { personajes.length === 0 && <p>Cargando</p>}
                {
                    personajes.map((personaje , i)=> {
                        return (
                            <li key={i}>
                                <h3>{personaje.name}</h3>
                                <img src={personaje.image} alt="avatar" width="150"/>
                            </li>
                        )
                    })
                }
                <button onClick={cargarMas}>Siguiente Pagina</button>
            </ul>
        </div>
    )
}
// class RickMortyClass extends Component {
//     constructor() {
//         super();
//         this.state = {
//             personajes: [],
//             pagina:1         
//         }
//     }

    // componentDidMount(){
        
    // }

//     componentDidUpdate(){
//      
//     }   
//     componentWillUnmount(){
//      console.log('%cse desmonto el componente' , 'color:azul')
//     } 

//     cargarMas = async () => {
//         await this.setState({ pagina: this.state.pagina + 1})
//         console.log(this.state.pagina)
//         console.log(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`);

//         fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`)
//          .then(response => response.json())
//          .then(data => {
//              this.setState({
//                  personajes: data.results
//              })
//          })
//          .catch(error => console.error(error))
//     }

//     render(){
        
//     }
// }

export default RickMortyFn