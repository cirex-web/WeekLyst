import React from 'react';
import Header, { Tab } from './components/Navigation';
import { Heading } from './components/Text';
import Analytics from './pages/Analytics';
import List from './pages/List';
import Settings from './pages/Settings';
import scrollIcon from "./assets/scroll.png";
import statsIcon from "./assets/stats.png";
import settingsIcon from "./assets/settings.png";
// console.log(analyticsIcon);
const tabs = [{
  "label": "WeekLyst",
  "component": <List />,
  "icon": scrollIcon
}, {
  "label": "Analytics",
  "component": <Analytics />,
  "icon": statsIcon

},
{
  "label": "Settings",
  "component": <Settings />,
  "icon": settingsIcon

}];

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="App">
      <Header>
        {tabs.map((tab, index) => (<Tab key={index} active={index === activeTab} icon={tab.icon} onClick={() => setActiveTab(index)}><Heading>{tab.label}</Heading></Tab>))}
      </Header>
      {tabs[activeTab].component}
    </div>
  );
}

export default App;
