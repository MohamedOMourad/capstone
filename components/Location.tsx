import Select from "react-select"

const Location = ({ value, onChange, options }: { value: any, onChange: any, options: { label: string, value: string }[] }) => {
    const defaultValue = (options: { value: string, label: string }[], value: string) => {
        return options ? options.find((option) => option.value === value) : ''
    }
    return (
        <Select
            value={defaultValue(options, value)}
            options={options}
            onChange={(value) => onChange(value)}
        />
    )
}

export default Location;