import logo from './logo.svg';
import './App.css';
import TextArea from './Components/TextArea';
import { Box,Grid,Text,Flex } from '@chakra-ui/react';
import Board from './Components/Board/Board';
import './Global/global.css'

function App() {
  return <div className='app'>
    <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>   
    <div className='app_outer'>
      <div className='app_boards'>
        <Board/>
        <Board/>
        <Board/>
      </div>
    </div>
    </div>  

}

export default App;


 // <Grid templateColumns="repeat(3, 20vw)"  gap={[4,8,12]} py={["10vh", "20vh"]}   px={["5vw", "10vw", "20vw"]}>
    //   <Box bg="gray.100" p={[2,4]} height="60vh" borderRadius="md" >
    //     <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> New </Text>
    //     <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 1" />
    //       <TextArea value="Board 2" />
    //     </Flex>
    //   </Box>
    //   <Box bg="gray.100" p={[2,4]} borderRadius="md">
    //     <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> In Progress </Text>
    //     <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 3" />
    //       <TextArea value="Board 4" /> 
    //     </Flex>
    //   </Box>
    //   <Box bg="gray.100" p={[2,4]} borderRadius="md">
    //   <Text fontSize={["sm", "md", "lg"]} fontWeight="semibold"> Complete </Text>
    //   <Flex direction="column" align="center" gap="4" my>
    //       <TextArea value="Board 5" />
    //       <TextArea value="Board 6" />
    //   </Flex>
    //   </Box>
    // </Grid>
