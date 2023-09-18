import  React  from "react";
import   "../styles/components/pages/HomePage.css";
const HomePage = (props)=> {
    return (
<main className="holder">
<div className="homeimg">
<img src="images/peyoteasesino3.jpg" alt=""/>
</div>

<div className="columnas">
<div className="bienvenidos"> 
<h2>Bienvenidos </h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos animi delectus, blanditiis doloremque debitis? Debitis, neque. Maxime cum soluta saepe! Id ducimus consectetur incidunt at odio omnis iusto facere.</p>
</div>
<div className="testimonios">
<h2>Testimonios</h2>
<div className="testimonio">
<span class="cita">Excelente</span>
<span class="autor">Carlitos</span>
</div>
</div>
</div>
</main>
    )
   
}

export default HomePage;