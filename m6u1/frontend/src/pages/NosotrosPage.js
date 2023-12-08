import  React  from "react";
import './NosotrosPage.css';

const NosotrosPage = (props)=> {
    return (
<main className="holder">
<div className="historia">
<h2>Historia </h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos animi delectus, blanditiis doloremque debitis? Debitis, neque. Maxime cum soluta saepe! Id ducimus consectetur incidunt at odio omnis iusto facere.</p>
</div>

<div className="staff">
<h2>Staff </h2>
<div className="personas">
<div className="persona">  
<img src="/my-react-app/public/images/santullo.jpg" alt="santullo"/>
<h5>Fernando Santullo </h5>
<h6>Voz </h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
</div>
<div className="persona">  
<img src="/my-react-app/public/images/casacuberta.jpg" alt="Carlos"/>
<h5>Carlos Casacuberta </h5>
<h6>Guitarra y voz </h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
</div>
<div className="persona">  
<img src="/my-react-app/public/images/campo.jpg" alt="campodonico"></img>
<h5>Juan Campodonico </h5>
<h6>Guitarra </h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
</div>
<div className="persona">  
<img src="/my-react-app/public/images/canedo.jpg" alt="pepe"></img>
<h5>Pepe Canedo </h5>
<h6>Bateria </h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
</div>
<div className="persona">  
<img src="/my-react-app/public/images/benia.jpg" alt="benia"></img>
<h5>Daniel Benia </h5>
<h6>Bajo</h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero nisi ullam praesentium cupiditate, tempore mollitia est minima molestias in placeat, corporis quae ducimus quasi molestiae temporibus assumenda veritatis vitae.</p>
</div>
</div>
</div>


</main>

    )
   
}

export default NosotrosPage;