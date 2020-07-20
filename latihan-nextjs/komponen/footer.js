function Setting3(props){
    return(
        <li class="list">{props.teks}</li>
    )
    }
function Setting4(props){
    return(
        <li><img src={props.pembayaran} /></li>
    )
    }

class Footer extends React.Component{
            render(){
                return(
                    <div class="bot">
                    <footer id="contact">
                        <div class="row">
                            <div class="col-4 col-s-12">
                                <p><b>HUBUNGI KAMI</b></p>
                                <ul>
                                    <Setting3 teks="082 345 678 910" />
                                    <Setting3 teks="email : GoTiket@gmail.com" />
                                </ul>
                            </div>

                            <div  class="col-4 col-s-12">
                                <p><b>KUNJUNGI KAMI</b></p>
                                <ul>
                                    <Setting3 teks="Jl. Ahmad Yani, Banyuwangi, Jawa Timur" />
                                </ul>
                            </div>
                            
                            <div  class="col-4 col-s-12">
                                <p><b>PEMBAYARAN</b></p>
                                <ul>
                                    <Setting4 pembayaran="/images/bayar1.png" />
                                    <Setting4 pembayaran="/images/bayar2.png" />
                                    <Setting4 pembayaran="/images/bayar3.png" />
                                    <Setting4 pembayaran="/images/bayar4.png" />
                                    <Setting4 pembayaran="/images/bayar5.png" />
                                </ul>
                            </div>

                            <div class="col-12 col-s-12">
                                <div class="col-6 col-s-12">
                                    <div class="teks5">
                                        <p>© GoTiket 2020. Hak Cipta Dilindungi</p>
                                    </div>
                                </div>
                                <div class="col-6 col-s-12">
                                    <div class="teks6">
                                        <p>Negara : Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer></div>
                )
            }
        }
        
        export default Footer;