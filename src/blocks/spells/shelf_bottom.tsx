import {PropsWithChildren} from "react";

export default function ShelfBottom(props: PropsWithChildren) {
    return <div className="bg-no-repeat bg-[url(/images/backgrounds/shelf_bottom.png)] items-end flex grow bg-cover justify-around px-6 pb-10 lg:pb-20 lg:px-20 aspect-2048/551">
        {props.children}
    </div>
}