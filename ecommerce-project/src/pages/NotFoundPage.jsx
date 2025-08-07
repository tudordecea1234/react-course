import { Header } from "../components/Header";

export function NotFoundPage({cartItems}) {
    return(
        <>
            <Header cart={cartItems}/>
            <title>Page Not Found</title>
            <div>404 Not found</div>
        </>
    )
}