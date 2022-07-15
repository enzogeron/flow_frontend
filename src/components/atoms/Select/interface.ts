export interface SelectProps {
  options: string[]
  onChange: (city) => Promise<void>
  defaultValue?: string
}
