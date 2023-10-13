import React from "react";

interface ErrorMessageProps {
  error: string;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = React.memo(({ error }: ErrorMessageProps) => {
  if (!error) {
    return null;
  }
  return <div style={{ color: "red" }} role="alert">{error}</div>;
});
