import { useState } from "react";
import {
  Box,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Card from "./components/Card";
import Responsive from "./components/Responsive";
import Layout from "./components/Layout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Image
        w="250px"
        mx="auto"
        mt="2"
        mb="6"
        src={"https://fakeimg.pl/350x200/333333/fff"}
      />
      {/* <Box w={256} h="2xl" bg="red.200"></Box> */}
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: "none" }}>注册(form)</Tab>
          <Tab _focus={{ boxShadow: "none" }}>登录(form)</Tab>
          <Tab _focus={{ boxShadow: "none" }}>Card</Tab>
          <Tab _focus={{ boxShadow: "none" }}>響應式</Tab>
          <Tab _focus={{ boxShadow: "none" }}>側邊欄</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <Card />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Layout>
              <>123</>
            </Layout>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
