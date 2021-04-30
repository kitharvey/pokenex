import { PokemonDataInterface, PokemonSpeciesDataInterface } from '@interfaces/Interfaces';
import React from 'react'
import Case from 'case'
import { getFlavorSpeech } from '@helpers/GlobalFunctions';
import FlexBetween from './FlexBetween';

interface LeftCardProps {
    pokemondata: PokemonDataInterface
    speciesdata: PokemonSpeciesDataInterface
}

const LeftCard: React.FC<LeftCardProps> = ({pokemondata, speciesdata}) => {
        return (
            <div className="h-max  w-full p-4 bg-white">
            {speciesdata && pokemondata && (
              <div className="min-h-0 h-max w-full flex flex-col items-center justify-between lg:min-h-100">
                <div className="w-full h-max">
                  <p className="mr-auto text-xl font-bold">Bio</p>
                  <div className="h-auto mt-4 leading-tight">
                    {Case.sentence(getFlavorSpeech(speciesdata, pokemondata))}
                  </div>
        
                  <div className="flex flex-col w-full mt-4">
                    <FlexBetween
                      category="Genus:"
                      details={
                        <p>
                          {Case.capital(
                            speciesdata.genera.filter((entry) => entry.language.name === 'en')[0].genus
                          )}
                        </p>
                      }
                    />
                    <FlexBetween
                      category="Height:"
                      details={
                        <p>
                          {pokemondata.height / 10}m{' '}
                          <span>
                            ({Math.floor(((pokemondata.height / 10) * 39.37) / 12)}'
                            {(((pokemondata.height / 10) * 39.37) % 12).toFixed(1)}")
                          </span>
                        </p>
                      }
                    />
                    <FlexBetween
                      category="Weight:"
                      details={
                        <p>
                          {pokemondata.weight / 10}kg{' '}
                          <span>({((pokemondata.weight / 10) * 2.2).toFixed(1)} lbs)</span>
                        </p>
                      }
                    />
                    <FlexBetween
                      category="Abilities:"
                      details={
                        <div className="flex flex-col items-start">
                          {pokemondata.abilities.map((ability) => (
                            <p key={ability.ability.name}>
                              {ability.ability.name
                                .split('-')
                                .map((txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
                                .join(' ')}{' '}
                              <span className="text-xs">{ability.is_hidden && '(Hidden Ability)'}</span>{' '}
                            </p>
                          ))}
                        </div>
                      }
                    />
                  </div>
                </div>
        
                <div className="w-full h-max mt-8">
                  <p className="mr-auto text-xl font-bold">Training</p>
                  <div className="flex flex-col w-full mt-4">
                    <FlexBetween category="Base Exp:" details={<p>{pokemondata.base_experience}</p>} />
                    <FlexBetween category="Base Happiness:" details={<p>{speciesdata.base_happiness}</p>} />
                    <FlexBetween
                      category="Catch Rate:"
                      details={
                        <p>
                          {speciesdata.capture_rate}{' '}
                          <span className="text-xs">
                            ({((speciesdata.capture_rate / 255) * 100).toFixed(1)}%)
                          </span>
                        </p>
                      }
                    />
                    <FlexBetween category="Growth Rate:" details={<p>{speciesdata.growth_rate.name}</p>} />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
}


export default LeftCard