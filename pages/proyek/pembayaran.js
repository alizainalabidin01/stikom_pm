
import Link from 'next/link';
import Nav from '../../komponen/end';



    class Pembayaran extends React.Component{
    render(){
        return(
                <div class="bayar">
                <center>
                <div class="form">
                    <div class="input_text">
                        <span>Nama</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="input_text">
                        <span>E-mail</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="input_text">
                        <span>Jumlah Tiket</span><br/>
                        <input type="number"/>
                    </div>
                    <div class="select">
                        <span>Pembayaran</span><br/>
                        <select class="type_bayar">
                            <option value="">BCA</option>
                            <option value="">BRI</option>
                            <option value="">BNI</option>
                            <option value="">MANDIRI</option>
                            <option value="">BANK JATIM</option>
                        </select>
                    </div>
                    <div class="input_button">
                    <div class="cancel">
                       <Link href="/index"><a><button class="b_1">Cancel</button></a></Link></div>
                       <Nav/>
                    </div>
                </div></center>
                </div>  
            )
        }
        }


        export default Pembayaran;