import { Button, Flex, Image } from "@chakra-ui/react";
import bgsunset from '../assets/sunset.jpg';

export default function Header(props){
    const {
        sidebar = false,
        title = "Title",
        btn1 = "Button 1",
        btn2 = "Button 2",

    } = props;
    return (
        <Flex 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        bgImage={bgsunset} 
        bgPosition="center" m={2} p={2}
        height="200px"
        width="1200px"
     //   marginBottom={20}
        
        >

            <h1>{title}</h1>
            {!sidebar ? (
                <div>
                <Button>{btn1}</Button>
                <Button>{btn2}</Button>
            </div>
            ) : (<>
                <Button>{btn1}</Button>
                <Button>{btn2}</Button>
                </>
            )}
            

        </Flex>
    )
}