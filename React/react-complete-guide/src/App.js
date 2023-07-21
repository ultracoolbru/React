import { createTheme, NextUIProvider, Navbar, Text, Link, Button, Dropdown, Avatar, Spacer } from '@nextui-org/react';

//import logo from './logo.svg';
import './App.css';

import Expenses from "./components/expenses/Expenses";

function App() {
  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',

        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',

        // you can also create your own color
        myColor: '#1B181F'

        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  });

  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 6, 29) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 6, 29) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 6, 29) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 29) },
  ];

  return (
    <NextUIProvider theme={theme}>
      <Navbar isBordered variant="floating" lg>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Edward Whitehead
          </Text>
          <Spacer />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" text="ED" size="md" color="gradient" />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Avatar text="ED" size="md" color="gradient" />
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
      <Expenses expenses={expenses} />
    </NextUIProvider>
  );
}

export default App;
