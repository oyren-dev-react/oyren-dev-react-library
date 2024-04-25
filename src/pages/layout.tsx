import {ReactElement} from "react";
import NavBar from "@/components/navbar/NavBar";

export default function MainLayout({children}: { children: ReactElement | ReactElement[] }) {
    return (
        <div>
            <NavBar/>
            <main>
                {children}
            </main>
            <footer>
                <p>© 2021 My App</p>
            </footer>
        </div>
    )
}