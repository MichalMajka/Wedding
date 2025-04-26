import Image from "next/image";
import React from "react";

export default function SpellIcon({name, className} : {name: string, className: string}) {
    return <div className={"relative aspect-6/5 "+ className}>
        <Image
            loading="eager"
            layout="fill"
            className="object-cover"
            src={`/images/spells/${name}.png`}
            alt={`Spell Image: ${name}`}
        />
    </div>
}