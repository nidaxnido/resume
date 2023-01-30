import {Flex} from '@chakra-ui/react'
export default function Layout({children}:{children : React.ReactNode}){
    return <main>
        <Flex  justifyContent='space-evenly' w='100%' h='100vh' fontFamily=''>
            {children}
        </Flex>
    </main>
}