import { type Writable, writable } from "svelte/store";
import type { Monster } from "../routes/+page";

export const caughtMonsters: Writable<Monster[]> = writable([]);