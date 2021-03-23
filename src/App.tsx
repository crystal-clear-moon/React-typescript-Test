import './App.css';
import { Menu, tabListBehavior, Tree } from '@fluentui/react-northstar';
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar';
import { LeftSideBar, ContentContainer } from './styles';
import { ReactMegaMenu } from "react-mega-menu";

interface MenuItem { key: string, content: string };

interface Type<SidebarItem extends {}> {
  id: string;
  title: string;
  items: SidebarItem[],
  field: new<T extends Type<any>>(type: T) => { };
}

const navItems:MenuItem[] = [
  {
    key: 'dashbord',
    content: 'Dashbord',
  },
  {
    key: 'settings',
    content: 'Settings',
  },
];

interface Item {
  id: string,
  title: string,
  items?: Item[],
}
interface Items {
  id: string,
  title: string,
  items?: Item[],
}
const sidebarItems: Item[] = [
  {
    id: 'tree-title-customization-item-1',
    title: 'one',
    items: [
      {
        id: 'tree-title-customization-item-2',
        title: 'one one',
        items: [
          {
            id: 'tree-title-customization-item-3',
            title: 'one one one',
          },
        ],
      },
    ],
  },
  {
    id: 'tree-title-customization-item-4',
    title: 'two',
    items: [
      {
        id: 'tree-title-customization-item-5',
        title: 'two one',
      },
    ],
  },
]


function App() {
  return (
    <div className="App">
      <Menu
        defaultActiveIndex={0}
        items={navItems}
        underlined
        primary
        accessibility={tabListBehavior}
        aria-label="Today's events"
      />
      <LeftSideBar>
        {/* <Tree aria-label="Custom title" items={sidebarItems} renderItemTitle={titleRenderer} /> */}
        <Tree
          defaultSelectedItemIds={['tree-item-122', 'tree-item-123']}
          selectable
          aria-label="Multi Select"
          items={sidebarItems}
        />
      </LeftSideBar>
      <ContentContainer>

      </ContentContainer>
    </div>
  );
}

export default App;
