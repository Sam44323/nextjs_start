import { GetStaticPaths, GetStaticProps } from "next"

//when you implement getStaticProps in a dynamic file i.e. [somevalue].tsx(for example) then you need to apply this property of getStaticPaths

export const getStaticProps: GetStaticProps = async context => {
  return {
    revalidate:1,
    props: {
      nicenumber: Math.random()
    }
  }
}

//getStaticProps runs at BUILD time. It does not run at runtime

//START
//localhost:3000/nice/hello -> store it on the disk
//localhost:3000/nice/world -> store it on the disk
//DONE
//any else route, give an error

/*
The companion life-cycle method getStaticPaths of getStaticProps lets us use the data we have at build-time to specify which dynamic routes we want to generate statically
*/

export const getStaticPaths: GetStaticPaths = async () => {

  //can access all the node stuffs

  return {
    paths: [{
      params: {
        name: 'hello'
      }
    },{
      params: {
        name: 'world'
      }
    }],
    fallback: false
  }
}

export default function Nice(props) {
  return <h1>This is a nice number: { props.nicenumber}</h1>
}