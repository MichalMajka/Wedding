import Image from "next/image";
import React from "react";

export default function MagicSchool({name, className} : {name: string, className: string}) {
    return <div className={"relative aspect-160/68 "+ className}>
        <Image
            loading="eager"
            layout="fill"
            className="object-cover"
            src={`/images/banners/${name}.gif`}
            alt={`Banner Image: ${name}`}
        />
    </div>
}