import {HStack, Text} from '@chakra-ui/react'
import { Profile } from '@/nType'
import {FaBriefcase, FaHome, FaEnvelope, FaPhone} from 'react-icons/fa'

export default function ProfileData({data}:{data:Profile}){
    return <>
    <HStack ><FaBriefcase color='#009688' /> <Text  pl='8px'>Designer</Text></HStack>
    <HStack ><FaHome color='#009688' /> <Text  pl='8px'>London, UK</Text></HStack>
    <HStack ><FaEnvelope color='#009688' /> <Text  pl='8px'>ex@mail.com</Text></HStack>
    <HStack ><FaPhone color='#009688' /> <Text  pl='8px'>081122334455</Text></HStack>
    </>
}