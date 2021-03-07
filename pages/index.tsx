//STYLED-JSX

function Heading(props) {
  return <div>
    <h1>{props.heading}</h1>
    <style jsx>
      {`
        h1{
          color: red
        }
      `}
    </style>
  </div>
}

export default function Home(){
  return <div>
   <Heading heading="This is the best!"/>
  <h1>This is another heading!</h1>
 </div>
} 