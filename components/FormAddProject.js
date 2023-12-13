import "../sass/_formAddProject.scss";

/**
 * Component used to add a project 
 * 
 * @returns 
 */
export default function FormAddProject() {
    return (
        <form action="" className="form-add-project">
            <h2>Ajouter un projet à la liste</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Titre : </label>
                    <input name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="githubpages">Github Pages : </label>
                    <input name="githubpages" />
                </div>
                <div className="form-group">
                    <label htmlFor="githubrepository">Github Repository : </label>
                    <input name="githubrepository" />
                </div>
                <div className="form-group">
                    <label htmlFor="thumbnail">Miniature : </label>
                    <input name="thumbnail" />
                </div>
                <button type="submit">Valider</button>
            </fieldset>
        </form>
    )
}