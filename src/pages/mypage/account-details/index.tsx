import MyPageLayout from "@/pages/mypage/layout";
import {ReactElement} from "react";

function MyAccountDetails() {
    return (
        <main>
            <h1>My Account Details</h1>
            <p>This is my account details page</p>
        </main>
    )
}

MyAccountDetails.getLayout = (page: ReactElement) => {
    return (
        <MyPageLayout>
            {page}
        </MyPageLayout>
    )
}

export default MyAccountDetails;