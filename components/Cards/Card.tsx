import React from 'react'
import useSWR from 'swr';
import {fetchPokemonData} from '@helpers/getPokemon'
import {GetPokemonDataInterface} from '@interfaces/Interfaces'
export interface CardProps {
    id: string
}

const Card: React.FC<CardProps> = ({id}) => {
    const { data } = useSWR<GetPokemonDataInterface>(`${+id}`, fetchPokemonData )
        return (
            <div>
                {data && <div>
                    <h1>{data.species.name}</h1>
                    <h1>{data.id}</h1>
                </div> }
                
            </div>
        );
}


export default Card