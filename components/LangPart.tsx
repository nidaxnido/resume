import { Skill } from '@/nType'
import { HStack, Heading} from '@chakra-ui/react'
import RenderLang from './RenderLang'
import {FaGlobe} from 'react-icons/fa'
export default function LangPart({data}:{data:Skill[]}){
    return <>
    <HStack ><FaGlobe color='#009688' /> <Heading pl='8px' size='md'>Languages</Heading> </HStack>
    {data.map((skill)=>{
            return <RenderLang key={skill.name} skill={skill} />
        })
    }
    </>
}