import Drinks from "@/blocks/drinks"
import drinks from "./list"

export default function DrinksPage() {
    
    return <Drinks value={JSON.stringify(drinks)} />
}