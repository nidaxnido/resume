import { Exp, bayang, Porto} from '@/nType.d'
import {CardBody, Heading, Stack, Image, Flex, Box, HStack, VStack, Text, StackDivider, Tag, TagLabel, UnorderedList, ListItem, Card} from '@chakra-ui/react'
import {FaCalendar} from 'react-icons/fa'
// import ReactHtmlParser from 'react-html-parser'

export default function PortoCard({title, icon, data}:{title:string, icon:React.ReactNode, data:Porto[]}){
    var parse = require('react-html-parser');
    return <>
    <Box bg='white' w='100%' shadow={bayang} px='16px'>
        <HStack py='16px' my='10px' >{icon} <Text fontSize='30px' color='brand.100' pl='18px' lineHeight='30px'>{title}</Text></HStack>
        <Flex justify='space-between' align='center' w='100%' wrap='wrap'>
        {data.map((item) =>{
            return (
                <Card maxW='sm' key={item.title} m={2} bg='brand.300' >
                    <CardBody>
                        <Image src={`/images/${item.title}.jpg`} w='sm' borderRadius='lg' />
                        <Stack bg='white' mt={3} borderRadius='md' p={2}>
                            <Heading color='brand.200'  size="md">{item.title}</Heading>
                            <Text color='brand.100'>{item.description}</Text>
                        </Stack>
                    </CardBody>
                </Card>
            )
        })}
        

        </Flex>
    </Box></>
}