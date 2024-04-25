import Image from "next/image";
import {Inter} from "next/font/google";
import MainLayout from "@/pages/layout";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <MainLayout>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <h1>This is the landing page</h1>

            </main>
        </MainLayout>
    );
}
