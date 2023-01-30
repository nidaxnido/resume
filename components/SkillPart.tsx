import { Box, Text, Center, HStack, Heading} from '@chakra-ui/react'
import { Skill } from '@/nType'
import { FaAsterisk} from 'react-icons/fa'

function RenderSkill({skill}:{skill:Skill}){
    return <>
                <Text>{skill.name}</Text>
                <Box  bg='brand.300' borderRadius={25}>
                    <Center w={skill.percent/100} fontSize='12px' color='white' bg='brand.200' borderRadius={25}>{skill.percent}%</Center>
                </Box>
            </>
}

function SkillPart({data}:{data:Skill[]}){
    return <>
    <HStack ><FaAsterisk color='#009688' /> <Heading pl='8px' size='md'>Skills</Heading> </HStack>
                        {data.map((skill)=>{
                                return <RenderSkill key={skill.name} skill={skill} />
                            })
                        }
    </>
}
export default SkillPart;