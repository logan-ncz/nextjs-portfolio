import "../sass/_formAddProject.scss";

/**
 * Component used to add a project 
 * 
 * @returns 
 */
export default function FormAddProject() {
    return (
        <form className="form-add-project">
            <h2>Add a project to DB</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Github Pages</label>
                    <input name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Github Repository</label>
                    <input name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Thumbnail</label>
                    <input name="title" />
                </div>
            </fieldset>
        </form>
    )
}