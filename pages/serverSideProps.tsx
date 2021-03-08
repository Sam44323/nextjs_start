import { GetServerSideProps } from "next"

//called always on every page request. EVEN ON PRODUCTION
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      text: 'GetServerSideProps'
    }
  }
}

export default function ServerSide(props) {
  return <h1>This is the componen that uses { props.text}</h1>
}