import { Box, VStack} from '@chakra-ui/react'
export default function MainContent({children}:{children : React.ReactNode}){
    return <Box w='66.66%' h='100vh'  p='16px' pl='8px'>
    <VStack spacing={4}>
        {children}
        </VStack>
        </Box>
}