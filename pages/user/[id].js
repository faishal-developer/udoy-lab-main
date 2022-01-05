import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

const UserDetails = ({ user }) => {
    const router = useRouter()
    const { id } = router.query;

    console.log('from page/id', user);
    return (
        <div>
            <Head>
                <title>{user.name}</title>
            </Head>
            <h3>THis is for dynamic page id = {id}</h3>
            <h3>Name : {user.name}</h3>
            <h3>User name : {user.username}</h3>
            <p>Phone : {user.phone}</p>
        </div>
    )
}

export default UserDetails;

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }))

    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()

    // Pass post data to the page via props
    return { props: { user } }
}
