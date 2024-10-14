import './Switch.css'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  inverted?: boolean
}

function Switch({ checked, onChange, inverted = false }: SwitchProps) {
  return (
    <label className={`switch ${inverted ? 'inverted' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
  )
}

export default Switch
