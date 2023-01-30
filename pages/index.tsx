
import Image from 'next/image'
import { Content, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Skill, Exp, Profile } from '@/nType'
import Layout from '@/components/Layout'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import DetailCard from '@/components/DetailCard'
import {FaSuitcase, FaCertificate} from 'react-icons/fa'
import exp from 'constants'
import {Text, UnorderedList, ListItem} from '@chakra-ui/react'
// import {ReactHtmlParser} from 'react-html-parser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const profile : Profile = {
      name : 'Nida',
      profession: 'Developer',
      address : 'Gresik, Indonesia',
      email:'niad0704@gmail.com',
      phone : '(+62)812-3209-2726'
    };
    
    const skills:Skill[] = [
        {
            name:'PHP',
          percent:90
        },
        {
            name:'JavaScript',
          percent:80
        },
        {
            name:'SQL',
            percent:90
        },
        {
            name:'React',
            percent:85
        },
        {
            name:'Next JS',
            percent:80
        },

    ];
    const langs:Skill[] = [
        {
            name:'Bahasa Indonesia',
          percent:100
        },
        {
            name:'English',
          percent:80
        },
        {
            name:'German',
            percent:10
        },
        
    ];
    const work:Exp[]=[
        {
            title:'Web Developer / Morning lolry Enterprise',
            dateStart:'March 2020',
            dateEnd:'January 2023',
            content: <><Text>Responsibilities:</Text>
                        <UnorderedList pl='25px'>
                        <ListItem>Develop projects according to the requirements.</ListItem>
                        <ListItem>Bug fixing deployed projects.</ListItem>
                        <ListItem>Adding new features to existing projects.</ListItem>
                        <ListItem>Analyzing problems of an existing project with lots of data and slow processes.</ListItem>
                        <ListItem>Optimizing codes and queries for an existing project to produce faster process.</ListItem>
                        </UnorderedList></>
        }
    ];
    const edu:Exp[]=[
        {
            title:'Institute Teknologi Adhi Tama Surabaya',
            dateStart: '2016',
            dateEnd: '2020',
            content: 'Bachelor Degree of Computer Science'
        }
    ];
    
  return (
    <>
      <Header title="Nida's Resume" />
      <Layout>
        <Sidebar profile={profile} skills={skills} langs={langs} />
        <MainContent>
          <DetailCard title='Work Experience' icon={<FaSuitcase color='#009688' fontSize='30px' />} data={work} />
          <DetailCard title='Education' icon={<FaCertificate color='#009688' fontSize='30px' />} data={edu} />
        </MainContent>
      </Layout>
    </>
  )
}
