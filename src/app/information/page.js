import Card from "@/components/card";
import SideBar from "@/components/sidebar";

const Information = () => {
    return (
        <SideBar component={<Card title={"Hello"} description={"User"}/>}/>
    )
}

export default Information;