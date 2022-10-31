import { POKEMON } from './Pokemon'
import { POKEMON_INFO } from './Pokemon_Info'

export const HOME = () => {
    return (
        <section className="flex-column h-100 d-flex pt-3 justify-content-center align-items-center">
            <POKEMON />
            <POKEMON_INFO />
        </section>
    )
}
