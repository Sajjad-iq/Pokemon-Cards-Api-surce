import { useSelector } from 'react-redux'
import { IMG_CARD } from '../../../components/common/ImgCard'

export const POKEMON = () => {
  const { pokemonList, loading } = useSelector((state) => state.poke)
  return (
    <section className='d-flex justify-content-center align-items-center w-75 h-50 rounded border border-info '>
      {loading === true ? <h1>Loading...</h1> :
        <IMG_CARD src={pokemonList.sprites.other.dream_world.front_default} />
      }
    </section>
  )
}
