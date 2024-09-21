import Tab from "./Tab";
import PersonalInfo from "./PersonalInfo";
import OrderSummary from "./OrderSummary";
import CardDetails from "./CardDetails";
import FAQ from "./FAQ";

export default function App() {
    return (
        <>
            <Tab />
            <PersonalInfo />
            <OrderSummary />
            <CardDetails />
            <FAQ />
        </>
    )
}
