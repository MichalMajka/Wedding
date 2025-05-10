'use client'

import Shelf from "@/blocks/spells/shelf";
import DrinkDetails, {IDrink} from "@/blocks/details_popup";
import React from "react";
import ShelfTop from "@/blocks/spells/shelf_top";
import ShelfBottom from "@/blocks/spells/shelf_bottom";
import SpellIcon from "@/blocks/spells/spell_icon";
import MagicSchool from "@/blocks/spells/magic_school";
import CategoryButton from "@/blocks/spells/category_button";

export const banners: { [id: string]: string; } = {
    "Słodki": "air",
    "Wytrawny": "fire",
    "Kwaśny": "earth",
    "Bezalkoholowy": "water"
}

const categoryGallery: { key: string, name: string, src: string, alt: string }[] = [
    {
        "key": "Słodki",
        "name": "Słodkie",
        "src": "/images/buttons/air.png",
        "alt": "Artefakt: Kula Powietrza"
    },
    {
        "key": "Wytrawny",
        "name": "Wytrawne",
        "src": "/images/buttons/fire.png",
        "alt": "Artefakt: Kula Ognia"
    },
    {
        "key": "Kwaśny",
        "name": "Kwaśne",
        "src": "/images/buttons/earth.png",
        "alt": "Artefakt: Kula Ziemi"
    },
    {
        "key": "Bezalkoholowy",
        "name": "Bezalko",
        "src": "/images/buttons/water.png",
        "alt": "Artefakt: Kula Wody"
    }
]

export default function Drinks({value}: { value: string }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [drink, setDrink] = React.useState<IDrink | null>(null);
    const [activeCategory, setActiveCategory] = React.useState<string>(categoryGallery[0].key);
    const drinks = (JSON.parse(value) as IDrink[]);

    const openDrink = (drink: IDrink) => {
        setDrink(drink)
        setIsOpen(true);
    }

    const drinksSplit = () => {
        const categories = new Set(drinks.map(x => x.category));
        const byCategory = [...categories].map(x => {
            return {
                category: x,
                drinks: drinks.filter(drink => drink.category === x).sort((a, b) => a.power - b.power)
            }
        })
        const largestCategory = Math.max(...byCategory.map(x => x.drinks.length))
        const currentCategoryDrinks = byCategory.find(x => x.category == activeCategory)!.drinks
        const pageSize = currentCategoryDrinks.length > 10 ? 3 : 2
        return [...Array(Math.ceil(largestCategory / 3))].map(_ => currentCategoryDrinks.splice(0, pageSize));
    }

    return <>
        <DrinkDetails drink={drink} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="container">
            <ShelfTop>
                <MagicSchool name={banners[activeCategory]} className={"h-9/10"}/>
                <p className="text-left text-2xl md:text-4xl lg:text-5xl text-white">{categoryGallery.find(x => x.key === activeCategory)!.name}</p>
            </ShelfTop>
            {
                drinksSplit().map((shelf, shelfIndex) => {
                    return <Shelf key={shelfIndex}>
                        {
                            shelf.map((drink, drinkIndex) => {
                                return <div
                                    className="bg-no-repeat bg-cover bg-[url(/images/backgrounds/scroll.png)] h-9/10 aspect-326/237 flex justify-center items-center"
                                    onClick={() => openDrink(drink)} key={drinkIndex}>
                                    <SpellIcon
                                        name={drink.metadata.resources.image}
                                        className="h-11/14"
                                        type={banners[drink.category]}
                                        power={drink.power}
                                    />
                                </div>
                            })
                        }
                    </Shelf>
                })
            }
            <ShelfBottom>
                {
                    Object.values(categoryGallery).map((category, index) => {
                        return <CategoryButton
                            key={index}
                            onClick={() => setActiveCategory(category.key)}
                            name={category.name}
                            src={category.src}
                            alt={category.alt}
                            enlarged={activeCategory == category.key}
                        />
                    })
                }
            </ShelfBottom>
        </div>
    </>
}