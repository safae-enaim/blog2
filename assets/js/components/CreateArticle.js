import React, { useState } from 'react';
import ArticleApi from '../../services/ArticleApi';
import formService from '../../services/formService';

import 'react-notifications/dist/react-notifications';
import 'react-notifications/dist/react-notifications.css';

import {NotificationContainer, NotificationManager} from 'react-notifications';



const CreateArticle = ({history}) => {


    const createNotification = (type) => {
        switch (type) {
          case 'info':
            NotificationManager.info('Info message');
            break;
          case 'success':
              console.log(type)
            NotificationManager.success('Success message', 'Votre Article a bien été enregistré. Merci bien!');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Votre enregistrement  a été échouée ', 5000, () => {
              alert('callback');
            });
            break;
        }
    }

    const [article, setArticle] = useState({
        auteur:"",
        date:"",
        titre:"",
        soustitre:"",
        image:"",
        contenu:"",
        categorie:""
    });

    
    const [idPost,setIdPost]=useState([])
    const [error, setError] = useState('');

    const handleChange = (event) => formService.handleChange(event, article, setArticle);

    const handleSubmit = (event) => {
        event.preventDefault();

        ArticleApi.create(article).then((id) => {
            setIdPost(id)
            createNotification('success')
        }).catch((error)=>createNotification('error'))
    }

    return ( 
        <>
                  <NotificationContainer /> 

            <h1 className="text-center my-5">Ajouter un article</h1>
         
              <form onSubmit={handleSubmit} className="container">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label >Auteur </label>
                        <input 
                            value={article.auteur}
                            onChange={handleChange} 
                            type="text"
                            name="auteur"
                            id="auteur"
                            className={"form-control" + (error && "is-invalid")}
                            required/>
                        {error && <p className="invalid-feedback">{error}</p>}
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="date">Date</label>
                                <input
                                    value={article.date}
                                    id="date"
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    onChange={handleChange}
                                    required />
                        </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label >Titre </label>
                        <input 
                            value={article.titre}
                            onChange={handleChange} 
                            type="text"
                            name="titre"
                            className={"form-control" + (error && "is-invalid")}
                            required/>
                        {error && <p className="invalid-feedback">{error}</p>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password">Sous-Titre</label>
                        <input 
                            value={article.soustitre}
                            onChange={handleChange} 
                            type="text" 
                            name="soustitre"
                            className="form-control"
                            required/>
                        </div>
                </div>
                
                <div className="row form-group">
                    <div className="col-md-6">
                        <label >Image </label>
                        <input 
                            value={article.image}
                            onChange={handleChange}  
                            type="text"
                            name="image"
                            className={"form-control" + (error && "is-invalid")}
                            required/>
                        {error && <p className="invalid-feedback">{error}</p>}
                    </div>
               
                </div>      
                
               <div className="form-group">
                    <label htmlFor="password">Contenu</label>
                    <textarea 
                        value={article.contenu}
                        onChange={handleChange}  
                        name="contenu"
                        className="form-control"
                        rows="4"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Categorie</label>
                    <textarea 
                        value={article.categorie}
                        onChange={handleChange} 
                        name="categorie"
                        className="form-control"
                        rows="4"
                        required />
                </div>
                
                 <center>      
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-info" >Valider</button> 
                    </div>
                    <div className="form-group">
                    <a href="/#/admin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Retour</a>
                    </div>
                </center>    
            </form>
            <div> </div>
           
        </> 
        );
}
 
export default CreateArticle;