import { NameIDInterface } from '@interfaces/Interfaces';
import React from 'react'

interface OptionsProps {
    options: number[]
    pokemonList: NameIDInterface[]
    handleSelect: (option: number) => void
}

const Options: React.FC<OptionsProps> = ({options, pokemonList, handleSelect}) => {
        return (
            <div>
                {
                     options.map((option) => (
                        <button key={option} type="button" onClick={() => handleSelect(option)}>
                          {pokemonList[option].name}
                        </button>
                      ))
                }
            </div>
        );
}


export default Options