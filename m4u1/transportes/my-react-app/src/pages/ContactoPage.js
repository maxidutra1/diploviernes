import  React  from "react";
import   "../styles/components/pages/ContactoPage.css";
const ContactoPage = (props)=> {
    return (
<main className="holder contacto"> 
<div>
<h2>Contacto Rapido</h2>
<form action="" method="" className="formulario">
<p>
<label for="nombre">Nombre</label>
<input type="text" name=""></input>
</p>
<p>
<label for="email">Email</label>
<input type="text" name=""></input>
</p>
<p>
<label for="telefono">Telefono</label>
<input type="text" name=""></input>
</p>
<p>
<label for="mensaje">Mensaje</label>
<textarea name=""></textarea>
</p>
<p class="acciones"> <input type="submit" value="Enviar"/>
</p>
</form>
</div>
<div class="datos">
<h2>Otras vias de comunicacion </h2>
<ul>
  <li>Telefono</li>
  <li>Email</li>
  <li>Facebook</li>
</ul>
</div>
</main>
)
}
export default ContactoPage;