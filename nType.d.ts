export interface  Skill {
    name:string,
    percent:number
  };
export interface Exp {
    title:string,
    dateStart:string,
    dateEnd:string,
    content:React.ReactNode
  }
export type Profile = {
    name : string,
    profession:string, 
    address:string,
    email:string,
    phone:string
}
export interface Porto{
  title : string,
  description:string
}
export const bayang = '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)';
  