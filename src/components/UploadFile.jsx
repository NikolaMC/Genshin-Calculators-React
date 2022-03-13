import React from "react";

const UploadFile = ({ setFileData }) => {

    const handleChange = (e) => {

        const fileReader = new FileReader();

        if (e.target.files[0] !== undefined) {

            fileReader.readAsText(e.target.files[0], "UTF-8");

            fileReader.onload = (e) => {

                try {
                    setFileData(JSON.parse(e.target.result));
                } catch (error) {
                    alert("Please choose a valid JSON file");
                }

            }
        }
    }

    return (

        <div className="row g-3 align-items-center justify-content-center mb-1">
            <div className="col-5 mx-auto">
                <input type="file" className="form-control upload-file-input" accept=".json" onChange={handleChange} />
            </div>
        </div>

    );
}

export default UploadFile;