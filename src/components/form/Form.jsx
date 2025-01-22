
const Form = () => {

    const [formData, setFormData] = useState({
        'title': '',
        'content': '',
        'image': '',
        'link': ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSave(formData)
    }

    console.log('Formdata', formData)

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group m-1">
                <input type="text" className="form-control" placeholder="pavadinimas" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="form-group m-1">
                <textarea type="text" className="form-control" placeholder="turinys" name="content" defaultValue={formData.content} onChange={handleChange} />
            </div>
            <div className="form-group m-1">
                <input type="text" className="form-control" placeholder="nuotrauka" name="image" value={formData.image} onChange={handleChange} />
            </div>
            <div className="form-group m-1">
                <input type="text" className="form-control" placeholder="nuotraukos url" name="link" value={formData.link} onChange={handleChange} />
            </div>
            <div className="form-group m-1">
                <button className="btn btn-primary" type="submit">Saugoti</button>
            </div>
            
        </form>
    )
}

export default Form;