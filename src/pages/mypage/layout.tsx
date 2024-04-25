import {ReactElement} from "react";

export default function MyPageLayout({children}: { children: ReactElement | ReactElement[] }) {
    return (
        <div>
            <header className={"bg-green-400"}>
                <h1>My Page Layout</h1>
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