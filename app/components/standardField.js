export function StandardField({field, fieldDef, userPdfSettings, setUserPdfSettings, section}) {
    return (
        <>
            <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block bg-base-100 px-1 text-xs font-medium text-gray-900"
            >
                {field}
            </label>
            <input
                type={fieldDef.type}
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 bg-base-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                onChange={(e) => handleFieldChange(e.target.value, field, setUserPdfSettings, section, userPdfSettings)}
                placeholder={`${field}...`}
                value={userPdfSettings[section][field]}
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
    // else if(field === 'headerTextSize') {
    //     setUserPdfSettings((prevState) => ({
    //         ...prevState,
    //         [section]: {...prevState[section], [field]: value},
    //         Header: {...prevState.Cell, headerLineHeight: Math.max(prevState.Cell.headerLineHeight, value)}
    //       })
    //     );

    // } 
    else {
        setUserPdfSettings((prevState) => ({
            ...prevState,
            [section]: {...prevState[section], [field]: Number(value)}
          })
        );

    }
    
};