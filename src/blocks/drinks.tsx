'use client'

import Shelf from "@/blocks/spells/shelf";
import DrinkDetails, {IDrink} from "@/blocks/details_popup";
import React from "react";
import ShelfTop from "@/blocks/spells/shelfTop";
import ShelfBottom from "@/blocks/spells/shelfBottom";
import {Button} from "@headlessui/react";

export default function Drinks({value}: { value: string }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [drink, setDrink] = React.useState<IDrink | null>(null);
    const [activeCategory, setActiveCategory] = React.useState<string>("Słodki");
    const openDrink = (drink: IDrink) => {
        setDrink(drink)
        setIsOpen(true);
    }

    const drinksSplit = () => {
        const drinks = (JSON.parse(value) as IDrink[]);
        
        const categories = new Set(drinks.map(x => x.category));
        const byCategory = [...categories].map(x => {
            return {
                category : x,
                drinks : drinks.filter(drink => drink.category === x).sort((a,b) => a.power - b.power)
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
            <ShelfTop/>
            {
                drinksSplit().map((shelf, shelfIndex) => {
                    return <Shelf key={shelfIndex}>
                        {
                            shelf.map((drink, drinkIndex) => {
                                return <div
                                    className="bg-no-repeat bg-cover bg-[url(/images/backgrounds/scroll.png)] h-9/10 aspect-326/237 flex justify-center items-center"
                                    onClick={() => openDrink(drink)} key={drinkIndex}>
                                    <div
                                        className={"bg-no-repeat bg-cover bg-[url(/images/spells/summon_boat.png)] h-6/10  aspect-211/164"}></div>
                                </div>
                            })
                        }
                    </Shelf>
                })
            }
            <ShelfBottom>
                <Button
                    className="bg-no-repeat bg-cover bg-[url(/images/buttons/air-magic.png)] h-9/10 aspect-179/202 flex justify-center items-center"
                    onClick={() => setActiveCategory("Słodki")}
                />
                <Button
                    className="bg-no-repeat bg-cover bg-[url(/images/buttons/water-magic.png)] h-9/10 aspect-179/202 flex justify-center items-center"
                    onClick={() => setActiveCategory("Bezalkoholowy")}
                />
                <Button
                    className="bg-no-repeat bg-cover bg-[url(/images/buttons/fire-magic.png)] h-9/10 aspect-179/202 flex justify-center items-center"
                    onClick={() => setActiveCategory("Wytrawny")}
                />
                <Button
                    className="bg-no-repeat bg-cover bg-[url(/images/buttons/earth-magic.png)] h-9/10 aspect-179/202 flex justify-center items-center"
                    onClick={() => setActiveCategory("Kwaśny")}
                />
            </ShelfBottom>
        </div>
    </>
}