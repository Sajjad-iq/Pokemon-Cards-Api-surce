import { useSelector } from 'react-redux'
import { INFO_CARD } from './InfoCard'
import { NAME_AND_RANK } from './Name&Rank'

export const POKEMON_INFO = () => {
    const { pokemonList, loading } = useSelector((state) => state.poke)
    console.log(pokemonList)

    return (
        <section className="w-100 mh-50 d-flex flex-column justify-content-between align-items-center ">
            {loading === true ? <h1>Loading...</h1> :
                <section className='w-100 h-100 d-flex flex-column justify-content-between align-items-center p-3'>
                    <NAME_AND_RANK
                        name={(pokemonList.name.toUpperCase())}
                        rank={`#0${pokemonList.id}`}
                    />
                    <INFO_CARD
                        Height={`${(pokemonList.height * 30.48 / 100).toFixed()} m`}
                        Abilities={pokemonList.abilities[0].ability.name}
                        Weight={`${pokemonList.weight / 10} kg`}
                        Experience={pokemonList.base_experience}
                        Type={pokemonList.types[0].type.name}
                    />
                </section >

            }
        </section>
    )
}
