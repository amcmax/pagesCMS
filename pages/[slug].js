import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import SinglePage from '../components/SinglePage';
import { useRouter } from 'next/router'

export default function Page( { id } ) {
  return <SinglePage />;
}