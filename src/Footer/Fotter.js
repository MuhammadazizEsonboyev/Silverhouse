import logoj from "../img/logo2.png"
import "./Fotter.css"



function Fotter() {
    return (
        <div className="Fotter">
            <div class="lam">
                <img src={logoj} alt="jpg" ></img>
            </div>
            <div class="center">
                <p class="tel">Единый кол-центр (круглосуточно) </p>
               <a href="#!" class="numb"> +99890 900 00 00</a> 
            </div>
        </div>
    )


}


export default Fotter;