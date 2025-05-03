'use client'

import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import SpellIcon from "@/blocks/spells/spell_icon";
import React, {useEffect} from "react";
import {DialogContent} from "next/dist/client/components/react-dev-overlay/ui/components/dialog";
import Image from "next/image";
import {banners} from "@/blocks/drinks";

export interface IDrink {
    name: {
        magic: string;
        mundane: string;
    },
    components: string[],
    category: string,
    power: number,
    metadata: {
        resources: {
            image: string
        }
    }
}

export default function DrinkDetails({drink, isOpen, setIsOpen}: {
    drink: IDrink | null,
    isOpen: boolean,
    setIsOpen: Function
}) {
    const [preview, setPreview] = React.useState<boolean>(false);
    useEffect(() => {
        setPreview(false)
    }, [drink])
    
    const title = () => {
        if (!drink)
            return null
        if (!preview)
            return <DialogTitle className="font-bold text-xl flex items-end justify-between mb-4 -mt-4">
                <p className={"w-5/10 z-5 align-text-bottom"}>
                    {drink.name.magic}
                </p>
                <div className={"w-full"}>
                    <SpellIcon
                        name={drink.metadata.resources.image}
                        className={"w-1/1 m-2"}
                        power={drink.power}
                        type={banners[drink.category]}
                    />
                </div>
            </DialogTitle>
        return <DialogTitle className="font-bold text-xl text-center mb-2">
                {drink.name.mundane}
        </DialogTitle>
    }

    const content = () => {
        if (!drink)
            return;
        if(!preview)
            return <DialogContent>
                <p className="font-bold">Komponenty:</p>
                <ul className="">
                    {
                        drink.components.map((component, index) => (
                            <li key={index} className="flex items-start justify-start w-full">
                                {component}
                            </li>
                        ))
                    }
                </ul>
            </DialogContent>
        return <DialogContent className="flex items-center justify-center">
                <Image
                    className={"image-blurred-edge"}
                    loading="eager"
                    width={200}
                    height={400}
                    src={`/images/drinks/${drink.metadata.resources.image}.png`}
                    alt={`Drink Photo: ${drink.metadata.resources.image}`}
                />
        </DialogContent>
    }

    return drink &&
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div
                className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[url(/images/backgrounds/void.png)]"
            >
                <DialogPanel
                    className="bg-[url(/images/backgrounds/popup/background.png)] popup-border p-4 letter tracking-[0.15rem] min-w-[250px] ">
                    {title()}
                    {content()}
                    <div className="flex justify-between items-center mt-10">
                        <button
                            className={"border-white border-1 p-2"}
                            onClick={() => setPreview(x => !x)}>
                            {preview ? "Powrót" : "Podgląd"}
                        </button>
                        <button
                            className={"border-white border-1 p-2"}
                            onClick={() => setIsOpen(false)}>
                            Zamknij
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
}