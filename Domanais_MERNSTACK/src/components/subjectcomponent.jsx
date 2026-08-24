function SubjectComponent({subname, subcode, subdesc}) {
    return(
        <div>
            <h3>{subname}</h3>
            <p><strong>Code:</strong> {subcode}</p>
            <p><strong>Description:</strong> {subdesc}</p>
        </div>
    )
}
export default SubjectComponent;