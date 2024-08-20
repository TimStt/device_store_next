import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const useShowEyePassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  const getIconEye = (className?: string) =>
    showPassword ? (
      <EyeOff className={className} onClick={() => setShowPassword(false)} />
    ) : (
      <Eye className={className} onClick={() => setShowPassword(true)} />
    );

  return [showPassword, getIconEye] as const;
};
