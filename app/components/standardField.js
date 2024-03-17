export function StandardField({field, fieldDef, userPdfSettings, setUserPdfSettings}) {
    return (
        <>
            <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
                {field}
            </label>
            <input
                type={fieldDef.type}
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => handleFieldChange(e.target.value, field, setUserPdfSettings)}
                placeholder={`${field}...`}
                defaultValue={userPdfSettings[field]}
            />
        </>
    )
}

const handleFieldChange = (value, field, setUserPdfSettings) => {

    setUserPdfSettings((prevState) => ({
        ...prevState,
        [field]: value
      })
    )
  
};