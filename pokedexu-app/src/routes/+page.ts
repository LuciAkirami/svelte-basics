export const load = ( async ({fetch}) => {
    interface IndexMonster {
        name: string,
        url: string,
    }

    interface Monster extends IndexMonster {
        id: string,
        image: string
    }

    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const json = await data.json()
    let monsters: Monster[] = json.results.map((monster: IndexMonster)=>{
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
    

    return {
        monsters: monsters
    }

}) 