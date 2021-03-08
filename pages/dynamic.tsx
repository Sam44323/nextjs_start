import { GetStaticProps } from "next"
import fs from 'fs';
import path from 'path';

//before NEXT.JS executes your component, this getStaticProps is executed on server, takes the props from the returning object and inject that as props in your component. 

//This function is mostly uses for data fetching before in the component from any api or other thing, before the component is rendered in the DOM

export const getStaticProps: GetStaticProps = async context => {
  const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf-8')
  return {
    props: {
      myFavNumber: txt,
    }
  }
}

export default function Dynamic(props) {
  return <h1>{props.myFavNumber}</h1>
}