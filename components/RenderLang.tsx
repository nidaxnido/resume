import { Box, Text, Center} from '@chakra-ui/react'
import { Skill } from '@/nType'
export default function RenderLang({skill}:{skill:Skill}){
    return <>
                <Text>{skill.name}</Text>
                <Box  bg='brand.300' borderRadius={25}>
                    <Center w={skill.percent < 100 ? skill.percent/100 : '100%'} fontSize='12px' color='white' bg='brand.200' borderRadius={25} h='24px'></Center>
                </Box>
            </>
}