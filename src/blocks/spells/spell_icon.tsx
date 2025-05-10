import Image from "next/image";
import React from "react";

export default function SpellIcon({name, className, type, power}: {
    name: string,
    className: string,
    type?: string,
    power?: number
}) {
    const getBorder = () => {
        if (!type) return "";
        if (power == undefined)
            return "";
        if (power > 0)
            return ` spell-border-${type}-${power}`;
        return ` spell-border-${type}-4`
    }
    const borderClass = getBorder()

    return <div className={"relative aspect-6/5 " + className + borderClass}>
        <Image
            loading="eager"
            layout="fill"
            className="object-cover"
            src={`/images/spells/${name}.png`}
            alt={`Spell Image: ${name}`}
        />
    </div>
}