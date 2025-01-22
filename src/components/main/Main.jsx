import { useState } from "react"
import Form from "../form/Form";

const Main = () => {

    const [isFormVisible, showForm] = useState(false);
    const [articleList, setArticles] = useState([])

    const handleFormData = (data) => {
        console.log('Naujiena main komponente: ', data)
        setArticles((prevData) => {
            return [data, ...prevData]
        })
    }

    return (
        <main className="container">
            <h2>Naujienos</h2>
            <div className="article">
               {!isFormVisible && <button onClick={()=>{showForm(true)}}className="btn btn-primary">Prideti naujiena</button>}
               {isFormVisible && <Form onSave={handleFormData}/>}
            </div>
            {/* {articleList.map((article) =>)} */}
            
        </main>
 
    )
}

export default Main;




 // const [isMessageVisible, setMessage] = useState(false);

    // const handleButtonClick = () => {
    //     if(isMessageVisible) {
    //         setMessage(false)
    //     } else {
    //         setMessage(true)
    //     }
    // }

    // console.log(setMessage)

    // return (
    //     <main>
    //         <h2>Naujienos</h2>
    //         <button onClick={handleButtonClick}>{isMessageVisible ? 'Nerodyti' : 'Rodyti'}</button>
    //         {isMessageVisible && <div className="className">
    //             <h3>Svarbus pranesimas</h3>
    //             <p>Labai svarbus pranesimas</p>
    //         </div>}
    //     </main>
    // )