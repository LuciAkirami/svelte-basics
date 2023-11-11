interface IndexMonster {
    name: string,
    url: string,
}

export interface Monster extends IndexMonster {
    id: string,
    image: string
}

export const load = ( async ({fetch, url}) => {
    let generationId = url.searchParams.get('generationId') || 'all';
    let monsters: Monster[] = []
    if(generationId ==='all') {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=901")
        const json = await data.json()
        monsters = json.results.map((monster: IndexMonster)=>{
            let splitUrl = monster.url.split("/")
            let id = splitUrl[splitUrl.length-2]
            // let image = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{i}.svg",`
            let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            return {
                name: monster.name,
                url: monster.url,
                id: id,
                image: image
            }
        })
    }
    else {
        const data = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}/`)
        // console.log(`https://pokeapi.co/api/v2/generation/${generationId}/`)
        const json = await data.json()
        monsters = json.pokemon_species.map((monster: IndexMonster)=>{
            let splitUrl = monster.url.split("/")
            let id = splitUrl[splitUrl.length-2]
            // let image = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{i}.svg",`
            let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            return {
                name: monster.name,
                url: monster.url,
                id: id,
                image: image
            }
        })
    }
    

    return {
        monsters
    }

}) 