import {PropsWithChildren} from "react";

export default function ShelfTop(props: PropsWithChildren) {
    return <div className="bg-no-repeat bg-[url(/images/backgrounds/shelf_top.png)] items-end flex grow bg-cover justify-between pt-9 px-13 md:px-20 lg:px-25 lg:pt-20 pb-3 xl:px-30 xl:pb-7 aspect-2048/602">
        {props.children}
    </div>
}