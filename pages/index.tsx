import Head from 'next/head'
import TodoList from '../components/TodoList'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>

      <div className="home">
        <UserList />
        <hr />
        <TodoList />
      </div>
    </>
  )
}
