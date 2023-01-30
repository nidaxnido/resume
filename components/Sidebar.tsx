import {Box, VStack, HStack, Divider} from '@chakra-ui/react'
import { Profile, Skill, bayang } from '.././nType.d';
import  ProfilePicture from '@/components/ProfilePicture'
import ProfileData from './ProfileData';
import SkillPart from './SkillPart';
import LangPart from './LangPart';

export default function Sidebar(
    {profile, skills, langs}: 
        {profile:Profile, skills : Skill[], langs : Skill[]}){
    return (
        <Box w='33.33%' h='100vh' p='16px' pr='8px'>
                <Box bg='white' w='100%' shadow={bayang}>
                    <ProfilePicture name={profile.name} />
                    <VStack spacing='1em' justify='left' align='left' px='16px' py='1em' color='brand.100'>
                        <ProfileData data={profile} />
                        <Divider />
                        <SkillPart data={skills} />
                        <LangPart data={langs} />
                    </VStack >
                </Box>
            </Box>
    );
}