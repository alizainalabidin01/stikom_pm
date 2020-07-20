import Link from 'next/link';

class Home extends React.Component{

    render(){
        return(
        <div class="primary">
        <header class= "nav">
            <Header/> 
        </header>
        <div class="navbar">
            <Nav/>
        </div>
    </div>
        )}
    }

  
class Header extends React.Component{

render(){
    return(
        <div class="header_left">
        <div class ="logo">
        <img src="/images/LOGO coba.png" /></div>
        </div>
    )

}}

class Nav extends React.Component {
        state = {
            click: false
        }

        render(){
            return(
                <div class="header_right">
                    <a class="navbar_tombol" onClick={() => {this.setState({ click: !this.state.click })}}>≡</a>
                    {this.state.click ? <Isi_nav /> : null}
                </div>
            );
        }
    }

  
    function Li2(props){
        return (
            <div class={props.div}>
            <li> <Link href= {props.link} ><a> {props.text} </a></Link> </li></div>
        )
    }
    function Select(props){
        return (
    
            <option value={props.value}>{props.text}</option>
        )
    }
    class Isi_nav extends React.Component{
        render(){
                return(
                    <nav>
                    <div class="navbar_isi">
                        <ul>
                                <Li2 link="/index" text="Home" />
                                <Li2 link="/proyek/bioskop" text="Bioskop" />
                                <Li2 link="/proyek/festival" text="Festival" />
                                <Li2 link="#contact" text="About"/>
                            </ul><select >
                            <Select value="" text="All"/>
                            <Select value="" text="Banyuwangi"/>
                            <Select value="" text="Jakarta"/>
                            <Select value="" text="Surabaya"/>
                            <Select value="" text="malang"/>
                            <Select value="" text="Jogja"/>
                            </select>
                            </div>
                    </nav>
                );
            }
    
    }

    export default Home;