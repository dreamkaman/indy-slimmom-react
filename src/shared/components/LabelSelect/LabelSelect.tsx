const LabelSelect = ({ labelHtmlFor, labelText, defaultOptionValue = "", optionsArray = [] }) => {
    console.log(labelHtmlFor);
    return <>
        <label htmlFor={labelHtmlFor}>{labelText}</label>

        <select name="pets" id={labelHtmlFor}>
            <option value="">{defaultOptionValue}</option>
            {optionsArray.length && optionsArray.map((optionItem) => {
                return <option value={optionItem}></option>
            })}
        </select>
    </>
}

export default LabelSelect;