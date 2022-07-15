import { FC } from 'react'
import { Select } from 'antd'

import { SelectProps } from './interface'

const SelectCustom: FC<SelectProps> = ({
  options,
  onChange,
  defaultValue = null,
}) => {
  const { Option } = Select

  const handleChange = async (value: string) => {
    await onChange(value)
  }

  return (
    <Select
      size="middle"
      defaultValue={defaultValue || options[0]}
      onChange={handleChange}
      style={{ width: 200 }}
    >
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}

export default SelectCustom
