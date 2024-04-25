import {ReactElement} from "react";

export default function MainLayout({children}: { children: ReactElement | ReactElement[] }) {
    return (
        <div>
            <header className={"bg-purple-500"}>
                <h1>My App</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>© 2021 My App</p>
            </footer>
        </div>
    )
}