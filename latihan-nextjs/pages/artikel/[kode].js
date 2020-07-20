import dummyData from '../../komponen/data.json';
import Layout from '../../layout/layouts';
import Pembayaran from './../proyek/pembayaran';

const Artikel = (props) => {
 return (
     <Layout>
         
<center>
 <div className="container">
 <p>{props.Jenis_tiket}</p>
 <h1 className="title">{props.judul} </h1>
 <p>{props.harga}</p> <br/>
 <p>{props.tanggal}</p> <br/>
 <p>{props.jam}</p> <br/>
 </div></center>
 <Pembayaran/>
 </Layout>
 );
}
export async function getStaticProps(context){
 // cari artikel berdasarkan kode yang dikirim melalui URL
 // alias parameter dynamic routing
 let kode = context.params.kode;
 let data = dummyData.find(x => x.judul == kode);
 // ambil judul & isi dari data hasil pencarian
 let { judul, harga, tanggal, jam, Jenis_tiket } = data;
 return {
 props : {
 // kirim judul & isi sebagai properti ke komponen utama
 judul, harga, tanggal, jam, Jenis_tiket
 }
 }
}
export async function getStaticPaths(){
    return {
    paths : dummyData.map(data => (
    {params : {kode : `${data.judul}`}}
    )),
    fallback : false
    }
}
export default Artikel;
