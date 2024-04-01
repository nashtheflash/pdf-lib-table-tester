export function StandardField({field, fieldDef, userPdfSettings, setUserPdfSettings, section}) {

    return (
        <>
            <label
                htmlFor="name"
                className="absolute select-none -top-2 left-2 inline-block bg-base-100 px-1 text-xs font-medium text-secondary"
            >
                {field}
            </label>
            <input
                type={fieldDef.type}
                name="name"
                id="name"
                className="input appearance-none input-bordered input-secondary input-sm w-full max-w-xs"
                onChange={(e) => handleFieldChange(e.target.value, field, setUserPdfSettings, section, userPdfSettings)}
                placeholder={userPdfSettings[section][field] === 0 ? 0 :'Auto'}
                value={userPdfSettings[section][field] === 0 ? 0 : userPdfSettings[section][field]}
            />
        </>
    )
}

const handleFieldChange = (value, field, setUserPdfSettings, section, userPdfSettings) => {
    
    if(field === 'cellTextSize'){

        setUserPdfSettings((prevState) => ({
            ...prevState,
            [section]: {
                ...prevState[section], 
                [field]: Number(value),
                cellLineHeight: Math.max(userPdfSettings.Cell.cellLineHeight, value)
            },
          })
        );

    } 
    else {
        setUserPdfSettings((prevState) => ({
            ...prevState,
            [section]: {...prevState[section], [field]: value}
          })
        );

    }
    
};