import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Loader from '../pages/components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
   <button onClick={() => toast.success('Hello Toast')}>
Prueba de Toast   </button>
    </div>
  )
}
