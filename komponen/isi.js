import Link from 'next/link'
import fetch from 'node-fetch'

function Isi (props){

    return (
        <div class = {props.div}>
        <li> <Link href= {props.link} as={props.as}><a><span> {props.text} </span> <figure class={props.figure_class}><img src={props.img}/><figcaption class={props.figcaption_class}><span> <strong>{props.judul}</strong><br/> <br/>{props.starting} <br/><strong>{props.harga} </strong><br/><br/> {props.tanggal} <br/> {props.jam} <br/> {props.tempat}</span></figcaption></figure></a></Link> </li></div>
    )
}

export default Isi;