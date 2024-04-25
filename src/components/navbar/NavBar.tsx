import NavBarItem from "@/components/navbar/NavBarItem";
import {FaHome} from "react-icons/fa";
import {BiExit} from "react-icons/bi";
import {FaPerson} from "react-icons/fa6";

export default function NavBar() {
    return (
        <NavBarContainer>
            <NavBarItem name={"Home"} href={"/"} icon={<FaHome/>}/>
            <NavBarItem name={"My Page"} href={"/mypage"} icon={<FaPerson/>}/>
            <NavBarItem name={"Login"} href={"/login"} icon={<BiExit/>}/>
        </NavBarContainer>
    )
}


// ------------------------

const NavBarContainer = ({children}: { children: React.ReactNode }) => {
    const NavbarGreeting = () => {
        return (
            <div>
                <h1 className={"p-2 m-3 text-blue-950 font-mono"}> Salam, oyren.dev</h1>
            </div>
        )
    }

    const NavBarItems = () => {
        return (
            <div>
                <ul className={"flex flex-row"}>
                    {children}
                </ul>
            </div>
        )
    }

    return (
        <div data-testid="navigation-items"
             className={"m-1 border-blue-400 border-2 rounded-b-2xl bg-blue-50 flex justify-between shadow-md mb-5 content-center"}>
            <NavbarGreeting/>
            <NavBarItems/>
        </div>
    )
}