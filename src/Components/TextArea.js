import { Textarea as ChakraTextArea} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

function TextArea(props){
    
    return(
        <ChakraTextArea
            bg="white"        
            w="full"
            h="20%"
            border="1px"
            my={4}
            borderRadius="none"
            {...props}
        ></ChakraTextArea>
    )

}

export default TextArea;