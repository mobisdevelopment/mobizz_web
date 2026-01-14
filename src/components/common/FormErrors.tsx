import { XCircle } from "lucide-react";

interface FormErrorsProps {
  errors: string[];
}

export default function FormErrors({ errors }: FormErrorsProps) {
  return (
    <>
      {errors.length > 0 && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-800 dark:text-red-600 flex-shrink-0 fill-red-400 dark:fill-red-300" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                {errors.length === 1
                  ? "An error occurred"
                  : `${errors.length} errors occurred`}
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
