
import  Link  from 'next/link';

class Nav extends React.Component {
    state = {
        click: false
    }

    render(){
        return(
            <div class="pesan">
                <a  onClick={() => {this.setState({ click: !this.state.click })}}><button class="b_2">Pesan</button></a>
                {this.state.click ? <Isi_nav /> : null}
            </div>
        );
    }
}

class Isi_nav extends React.Component{
render(){
        return(
            <div class="kotak_himbauan">
                <div class="isi_himbauan">
                <h2>Pesanan akan segera diproses</h2><br/><h3>virtual tiket akan dikirimkan ke E-mail anda setelah pembayaran dikonfirmasi</h3>
                <br/> <div class="lanjut"><a href="/index"> lanjutkan</a></div> 
                </div>
            </div>
        );
    }

}
export default Nav;