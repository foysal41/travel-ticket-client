// components/LoadingSpinner.jsx

import { Spinner } from "@heroui/react";

export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Spinner
        size="lg"
        color="primary"
        label="Loading..."
      />
    </div>
  );
}