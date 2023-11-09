import {writable, readable, derived} from "svelte/store"

// we set the initial value of writable to 0
// this writable can be accessed and modified by any component
export const count = writable(0)

// readable store
// for a readable store we need to define the initial value(can be null), a "start"
// function that takes "set" as callback and returns a "stop" function

export const time = readable(new Date(),(set)=>{
    const interval = setInterval(()=>{
        set(new Date())
    },1000)

    return function stop() {
        clearInterval(interval)
    }
})

// derived store
// this store is derived from another store
const start = new Date()
export const elasped = derived (time,($time)=>{
    return Math.round(($time-start)/1000)
})

// or
// const start = new Date()
// export const elasped = derived (time,($time)=> return Math.round(($time-start)/1000))

// Custom Store
// we can define a store like below where it includes all the increment, decrement methods
function createCount() {
    // writable returns an object with three methods
    // here we are destructuring those methods
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
    // hence by doing the above, we are not exposing the "set" and "update" directly
}

export const anotherCounter = createCount()