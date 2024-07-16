import React from "react";
import Entete from "../component/Entete";
import enteteImg from "../images/Entetes/legal.png";

export default function Mentions() {
  // texte entete
  const text1 = "Qui suis-je ?";
  const text2 = "Assurances";
  const text3 = "Mentions Légales";
  const text4 = "Données personnelles";
  const color = "white ";
  // image de fond
  const bgImg = enteteImg;

  return (
    <div>
      <Entete
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        bgImg={bgImg}
        color={color}
      />

      <div className="container-general">
        <div className="mentions-container">
        <h2>Mentions Légales :</h2>
            <p>Ce site est développé et est la propriété de :</p>
            <p>Christophe CHIAPPETTA</p>
            <p>4 rue de l'île verte</p>
            <p>30420 Calvisson</p>
            <p><a href="tel:+33699812296">telephone : 06.99.81.22.96</a></p>
            <p> <a href="mailto:christophe.chiappetta@gmail.com">
              mail : christophe.chiappetta@gmail.com</a></p>
            <br/>
        
            <h2>Hébergement</h2>
            <p> HOSTINGER, dont le siège social est situé HOSTINGER INTERNATIONAL LTD </p>
            <p> 61 Lordou Vironos Street, 6023 Larnaca, Chypre, </p>
            <p><a href="https://www.hostinger.fr/contact">https://www.hostinger.fr/contact</a>.</p>
            <br/>
            <h2>Données personnelles :</h2>
            <p>Pour vous offrir des services adaptés, nous pouvons être amenés à vous demander de nous fournir des données personnelles. Nous nous engageons à respecter votre vie privée, comme votre adresse, votre adresse mail ou votre numéro de téléphone en cas de contact,  et à protéger les informations que vous nous communiquez.</p><br/>
            <p>En particulier, les données recueillies via le formulaire de contact sont utilisées exclusivement dans le cadre de l'activité de la société et ne sont pas revendues à des tiers, suivant la directive de la CNIL :
            Conformément à la loi Informatique et Libertés du 6 Janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données personnelles que vous nous avez communiquées.</p>
            <br/>
            <p>Vous pouvez exercer ce droit en nous envoyant un courrier postal ou par mail.
            Pour toute information sur la protection des données personnelles, vous pouvez consulter le site de la Commission Informatique et Liberté <a href="http://www.cnil.fr/">(http://www.cnil.fr/)</a>.</p>
            <br/>
            <h2>Propriétés intellectuelles :</h2>
            <p>L'accès à notre site vous confère un droit d'usage privé et non exclusif de ce site.
            L'ensemble des éléments édités sur ce site, incluant notamment les textes, photographies, infographies, logos, marques… constituent des œuvres au sens du code de la Propriété Intellectuelle. En conséquence, toute représentation ou reproduction, intégrale ou partielle, qui pourrait être faite sans le consentement de leurs auteurs ou de leurs ayants-droit est illicite.</p>
            <br/>
        
            <h2>Qui suis-je ?</h2>
            <p>Christophe CHIAPPETTA</p>
            <p>Forme Juridique : artisan en nom propre / Entreprise à Resposabilité Limitée (EIRL)</p>
            <p>SIRET : 810.767.772.00017</p>
            <p>Date de création : 24 avril 2015</p>
            <p>Code APE : 4332A</p>
            <p>Activité : menuisier d'agencement, poseur de cuisines, meubles de salle de bain, dressing...</p>
            <br/>
            <h2>Le site <a href="www.christophe-cuisine.fr">christophe-cuisine.fr</a> :</h2>
             <p>est dévellopé pour des appareils de dernières générations.</p>
            <p>apprenti développeur autodidacte, certaines fonctionnalités pourraient ne pas être adaptées à votre appareil.</p>
            <p>Je ferai mon possible pour améliorer le site.</p>
            <p>Toutes les photos de cuisines sont le résultat de mes travaux.</p>
            <p>Ces photos ne sont pas celles d'un tiers.</p>
            <p>Je ne fais jamais de sous-traitance pour quelque mission que ce soit.</p>
            <p>Les photos d'illustrations sont issues du site <a href="www.unsplash.com"> Unsplash</a>.</p>
            <br/>
            <p>Si ma principale mission est la pose de cuisine,</p>
            <p>n'hésitez pas à me contacter pour des travaux préparatoires si besoin.</p>
            <p>déplacement de l'existant en plomberie et électricité.</p>
            <p>démontage et évacuation de la cuisine à démonter.</p>
            <br/>
            <p>Les travaux sont couverts par une assurance biennale/responsabilité civile ainsi qu'une décennale en fonction de leurs natures. Contrats d'assurance souscrits auprès de la MAAF. Disponibles sur demande.</p>
            <br/>
        
        </div>
        
      <div className="home-spacer"></div>
      </div>


    </div>
  );
}
