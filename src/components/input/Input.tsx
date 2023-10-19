import { ChangeEvent, useId } from "react";
import "./Input.css";

export default function Input({
  name,
  value,
  type = "input",
  onChange,
}: {
  name: string;
  value: string;
  type?: "input" | "textarea";
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const id = useId();
  return (
    <div className="input-container">
      <label htmlFor={id}>{name}</label>
      {type === "input" ? (
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea id={id} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}
