import React from "react";
import Header from "./components/Navigation";
import Analytics from "./pages/Analytics";
import List from "./pages/List";
import Settings from "./pages/Settings";
import scrollIcon from "./assets/calendar.png";
import statsIcon from "./assets/stats.png";
import settingsIcon from "./assets/settings.png";

const tabs = [
    {
        label: "WeekLyst",
        component: <List />,
        icon: scrollIcon,
    },
    {
        label: "Analytics",
        component: <Analytics />,
        icon: statsIcon,
    },
    {
        label: "Settings",
        component: <Settings />,
        icon: settingsIcon,
    },
];

function App() {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
        <div className="App">
            <Header
                tabs={tabs.map((tab) => ({ label: tab.label, icon: tab.icon }))}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div
                style={{
                    backgroundColor: "var(--background-color)",
                    position: "relative",
                    padding: "20px",
                    fontSize:"var(--body-font-size)",
                }}
            >
                {tabs[activeTab].component}
            </div>
        </div>
    );
}

export default App;
