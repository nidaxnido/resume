import {Box, AspectRatio, Image, Tag, Heading, TagLabel} from '@chakra-ui/react'
export default function ProfilePicture({name}:{name:string}){
    return <Box pos='relative'>
    <AspectRatio maxH='600' ratio={1}>
        <Image src='/images/pp.jpg' w='100%' alt='Profile Picture'  />
    </AspectRatio>
    
    <Box pos='absolute' left='0' bottom='0'  >
        <Tag colorScheme='teal' variant='solid'><TagLabel color='white'>
            <Heading as='h2' m='16px'>{name}</Heading>
        </TagLabel></Tag>
    </Box>
</Box>
}