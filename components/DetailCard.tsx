import { Exp, bayang} from '@/nType.d'
import {Box, HStack, VStack, Text, StackDivider, Tag, TagLabel, UnorderedList, ListItem} from '@chakra-ui/react'
import {FaCalendar} from 'react-icons/fa'
// import ReactHtmlParser from 'react-html-parser'

export default function DetailCard({title, icon, data}:{title:string, icon:React.ReactNode, data:Exp[]}){
    var parse = require('react-html-parser');
    return <>
    <Box bg='white' w='100%' shadow={bayang} px='16px'>
        <HStack py='16px' my='10px' >{icon} <Text fontSize='30px' color='brand.100' pl='18px' lineHeight='30px'>{title}</Text></HStack>
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing="1em" alignItems='start' justify='start' px='16px'>
        {data.map((item) =>{
            return (
                <VStack align='stretch' pb='16px' key={item.title}>
                <Text color='brand.100' fontSize='18px' fontWeight='bolder'>{item.title}</Text>
                <HStack color='brand.200'>
                    <FaCalendar color='#009688' /> 
                    <span>{item.dateStart} -</span> 
                    {item.dateEnd === 'Current' ? 
                        <Tag variant='solid' size='md' key='md' colorScheme='teal'>
                            <TagLabel>Current</TagLabel>
                        </Tag>
                    : <span>{item.dateEnd}</span>}
                </HStack>
                <Text color='brand.100'>
                    {item.content}
                </Text>
                </VStack>
            )
        })}
        

        </VStack>
    </Box></>
}