import React from 'react';
import axios from 'axios';
import JugeteItemList from '../components/JugeteItemList';

class Juguete extends React.Component {
    
        state = {
            persons: []
        }

        componentDidMount () {
            axios.get(`https://localhost:7147/api/juguete`)
                .then(res => {
                    const persons = res.data;
                    this.setState({ persons })
                })
        }

        render () {
            return (
               <div className="grid mb-8 md:mb-12 md:grid-cols-4 list bg-white">
                    {
                        this.state.persons
                            .map(person =>
                                <JugeteItemList nombre={person.nombre} precio={person.precio}></JugeteItemList>
                            )
                    }
                </div>
            )
        }
  
    }
export default Juguete;